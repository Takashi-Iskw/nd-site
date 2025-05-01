'use client'
import Image from 'next/image'

type Props = {
  avatar: string         // public フォルダ or S3 URL
  name: string
  role: string
}

export default function MemberCard({ avatar, name, role }: Props) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={avatar}
        alt={`${name} avatar`}
        width={64}
        height={64}
        className="rounded-full object-cover shrink-0"
      />
      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-neutral-400">{role}</span>
      </div>
    </div>
  )
}
