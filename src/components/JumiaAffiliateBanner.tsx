const JUMIA_AFFILIATE_LINK = "https://jforce.jumia.com.ng/s/gHkbkeJ";

export default function JumiaAffiliateBanner() {
  return (
    <section
      aria-label="Jumia affiliate promotion"
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <a
        href={JUMIA_AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
      >
        <img
          src="/images/xontopglobal-jumia-banner.png"
          alt="Xontopglobal Consultant Jumia affiliate promotion"
          className="block h-auto w-full"
        />
      </a>
    </section>
  );
}
