// app/login/page.tsx
'use client';

import PixelCard from '@/components/PixelCard/PixelCard';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="w-full max-w-screen-xl mx-auto grid grid-rows-[900px_2fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        {/* ボタン扱いにするため <button> でラップ */}
        <button
          onClick={() => signIn('cognito')}      // 後述のプロバイダー名
          className="focus:outline-none"
        >
          <PixelCard
            variant="blue"
            gap={8}
            speed={30}
            colors="#e0f2fe,#7dd3fc,#0ea5e9"
            className="relative flex items-center justify-center w-80 h-80 cursor-pointer select-none"
            noFocus
          >
            <span className="text-3xl font-bold tracking-widest pointer-events-none">
              LOGIN
            </span>
          </PixelCard>
        </button>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </div>
  );
}


// // app/login/page.tsx
// 'use client';

// import PixelCard from '@/components/PixelCard/PixelCard';

// export default function Login() {
//   return (
//     <div
//       className="
//         w-full
//         max-w-screen-xl
//         mx-auto
//         grid
//         grid-rows-[900px_2fr_20px]
//         min-h-screen
//         p-8 pb-20 gap-16
//         sm:p-20
//       "
//     >
//       <main className="flex flex-col gap-8 items-center sm:items-start">
//         <PixelCard
//           variant="blue"
//           gap={8}
//           speed={30}
//           colors="#e0f2fe,#7dd3fc,#0ea5e9"
//           className="relative p-6 rounded-lg bg-white/50"
//         >
//           {/* ログインフォーム */}
//           {/* <form className="w-full max-w-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="block w-full px-3 py-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 className="block w-full px-3 py-2 border rounded-md"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 rounded bg-[#00FF7F] font-semibold"
//             >
//               ログイン
//             </button>
//           </form> */}
//           aaa
//         </PixelCard>
//       </main>

//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         {/* フッター */}
//       </footer>
//     </div>
//   );
// }




// import PixelCard from '@/components/PixelCard/PixelCard'

// export default function Login() {
//   return (
//     <div className="w-full max-w-screen-xl mx-auto grid grid-rows-[900px_2fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-8 items-center sm:items-start">
//         <PixelCard
//           variant="blue"       // default, blue, yellow, pink
//           gap={8}              // ドット間隔
//           speed={30}           // アニメーション速度
//           colors="#e0f2fe,#7dd3fc,#0ea5e9"  // カラーパレット
//           className="p-6 rounded-lg bg-white/50"  // 任意のスタイル
//         >
//           {/* ここにログインフォームを入れる */}
//           <form className="w-full max-w-sm">
//             <label htmlFor="email">Email</label>
//             <input id="email" type="email" className="block w-full mb-4" />
//             <label htmlFor="password">Password</label>
//             <input id="password" type="password" className="block w-full mb-6" />
//             <button type="submit" className="w-full py-2 rounded bg-[#00FF7F]">
//               ログイン
//             </button>
//           </form>
//         </PixelCard>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         {/* … */}
//       </footer>
//     </div>
//   )
// }
