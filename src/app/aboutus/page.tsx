import { Twitter, Youtube } from 'lucide-react'
import SectionHeading from '@/components/Aboutus/SectionHeading'
import SNSLink from '@/components/Aboutus/SNSLink'
import MemberCard from '@/components/Aboutus/MemberCard'

export default function Mods() {
  const sns = [
    { icon: <Twitter />, label: '@NewbieDynamics', href: 'https://x.com/NewbieDynamics' },
    { icon: <Youtube />, label: 'NewbieDynamics',   href: 'https://www.youtube.com/@NewbieDynamics' },
  ]

  const members = [
    { avatar: '/avatars/fossa.png',   name: 'Fossamagna2355', role: 'インフラ管理' },
    { avatar: '/avatars/jabsco.png',  name: 'Jabsco_makinov', role: 'モデリング・ワールドデザイン' },
    { avatar: '/avatars/nama.png',    name: 'namahage54',     role: '設計・コーディング' },
  ]
  return (
    <div
      className="
        grid
        grid-rows-[600px_2fr_20px]
        items-center justify-items-center
        min-h-screen
        p-8 pb-20 gap-16
        sm:p-20
      "
    >
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <section className="mx-auto max-w-lg px-6 py-16 flex flex-col gap-12">
          {/* SNS */}
          <div className="flex flex-col gap-6">
            <SectionHeading>SNS</SectionHeading>
            <div className="flex flex-col gap-4">
              {sns.map(s => (
                <SNSLink key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Members */}
          <div className="flex flex-col gap-6">
            <SectionHeading>Member</SectionHeading>
            <div className="flex flex-col gap-6">
              {members.map(m => (
                <MemberCard key={m.name} {...m} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* フッターや他コンテンツ */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* … */}
      </footer>
    </div>
  )
}
