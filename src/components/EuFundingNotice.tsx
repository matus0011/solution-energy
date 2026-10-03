const placeholderMarks = ['Fundusze Europejskie', 'Barwy RP', 'Unia Europejska']

export default function EuFundingNotice() {
  return (
    <div className="flex flex-col gap-4 border border-[#e5e5e5] bg-[#fafafa] px-6 py-8 sm:px-8">
      <div className="flex flex-wrap items-center gap-4">
        {placeholderMarks.map((label) => (
          <div
            key={label}
            className="flex h-14 w-40 items-center justify-center border border-dashed border-slate-300 bg-white px-3 text-center text-[11px] font-medium uppercase tracking-wide text-slate-400"
          >
            logo: {label}
          </div>
        ))}
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-[#777777]">
        Projekt współfinansowany ze środków [nazwa programu] w ramach [nazwa funduszu].
      </p>
      <p className="text-[12px] text-[#777777]">
        Zestaw znaków do podmiany na oficjalne logotypy z funduszeeuropejskie.gov.pl.
      </p>
    </div>
  )
}
