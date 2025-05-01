'use client'
import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function SectionHeading({ children }: Props) {
  return (
    <h2 className="flex items-center gap-4 text-xl text-[#00FF7F] font-semibold tracking-widest">
      <span className="flex-1 h-px bg-[#00FF7F]" />
      {children}
      <span className="flex-1 h-px bg-[#00FF7F]" />
    </h2>
  )
}
