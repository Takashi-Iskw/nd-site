// lib/auth-options.ts
import type { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import GoogleProvider  from "next-auth/providers/google";

console.log("### RUNTIME SECRET:", process.env.NEXTAUTH_SECRET?.slice(0,8));
console.log("### REGION:", process.env.REGION);

export const authOptions: NextAuthOptions = {
    
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CognitoProvider({
        clientId: process.env.COGNITO_CLIENT_ID!,
        clientSecret: process.env.COGNITO_CLIENT_SECRET!,
        issuer: process.env.COGNITO_ISSUER!,        // 例: https://myapp.auth.ap-northeast-1.amazoncognito.com
      //   authorization: {                            // 直接 Microsoft 画面に飛ばすなら
      //     params: { identity_provider: 'Microsoft' }   // 👈 StackOverflow でも話題 :contentReference[oaicite:0]{index=0}
      //   }
      }),
      GoogleProvider({
          clientId: process.env.GOOGLE_ID!,
          clientSecret: process.env.GOOGLE_SECRET!,
      }),
    ],
    pages: {
      signIn: '/login',      // カスタムサインインページ
      error:  '/login',      // エラーも同じページに戻す
      newUser: '/link-minecraft',
    },

    session: {
      strategy: "jwt",
    },

    callbacks: {
      // トークン発行時に user.id を token に載せる
      async jwt({ token, user, account }) {
        if (account && user) {
          // 初回サインイン時に user オブジェクトが来る
          token.id = user.id;
        }
        return token;
      },
      // クライアント／サーバー側で getSession()/getServerSession() が呼ばれる度、
      // token.id を session.user.id にセットする
      async session({ session, token }) {
        session.user = {
          ...session.user,
          id: token.id as string,
        };
        return session;
      },
      // 既存のリダイレクト設定があれば残しておく
      async redirect({ baseUrl }) {
        return baseUrl;
      },
    },


    // callbacks: {
    //   // 認証成功後はトップに飛ばしたいなら
    //   async redirect({ baseUrl }) {
    //     return baseUrl;
    //   }
    // }
  
};