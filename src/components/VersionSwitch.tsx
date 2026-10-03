export type HomeVersion = 'default' | 'v1'

const options: { id: HomeVersion; label: string; hint: string }[] = [
  { id: 'default', label: 'Domyślna', hint: 'dotychczasowe demo' },
  { id: 'v1', label: 'v1', hint: 'układ z dziś' },
]

export default function VersionSwitch({
  version,
  onChange,
}: {
  version: HomeVersion
  onChange: (version: HomeVersion) => void
}) {
  return (
    <div className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 bg-[#26282C] p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
      <span className="px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">Układ</span>
      {options.map((option) => {
        const active = version === option.id
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.id)}
            className={`px-3 py-2 text-left text-[13px] leading-tight transition-colors ${
              active ? 'bg-[#fbba00] text-[#26282C]' : 'text-white hover:bg-white/10'
            }`}
          >
            <span className="block font-bold uppercase tracking-wide">{option.label}</span>
            <span className={`block text-[11px] ${active ? 'text-[#5c4a10]' : 'text-white/60'}`}>{option.hint}</span>
          </button>
        )
      })}
    </div>
  )
}
