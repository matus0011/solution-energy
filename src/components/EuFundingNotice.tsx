const placeholderMarks = ['Fundusze Europejskie', 'Barwy RP', 'Unia Europejska']

export default function EuFundingNotice() {
  return (
    <div className="border-t border-slate-200 bg-white px-6 py-8 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {placeholderMarks.map((label) => (
            <div
              key={label}
              className="flex h-14 w-40 items-center justify-center rounded border border-dashed border-slate-300 bg-slate-50 px-3 text-center text-[11px] font-medium uppercase tracking-wide text-slate-400"
            >
              logo: {label}
            </div>
          ))}
        </div>

        <p className="max-w-2xl text-xs leading-relaxed text-slate-400">
          Projekt współfinansowany ze środków [nazwa programu] w ramach [nazwa funduszu].
        </p>

        <p className="text-[11px] font-medium text-amber-600">
          Placeholder — do podmiany na oficjalny zestaw znaków z funduszeeuropejskie.gov.pl
        </p>
      </div>
    </div>
  )
}
