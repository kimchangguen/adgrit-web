import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "../../_components/SiteHeader";
import { Footer } from "../../_components/Footer";
import { Container } from "../../_components/Container";

const WP_BASE = process.env.WP_BASE ?? "";

async function getPost(id: string) {
  try {
    const res = await fetch(`${WP_BASE}/posts/${id}?_embed`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) { return null; }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-[#1a1a2e] flex flex-col items-center justify-center">
        <SiteHeader />
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <h2 className="text-2xl mb-4">글을 불러올 수 없습니다. 😢</h2>
          <Link href="/" className="text-[#1e40af] hover:underline">← 목록으로 돌아가기</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]">
      <SiteHeader />
      <main className="py-16 sm:py-20">
        <Container>
          <article className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-block mb-8 text-slate-600 hover:text-[#1e40af] transition-colors"
            >
              ← 목록으로 돌아가기
            </Link>

            <h1
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#1a1a2e]"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div className="text-slate-500 mb-10 text-sm">
              {new Date(post.date).toLocaleDateString("ko-KR")} 작성
            </div>

            {imageUrl && (
              <div className="relative w-full h-64 md:h-96 mb-12 rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src={imageUrl}
                  alt={post.title.rendered}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div
              className="max-w-none leading-relaxed text-slate-600 [&_a]:text-[#1e40af] [&_a:hover]:underline [&_p]:mb-4 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-xl [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
