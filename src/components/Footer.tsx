export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1A1A1A] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-baseline gap-0">
          <span className="font-serif text-sm font-normal text-[#F5F4F0]">Kinnear</span>
          <span className="font-serif text-sm font-normal text-[#F5F4F0]">Systems</span>
        </div>
        <p className="text-[11px] text-[rgba(245,244,240,0.4)] font-mono">
          © {year} Kinnear Systems · Cape Town, South Africa
        </p>
        <a
          href="mailto:rhys@kinnearsystems.co.za"
          className="text-[11px] text-[rgba(245,244,240,0.4)] hover:text-[#C8602A] font-mono transition-colors"
        >
          rhys@kinnearsystems.co.za
        </a>
      </div>
    </footer>
  );
}
