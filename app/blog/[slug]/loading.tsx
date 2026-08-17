import { SiteHeader } from "../../_components/SiteHeader";

export default function Loading() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader />
      <section className="ig-section pt-28 pb-10 sm:pt-32 sm:pb-12">
        <div className="ig-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-40 rounded bg-white/10 animate-pulse mb-6" />
          <div className="h-9 w-3/4 max-w-2xl rounded bg-white/10 animate-pulse" />
        </div>
      </section>
      <section className="ig-section">
        <main className="ig-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col gap-10 min-[1025px]:flex-row min-[1025px]:items-start">
            <article className="flex-1 min-w-0">
              <div className="w-full aspect-[16/9] rounded-2xl bg-white/5 animate-pulse mb-8" />
              <div className="rounded-2xl p-6 sm:p-8 lg:p-10 bg-white/5 animate-pulse space-y-4">
                <div className="h-4 w-full rounded bg-white/10" />
                <div className="h-4 w-full rounded bg-white/10" />
                <div className="h-4 w-2/3 rounded bg-white/10" />
              </div>
            </article>
            <aside className="blog-sidebar w-full shrink-0 space-y-6">
              <div className="rounded-2xl h-64 bg-white/5 animate-pulse" />
            </aside>
          </div>
        </main>
      </section>
    </div>
  );
}
