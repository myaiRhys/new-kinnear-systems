export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgba(26,26,26,0.08)] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-baseline gap-0">
          <span className="font-serif text-sm font-normal text-[#1A1A1A]">Kinnear</span>
          <span className="font-serif text-sm font-normal text-[#1A1A1A]">Systems</span>
        </div>
        <p className="text-[11px] text-[rgba(26,26,26,0.4)] font-mono">
          © {year} Kinnear Systems · Cape Town, South Africa
        </p>
        <a
          href="mailto:rhys@kinnearsystems.co.za"
          className="text-[11px] text-[rgba(26,26,26,0.4)] hover:text-[#1A1A1A] font-mono transition-colors underline-hover"
        >
          rhys@kinnearsystems.co.za
        </a>
      </div>
    </footer>
  );
}
