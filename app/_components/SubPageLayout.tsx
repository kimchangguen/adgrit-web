import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { Footer } from "./Footer";
import { Container } from "./Container";

type SubPageLayoutProps = {
  title: string;
  children: React.ReactNode;
  /** 상단 설명 (선택) */
  description?: string;
};

export function SubPageLayout({ title, description, children }: SubPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <SiteHeader />
      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <Container>
          <Link
            href="/"
            className="inline-block mb-8 text-slate-600 hover:text-[#222222] transition-colors text-sm"
          >
            ← 홈으로
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1f1f1f]">{title}</h1>
          {description && (
            <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">{description}</p>
          )}
          <div className="mt-10">{children}</div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
