'use client'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from 'recharts'

type Props = {
  data: {
    labels: readonly string[]
    you: readonly number[]
    average: readonly number[]
  }
}

export default function JobUsageRadar({ data }: Props) {
  // Recharts expects objects per vertex
  const chartData = data.labels.map((label, i) => ({
    job: label,
    you: data.you[i] ?? 0,
    average: data.average[i] ?? 0,
  }))

  return (
    <section className="w-full bg-[#0e151e] border border-[#0e151e] rounded-2xl p-6 shadow-md">
      <h2 className="text-lg font-semibold text-gray-100 mb-4">ジョブ毎のスキルポイント配分</h2>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <RadarChart data={chartData} outerRadius="75%">
            <PolarGrid strokeOpacity={0.3} />
            <PolarAngleAxis dataKey="job" tick={{ fill: '#d1d5db', fontSize: 12 }} />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar name="You"     dataKey="you"     fill="#00FF7F" fillOpacity={0.25} />
            <Radar name="Average" dataKey="average" fill="#9400d3" fillOpacity={0.25} />
            <Legend wrapperStyle={{ color: '#d1d5db' }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}