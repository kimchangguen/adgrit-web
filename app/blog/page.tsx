import Link from "next/link";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";
import { Container } from "../_components/Container";

const WP_REST_ENDPOINT =
  "https://wordpress-1580849-6168519.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&per_page=20&orderby=date";

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch(WP_REST_ENDPOINT, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("글을 불러올 수 없습니다.");
  return res.json();
}

function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

export default async function BlogPage() {
  let posts: Post[] = [];
  let error: string | null = null;

  try {
    posts = await getPosts();
  } catch {
    error = "블로그 글을 불러올 수 없습니다.";
  }

  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
      <SiteHeader />
      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <Container>
          <Link
            href="/"
            className="inline-block mb-8 text-slate-600 hover:text-[#1e40af] transition-colors text-sm"
          >
            ← 홈으로
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">블로그</h1>
          <p className="mt-4 text-slate-600 max-w-2xl">
            ADGRIT의 인사이트와 소식을 전합니다.
          </p>

          {error ? (
            <p className="mt-10 text-slate-600">{error}</p>
          ) : (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                const excerpt = stripHTML(post.excerpt.rendered);
                return (
                  <Link
                    key={post.id}
                    href={`/posts/${post.id}`}
                    className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-[#1e40af]/30 transition-all"
                  >
                    <div
                      className="h-48 w-full bg-cover bg-center bg-slate-100"
                      style={
                        imageUrl
                          ? { backgroundImage: `url('${imageUrl}')` }
                          : {
                              background:
                                "linear-gradient(to bottom right, rgb(30 64 175 / 0.1), rgb(30 58 95 / 0.05))",
                            }
                      }
                    />
                    <div className="p-6">
                      <time className="text-xs text-slate-500">
                        {new Date(post.date).toLocaleDateString("ko-KR")}
                      </time>
                      <h2
                        className="mt-2 text-lg font-bold text-[#1a1a2e] group-hover:text-[#1e40af] transition-colors line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <p className="mt-3 text-sm text-slate-600 line-clamp-2">{excerpt}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-[#1e40af]">
                        읽기 →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {!error && posts.length === 0 && (
            <p className="mt-10 text-slate-600">등록된 글이 없습니다.</p>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
