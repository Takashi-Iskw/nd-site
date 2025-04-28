'use client'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
// import ReactPlayer from 'react-player'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type Props = {
  title: string
  description: string
}

export default function SlideInBar({ title, description }: Props) {
  /* 20 % 画面に入ったらアニメ開始 */
  const [ref, inView] = useInView({ threshold: 0.2 })
  const barCtrl  = useAnimation()
  const textCtrl = useAnimation()

  useEffect(() => {
    if (inView) {
      barCtrl.start({ x: 0,        transition: { duration: .7, ease: 'easeOut' } })
      textCtrl.start({
        y: 0, opacity: 1,          transition: { duration: .5, ease: 'easeOut', delay: .3 }
      })
    } else {
      barCtrl.start({ x: '-100%' })
      textCtrl.start({ y: 20, opacity: 0 })
    }
  }, [inView, barCtrl, textCtrl])

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      {/* ─── 背面バー（左 50 % だけ覆う）──────── */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={barCtrl}
        /* 50 % の幅＝left:0 / right:50% でもいいけど、Tailwind なら w-1/2 */
        className="absolute top-0 left-0 h-32 w-1/2 bg-[#00FF7F]"
      />

      {/* ─── 2 カラム本体 ─── */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 p-0 md:p-0">
        {/* === 左カラム === */}
        <div className="pl-8 pr-8 md:pl-16 py-6 flex flex-col gap-24">
          {/* タイトル */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={textCtrl}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 drop-shadow"
          >
            {title}
          </motion.h1>

          {/* 説明文 */}
          <motion.p
            // font-sans        /* 英字用 */
            // font-jp          /* 日本語用（優先される） */
            initial={{ y: 20, opacity: 0 }}
            animate={textCtrl}
            transition={{ delay: .45, duration: .4 }}
            className="font-jp whitespace-pre-line max-w-xl text-lg md:text-2xl leading-relaxed text-white/90 underline decoration-[#00FF7F]/80 decoration-2 underline-offset-4"
//            className="max-w-xl text-lg md:text-xl leading-relaxed text-gray-200
//            underline decoration-emerald-300/80 decoration-[3px] underline-offset-4
//            whitespace-pre-line"
          >
            {description}
          </motion.p>
        </div>

        

        {/* === 右カラム（動画） === */}
        <div className="flex items-center justify-center py-16 pr-8 md:pr-16">
            <div className="w-full aspect-video rounded-xl shadow-lg ring-1 ring-[#00FF7F]/20 overflow-hidden">
                <ReactPlayer
                url="/videos/demo.mp4"
                width="100%"
                height="100%"
                controls
                playing
                muted
                />
            </div>
        </div>
      </div>
    </section>
  )
}
