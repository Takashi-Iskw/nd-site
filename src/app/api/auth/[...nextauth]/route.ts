import NextAuth, { NextAuthOptions } from 'next-auth';
import CognitoProvider from 'next-auth/providers/cognito';

export const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER!,        // 例: https://myapp.auth.ap-northeast-1.amazoncognito.com
      authorization: {                            // 直接 Microsoft 画面に飛ばすなら
        params: { identity_provider: 'Microsoft' }   // 👈 StackOverflow でも話題 :contentReference[oaicite:0]{index=0}
      }
    })
  ],

  pages: {
    signIn: '/login',        // さっきのページ
    newUser: '/link-minecraft' // 初回だけここに飛ばし Minecraft 名入力
  },

  callbacks: {
    async jwt({ token, user }) {
      // 初回サインイン時に DB から Minecraft 名を取得して token に乗せる
      if (user) {
        const mc = await fetchMinecraftUsername(user.email);
        token.minecraftUsername = mc ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      // フロント側でも使えるように
      session.user.minecraftUsername = token.minecraftUsername as string | null;
      return session;
    }
  }
};

export const { GET, POST } = NextAuth(authOptions);
