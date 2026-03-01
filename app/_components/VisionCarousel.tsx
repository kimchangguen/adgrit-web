"use client";

export type VisionItem = {
  iconKey: string;
  titleEn: string;
  desc: string;
  imageUrl: string;
};

function VisionCard({
  imageUrl,
  titleEn,
  desc,
}: {
  imageUrl: string;
  titleEn: string;
  desc: string;
}) {
  return (
    <div className="flex w-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-slate-300 transition-all">
      <div
        className="h-44 sm:h-52 w-full flex-shrink-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-800">{titleEn}</h3>
        <p className="mt-2 text-[14px] sm:text-[15px] font-bold leading-relaxed text-slate-700">{desc}</p>
      </div>
    </div>
  );
}

export function VisionCarousel({
  items,
  title,
}: {
  items: VisionItem[];
  title: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
      {/* 왼쪽 패널: 타이틀 (폭 확대) */}
      <div className="shrink-0 lg:w-[48%] xl:w-[50%]">
        <SectionKicker>Vision</SectionKicker>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl lg:text-[1.75rem] xl:text-[2rem]">
          {title}
        </h2>
      </div>

      {/* 오른쪽 패널: 2열 그리드 (2개씩 보이도록) */}
      <div className="min-w-0 flex-1 grid grid-cols-2 gap-4 sm:gap-6">
        {items.map((item) => (
          <VisionCard
            key={item.titleEn}
            imageUrl={item.imageUrl}
            titleEn={item.titleEn}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1e40af]">
      {children}
    </span>
  );
}
