import { homeStats } from '@/lib/company'

export default function StatsStrip() {
  return (
    <section className="bg-[#fbba00] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
        {homeStats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 border-l-[3px] border-[#26282C] pl-5">
            <span className="font-heading text-4xl font-bold leading-none text-[#26282C] sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-[15px] font-semibold text-[#5c4a10]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
