/**
 * Shared dark-primary CTA banner used across multiple pages.
 * Props:
 *   title    – headline string
 *   subtitle – body copy string
 *   primaryBtn  – { label, href }
 *   secondaryBtn – { label, href }
 */
export default function CTASection({ title, subtitle, primaryBtn, secondaryBtn }) {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-8">
          {title}
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryBtn && (
            <a
              href={primaryBtn.href || '#'}
              className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-lg font-bold tracking-wide uppercase shadow-2xl hover:scale-105 transition-transform"
            >
              {primaryBtn.label}
            </a>
          )}
          {secondaryBtn && (
            <a
              href={secondaryBtn.href || '#'}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-lg font-bold tracking-wide uppercase hover:bg-white/20 transition-colors"
            >
              {secondaryBtn.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
