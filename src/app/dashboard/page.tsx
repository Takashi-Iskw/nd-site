import ServerStatusCard from '@/components/dashboard/LoginStatusCard'
import KillDeathChart   from '@/components/dashboard/KillDeathChart'
import JobUsageRadar    from '@/components/dashboard/JobUsageRadar'
import LogoutButton     from '@/components/dashboard/LogoutButton'


export default function Dashboard() {
  const killDeathData = [
    { date: '4/26', kill: 23, death:  5 },
    { date: '4/27', kill: 12, death:  7 },
    { date: '4/28', kill: 18, death:  9 },
    { date: '4/29', kill:  9, death:  3 },
    { date: '4/30', kill: 27, death:  8 },
  ] as const

  const jobUsageData = {
    labels: ['Captain', 'Navigator', 'Musician', 'Warrior', 'Mechanic'],
    you:       [12,  4, 10, 3, 6],
    average:   [ 7,  6,  9, 5, 8],
  } as const
  return (
    <div
    className="
       w-full                /* 画面幅いっぱい */
       max-w-screen-xl       /* 最大幅を1200pxくらいに */
       mx-auto               /* 中央寄せ */
       grid
       grid-rows-[900px_2fr_20px]
       min-h-screen
       p-8 pb-20 gap-16
       sm:p-20
     "
    >
      <main className="flex flex-col gap-8 items-center sm:items-start">
        {/* ① サーバー参加状況メッセージ */}
        <ServerStatusCard username="namahage54" daysSinceLastLogin={2} />

        {/* ② Kill / Death / KD */}
        <KillDeathChart data={killDeathData} />

        {/* ③ ジョブ使用回数レーダー */}
        <JobUsageRadar data={jobUsageData} />

        {/* ④ ログアウト CTA */}
        <div className="self-center pt-8">
          <LogoutButton />
        </div>

      </main>

      {/* フッターや他コンテンツ */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* … */}
      </footer>
    </div>
  )
}
