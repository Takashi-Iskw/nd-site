// src/app/api/auth/[...nextauth]/route.ts

// import NextAuth, { NextAuthOptions } from 'next-auth';
// import CognitoProvider from 'next-auth/providers/cognito';
// import GoogleProvider from 'next-auth/providers/google';

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth-options";


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CognitoProvider({
//       clientId: process.env.COGNITO_CLIENT_ID!,
//       clientSecret: process.env.COGNITO_CLIENT_SECRET!,
//       issuer: process.env.COGNITO_ISSUER!,        // 例: https://myapp.auth.ap-northeast-1.amazoncognito.com
//     //   authorization: {                            // 直接 Microsoft 画面に飛ばすなら
//     //     params: { identity_provider: 'Microsoft' }   // 👈 StackOverflow でも話題 :contentReference[oaicite:0]{index=0}
//     //   }
//     }),
//     GoogleProvider({
//         clientId: process.env.GOOGLE_ID!,
//         clientSecret: process.env.GOOGLE_SECRET!,
//     }),
//   ],
//   pages: {
//     signIn: '/login',      // カスタムサインインページ
//     error:  '/login',      // エラーも同じページに戻す
//     newUser: '/link-minecraft',
//   },
//   callbacks: {
//     // 認証成功後はトップに飛ばしたいなら
//     async redirect({ baseUrl }) {
//       return baseUrl;
//     }
//   }

// };

// export const { GET, POST } = NextAuth(authOptions);
