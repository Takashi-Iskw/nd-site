'use client'

import {
  ComposedChart, XAxis, YAxis,  Tooltip,
  Legend, Bar, Line, ResponsiveContainer
} from 'recharts'

type DataPoint = {
  date: string
  kill: number
  death: number
}

type Props = {
  data: readonly DataPoint[]
}

export default function KillDeathChart({ data }: Props) {
  return (
    <section className="w-full bg-[#0e151e] border border-[#0e151e] rounded-2xl p-6 shadow-md">
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Kill, Death &amp; K/D ratio (過去 5 日間)</h2>
      <div className="w-full h-72">
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
            {/* <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} /> */}
            <XAxis dataKey="date" className="fill-gray-300 text-xs" />
            <YAxis yAxisId="left" className="fill-gray-300 text-xs" />
            <YAxis yAxisId="right" orientation="right" hide />
            <Tooltip contentStyle={{ background: '#1f2937', border: 'none' }} labelStyle={{ color: '#fff' }} />
            <Legend wrapperStyle={{ color: '#d1d5db' }} />

            {/* Bars */}
            <Bar yAxisId="left" dataKey="kill"  name="Kill"   barSize={18} radius={[4, 4, 0, 0]} fill="#00FF7F" fillOpacity={0.6}/>
            <Bar yAxisId="left" dataKey="death" name="Death" barSize={18} radius={[4, 4, 0, 0]} fill="#9400d3" fillOpacity={0.6} />
            {/* KD Ratio line – calculated inline */}
            <Line yAxisId="right" type="monotone" dataKey={(d: DataPoint) => (d.death === 0 ? d.kill : d.kill / d.death)} name="K/D ratio" dot={{ r: 4 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}