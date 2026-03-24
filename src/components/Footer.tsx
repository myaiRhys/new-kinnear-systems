export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-navy-700 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-baseline gap-0">
          <span className="font-display text-sm font-semibold text-white">Kinnear</span>
          <span className="font-display text-sm font-semibold text-blue">Systems</span>
        </div>
        <p className="text-xs text-off-wht/30 font-mono">
          © {year} Kinnear Systems · Cape Town, South Africa
        </p>
        <a
          href="mailto:rhys@kinnearsystems.co.za"
          className="text-xs text-off-wht/40 hover:text-blue font-mono transition-colors underline-hover"
        >
          rhys@kinnearsystems.co.za
        </a>
      </div>
    </footer>
  );
}
