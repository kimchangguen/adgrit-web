export type SectionVariant =
  | "s2"
  | "s3"
  | "s4"
  | "s5"
  | "s5b"
  | "s6"
  | "s7"
  | "s7b"
  | "s8"
  | "s8b"
  | "footer";

// 섹션별 Aurora Ribbon / Glow Blob / Mesh Gradient / Ring 장식은 더 이상 쓰지 않는다.
// 모든 섹션은 layout.tsx의 site-fixed-background(공통 히어로 이미지) 하나를 공유하고,
// 그 위에 .ig-section::before의 옅은 오버레이만 얹는다. 호출부(SectionBackdrop variant="...")는
// 그대로 두고 이 컴포넌트만 no-op으로 바꿔 한 곳에서 전체 사이트의 장식을 껐다.
export function SectionBackdrop(_props: { variant: SectionVariant }) {
  return null;
}
