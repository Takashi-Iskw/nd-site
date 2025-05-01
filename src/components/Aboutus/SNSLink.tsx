'use client'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  label: string
  href: string
}

export default function SNSLink({ icon, label, href }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 group"
    >
      <span className="text-3xl">{icon}</span>
      <span className="group-hover:underline underline-offset-4">
        {label}
      </span>
    </Link>
  )
}
