import { SiteHeader } from "../../../_components/SiteHeader";

export default function Loading() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader />
      <section className="ig-section pt-28 pb-10 sm:pt-32 sm:pb-12">
        <div className="ig-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-40 rounded bg-white/10 animate-pulse mb-4" />
          <div className="h-9 w-1/2 max-w-md rounded bg-white/10 animate-pulse" />
        </div>
      </section>
      <section className="ig-section">
        <main className="ig-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 min-w-0 grid gap-6 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden bg-white/5 animate-pulse">
                  <div className="w-full aspect-[16/9] bg-white/10" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-1/3 rounded bg-white/10" />
                    <div className="h-4 w-full rounded bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
            <aside className="blog-sidebar w-full shrink-0 space-y-6">
              <div className="rounded-2xl h-64 bg-white/5 animate-pulse" />
            </aside>
          </div>
        </main>
      </section>
    </div>
  );
}
