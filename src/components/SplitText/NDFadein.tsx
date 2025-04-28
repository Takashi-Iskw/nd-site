'use client'

import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import SplitText from '@/components/SplitText/SplitText'

export default function NDFadein() {

  type Phase = 'typing' | 'fadeOut' | 'image' | 'done'
  const [phase, setPhase] = useState<Phase>('typing')

  /* ───────── TEXT ───────── */
  const fadeText = useSpring({
    opacity: phase === 'fadeOut' || phase === 'done' ? 0 : 1,
    config: { duration: 600 },
    // フェードアウトが終わった“直後”に image フェーズへ
    onRest: () => {
      if (phase === 'fadeOut') setPhase('image')
    },
  })

  /* ───────── IMAGE ───────── */
  const imgStyle = useSpring({
    opacity: phase === 'image' || phase === 'done' ? 1 : 0,
    config: { duration: 800 },
  })

  return (
    <div className="
        relative 
        flex 
        flex-col
        min-h-screen 
        items-center justify-center
        overflow-hidden
    ">
      {/* ===== TEXT ===== */}
      {(phase !== 'image') && (                /* image になったら即アンマウント */
        <animated.div style={fadeText}>
          <SplitText
            text="Newbie Dynamics"
            className="text-8xl font-bold"
            onLetterAnimationComplete={() => setPhase('fadeOut')}
          />
        </animated.div>
      )}

      {/* ===== IMAGE ===== */}
      {/* 画像は image フェーズになった瞬間フェードイン、常駐させる */}
      <animated.div
        style={imgStyle}
        // className="absolute inset-0 z-10 pointer-events-none"
        className="
            inset-0 
            z-10 
            pointer-events-none
            -translate-y-40
            "
      >
        <img
          src="/newbie_dynamics_seal_bgremoved.png"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </animated.div>
    </div>
  )
}
