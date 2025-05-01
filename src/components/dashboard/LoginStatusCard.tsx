'use client'

import { CircleAlert } from 'lucide-react'

type Props = {
  username: string
  daysSinceLastLogin: number
}

export default function LoginStatusCard({ username, daysSinceLastLogin }: Props) {
  return (
    <section className="w-full bg-[#0e151e] border border-[#0e151e] rounded-2xl p-6 flex flex-col gap-2 shadow-md">
        <div className="flex items-center gap-4">
            <CircleAlert className="text-[#00FF7F] shrink-0" />
            <h1 className="text-sm sm:text-base text-gray-100">
            やあ, <span className="text-[#00FF7F]">{username}</span>
            </h1>
        </div>
        <p className="text-sm sm:text-base text-gray-100">
            サーバーへの最終ログイン日から {daysSinceLastLogin} 日経過しています。
        </p>
    </section>
  )
}