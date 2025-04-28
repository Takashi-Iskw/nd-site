// import SplitText from '@/components/SplitText/SplitText'
// import NDFadein from '@/components/SplitText/NDFadein'


// export default function Page() {
//   return (
//     <div
//       className="
//         grid
//         grid-rows-[200px_2fr_20px]
//         items-center justify-items-center
//         min-h-screen
//         p-8 pb-20 gap-16
//         sm:p-20
//       "
//     >
//       <main className="flex flex-col gap-8 items-center sm:items-start">
//         {/* ここでテキストを中央に寄せたいなら、クラスで調整 */}
//         <SplitText
//           text="Newbie Dynamics"
//           className="text-8xl font-bold"
//         />
//         <NDFadein />
//       </main>

//       {/* フッターや他コンテンツ */}
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         {/* … */}
//       </footer>
//     </div>
//   )
// }


import NDFadein from '@/components/SplitText/NDFadein'
import SlideInBar from '@/components/SlideInBar/SlideInBar'

export default function Page() {
  return (
    <div
      className="
        grid
        grid-rows-[auto_1fr_20px]
        min-h-screen
        w-screen            /* ← 画面幅いっぱい */
        justify-items-start /* 子を左詰め           */
      "
    >
      {/* --------- MAIN --------- */}
      <main
        className="
          row-start-1
          flex flex-col gap-8
          w-full
          px-8 sm:px-16     /* ← 必要なら左右だけ控えめに */
          py-24            /* ← 上下は自由 */
        "
      >

        {/* 画像フェード演出 */}
        <NDFadein />
        <SlideInBar title='More creative' description={'クリエイティブさが私達の力学です。\n 私達が生み出すものによって、\n多くの人々に創造の喜びを提供します。'} />
      </main>

      {/* --------- FOOTER --------- */}
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        {/* … */}
      </footer>
    </div>
  )
}
