// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { Twitter, Youtube } from 'lucide-react'

// /**
//  * Footer – サイト共通フッター
//  *
//  * 黒背景 / エメラルドグリーン(#00FF7F)アクセント。
//  * 左: ページ一覧 (PAGES 見出し付き)
//  * 右: SNS (X, YouTube) 縦並び
//  * 下: ロゴ + Copyright 表記
//  */
// export default function Footer() {
//   return (
//     <footer className="w-full bg-black text-white px-8 py-12 flex flex-col gap-8 select-none">
//       {/* Upper section */}
//       <div className="flex flex-col sm:flex-row justify-between gap-8">
//         {/* Pages */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#00FF7F] mb-4 tracking-wider">PAGES</h3>
//           <nav className="flex flex-col gap-2 text-sm">
//             <Link href="/" className="hover:text-[#00FF7F] transition-colors">HOME</Link>
//             <Link href="/mods" className="hover:text-[#00FF7F] transition-colors">MODS</Link>
//             <Link href="/server" className="hover:text-[#00FF7F] transition-colors">SERVER</Link>
//             <Link href="/media" className="hover:text-[#00FF7F] transition-colors">MEDIA</Link>
//             <Link href="/dashboard" className="hover:text-[#00FF7F] transition-colors">DASHBOARD</Link>
//           </nav>
//         </div>

//         {/* Social links */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#00FF7F] mb-4 tracking-wider">FOLLOW</h3>
//           <div className="flex flex-col gap-4 text-sm">
//             <Link href="https://x.com/NewbieDynamics" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#00FF7F] transition-colors">
//               <Twitter className="w-5 h-5" />
//               <span>X&nbsp;(Twitter)</span>
//             </Link>
//             <Link href="https://www.youtube.com/@NewbieDynamics" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#00FF7F] transition-colors">
//               <Youtube className="w-5 h-5" />
//               <span>YouTube</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="h-px bg-[#00FF7F]/40" />

//       {/* Bottom section */}
//       <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
//         <div className="flex items-center gap-3">
//           <Image src="/newbie_dynamics_seal_bgremoved.png" alt="Newbie Dynamics Seal" width={48} height={48} />
//           <span>© 2025 Newbie Dynamics. All rights reserved.</span>
//         </div>
//         <span className="text-gray-500">Built with Next.js & TailwindCSS</span>
//       </div>
//     </footer>
//   )
// }


'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Youtube } from 'lucide-react'

/**
 * Footer – サイト共通フッター
 * 端寄せだったコンテンツを max‑width コンテナで中央寄せ。
 */
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white select-none">
      {/* main area – 横幅を中央寄せ */}
      <div className="max-w-screen-xl mx-auto px-8 py-12 flex flex-col gap-8 md:flex-row md:justify-between">
        {/* Pages */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[#00FF7F]">PAGES</h2>
          <nav className="flex flex-col gap-2">
            <Link href="/"         className="hover:text-[#00FF7F] transition">HOME</Link>
            <Link href="/mods"     className="hover:text-[#00FF7F] transition">MODS</Link>
            <Link href="/server"   className="hover:text-[#00FF7F] transition">SERVER</Link>
            <Link href="/aboutus"    className="hover:text-[#00FF7F] transition">ABOUT US</Link>
            <Link href="/dashboard"className="hover:text-[#00FF7F] transition">DASHBOARD</Link>
          </nav>
        </div>

        {/* SNS */}
        <div className="flex flex-col gap-4 items-start">
          <h2 className=" font-bold text-[#00FF7F] mb-4 tracking-wider">FOLLOW</h2>
          <Link href="https://x.com/NewbieDynamics" className="flex items-center gap-2 hover:text-[#00FF7F] transition">
            <Twitter size={20} /> X
          </Link>
          <Link href="https://www.youtube.com/@NewbieDynamics" className="flex items-center gap-2 hover:text-[#00FF7F] transition">
            <Youtube size={20} /> YouTube
          </Link>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-[#00FF7F]/40 mt-8 pt-6">
      
        <div className="max-w-screen-xl mx-auto px-8 flex items-center gap-4">
          <Image src="/newbie_dynamics_seal_bgremoved.png" alt="Newbie Dynamics" width={40} height={40} />
          <span className="text-sm">© {new Date().getFullYear()} Newbie Dynamics. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
