const WP_REST_ENDPOINT =
  "https://wordpress-1580849-6168519.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&per_page=5";

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
};

async function getRecentPosts(): Promise<Post[]> {
  const res = await fetch(WP_REST_ENDPOINT, {
    next: { revalidate: 60 }, // Cache for 1 minute, optional
  });
  if (!res.ok) throw new Error("글을 불러올 수 없습니다.");
  return res.json();
}

function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "");
}

export default async function Home() {
  let posts: Post[] = [];
  let error: string | null = null;

  try {
    posts = await getRecentPosts();
  } catch (e) {
    error = "최근 게시글을 불러올 수 없습니다.";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-950 to-black font-sans px-0">
      {/* Header */}
      <header className="w-full flex items-center px-8 py-6">
        <span className="text-3xl font-black tracking-wider text-white select-none">
          AD
          <span className="text-indigo-400 drop-shadow-[0_2px_6px_rgba(99,102,241,0.8)]">GRIT</span>
        </span>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-black">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 text-center leading-tight drop-shadow-lg">
          매출로 증명하는, <span className="text-indigo-400">애드그릿</span>
        </h1>
        <p className="text-2xl sm:text-3xl font-medium text-zinc-300 text-center mb-2 tracking-tight">
          마케팅의 본질을 꿰뚫다
        </p>
      </section>

      {/* Posts Section */}
      <main className="w-full max-w-7xl px-6 mx-auto py-20 grid gap-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8 text-left">
          최신 인사이트
        </h2>
        {error ? (
          <div className="text-red-500 text-lg text-center">{error}</div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const thumbnail =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
              const alt =
                post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ?? stripHTML(post.title.rendered);

              return (
                <a
                  key={post.id}
                  href={`/posts/${post.id}`}
                  className="flex flex-col rounded-2xl shadow-xl bg-zinc-900/95 border border-zinc-800 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-200 group overflow-hidden"
                >
                  {thumbnail && (
                    <img
                      src={thumbnail}
                      alt={alt}
                      className="w-full object-cover h-48 bg-zinc-800"
                    />
                  )}
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                      {stripHTML(post.title.rendered)}
                    </h3>
                    <div
                      className="text-zinc-300 text-base line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered || "",
                      }}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
