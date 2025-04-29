import ShowMods from "@/components/ShowMods/ShowMods"
import SlideInBar from '@/components/SlideInBar/SlideInBar'

export default function Mods() {
  return (
    <div
      className="
        grid
        grid-rows-[1600px_2fr_20px]
        items-center justify-items-center
        min-h-screen
        p-8 pb-20 gap-16
        sm:p-20
      "
    >
      <main className="flex flex-col gap-8 items-center sm:items-start">
        {/* ここでテキストを中央に寄せたいなら、クラスで調整 */}
        <ShowMods />
        <SlideInBar title='More creative' description={'クリエイティブさが私達の力学です。\n 私達が生み出すものによって、\n多くの人々に創造の喜びを提供します。'} />
      </main>

      {/* フッターや他コンテンツ */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* … */}
      </footer>
    </div>
  )
}
