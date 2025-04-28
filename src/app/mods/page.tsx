import SplitText from '@/components/SplitText/SplitText'
import NDFadein from '@/components/SplitText/NDFadein'


export default function Mods() {
  return (
    <div
      className="
        grid
        grid-rows-[200px_2fr_20px]
        items-center justify-items-center
        min-h-screen
        p-8 pb-20 gap-16
        sm:p-20
      "
    >
      <main className="flex flex-col gap-8 items-center sm:items-start">
        {/* ここでテキストを中央に寄せたいなら、クラスで調整 */}
        <SplitText
          text="Mods"
          className="text-8xl font-bold"
        />
        <NDFadein />
      </main>

      {/* フッターや他コンテンツ */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* … */}
      </footer>
    </div>
  )
}
