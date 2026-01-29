import Link from "next/link";
import Image from "next/image";

// 형님의 워드프레스 주소
const WP_BASE_URL = "https://wordpress-1580849-6168519.cloudwaysapps.com";

// 글 데이터 가져오는 함수
async function getPost(id: string) {
  try {
    const res = await fetch(`${WP_BASE_URL}/wp-json/wp/v2/posts/${id}?_embed`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) { return null; }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// ★ 중요: params 타입을 Promise로 변경 (최신 Next.js 15 규칙)
export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  // ★ 여기서 한번 '기다려(await)'줘야 에러가 안 납니다!
  const { id } = await params;
  const post = await getPost(id);

  // 글이 없거나 에러 났을 때 보여줄 화면
  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">글을 불러올 수 없습니다. 😢</h2>
        <Link href="/" className="text-blue-400 hover:underline">← 목록으로 돌아가기</Link>
      </div>
    );
  }

  // 썸네일 이미지 주소 추출
  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <article className="max-w-3xl mx-auto">
        {/* 뒤로 가기 버튼 */}
        <Link 
          href="/" 
          className="inline-block mb-8 text-gray-400 hover:text-white transition-colors"
        >
          ← 목록으로 돌아가기
        </Link>

        {/* 제목 */}
        <h1 
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* 작성일 */}
        <div className="text-gray-500 mb-10 text-sm">
          {new Date(post.date).toLocaleDateString()} 작성
        </div>

        {/* 썸네일 이미지 (있으면 보임) */}
        {imageUrl && (
          <div className="relative w-full h-64 md:h-96 mb-12 rounded-xl overflow-hidden bg-gray-900">
            <Image 
              src={imageUrl} 
              alt={post.title.rendered} 
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* 본문 내용 */}
        <div 
          className="prose prose-invert prose-lg max-w-none leading-relaxed text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </main>
  );
}