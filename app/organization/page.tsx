"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MoreHorizontal, UserCircle } from "lucide-react";
import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";
import { SectionBackdrop } from "../_components/backgrounds/SectionBackdrop";

const EASE = [0.22, 1, 0.36, 1] as const;

const DEPARTMENTS = [
  {
    role: "대표",
    name: "ADGRIT CEO",
    avatarSrc: "",
    summary: "전략 의사결정과 전체 조직 운영",
    items: ["R&D 센터", "경영지원부서"],
  },
  {
    role: "CONSULTING",
    name: "Consulting Division",
    avatarSrc: "",
    summary: "브랜드와 시장을 분석해 캠페인의 방향을 설계합니다.",
    items: [
      "프로젝트 제안 기획",
      "브랜드 분석",
      "타겟 설정",
      "매체 및 방식 전략",
      "문제 수정",
      "미스터리쇼퍼",
    ],
  },
  {
    role: "DIGITAL IMC",
    name: "Digital IMC Division",
    avatarSrc: "",
    summary: "디지털 접점 전반의 통합 마케팅 실행을 담당합니다.",
    items: [
      "IMC 통합 마케팅",
      "인스타그램 통합 마케팅",
      "페이스북 타겟 광고",
      "블로그 통합 마케팅",
      "카페 마케팅 및 바이럴",
      "SNS 마케팅",
      "플레이스 설계 및 관리",
      "언론홍보",
      "유튜브",
      "당근, 카카오, 밴드",
    ],
  },
  {
    role: "CREATIVE",
    name: "Creative Division",
    avatarSrc: "",
    summary: "콘텐츠 기획부터 이미지, 영상 제작까지 브랜드 표현을 만듭니다.",
    items: [
      "슬로건 아이덴티티 구축",
      "CRM 앤트 설계",
      "동영상 촬영 및 편집",
      "블로그 원고",
      "블로그 이미지",
      "디스플레이 배너",
      "카드 뉴스",
      "인스타그램용 이미지",
    ],
  },
  {
    role: "DEVELOPMENT",
    name: "Development Division",
    avatarSrc: "",
    summary: "운영 로직과 자동화, 노출 성과를 높이는 개발을 수행합니다.",
    items: [
      "준 최적화 블로그",
      "인스타 노출 솔루션",
      "플레이스 리뷰 솔루션",
      "블로거 서칭 및 개발",
      "블로그 로직 연구",
      "인스타그램 로직 연구",
    ],
  },
  {
    role: "REPUBLISHING",
    name: "Republishing Division",
    avatarSrc: "",
    summary: "웹 구현과 UI/UX 컨설팅으로 캠페인 실행 환경을 정비합니다.",
    items: ["HTML", "JAVA", "PHP", "UI UX 컨설팅", "웹 표준화 컨설팅", "···"],
  },
] as const;

type DepartmentCardProps = {
  department: (typeof DEPARTMENTS)[number];
  index?: number;
  compact?: boolean;
};

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.68,
      delay: index * 0.08,
      ease: EASE,
    },
  }),
};

function Avatar({
  src,
  label,
  size = "md",
}: {
  src: string;
  label: string;
  size?: "md" | "lg";
}) {
  const sizeClass = size === "lg" ? "h-[72px] w-[72px]" : "h-[58px] w-[58px]";
  const iconClass = size === "lg" ? "h-[54px] w-[54px]" : "h-[42px] w-[42px]";

  return (
    <div
      className={`ig-glass-icon ${sizeClass} rounded-full`}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          width={96}
          height={96}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full text-white/70">
          <UserCircle className={iconClass} strokeWidth={1.45} />
        </div>
      )}
    </div>
  );
}

function DepartmentCard({ department, index = 0, compact = false }: DepartmentCardProps) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={`ig-glass-panel-lg relative mx-auto w-full rounded-2xl px-5 pb-5 pt-9 text-left ${
        compact ? "max-w-[310px]" : "max-w-[340px]"
      }`}
    >
      <div className="absolute -top-8 left-5 z-[3]">
        <Avatar
          src={department.avatarSrc}
          label={department.name}
          size={department.role === "대표" ? "lg" : "md"}
        />
      </div>

      <button
        type="button"
        aria-label={`${department.name} menu`}
        className="absolute right-4 top-4 z-[3] flex h-7 w-7 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-white/80"
      >
        <MoreHorizontal className="h-4 w-4" strokeWidth={2.2} />
      </button>

      <div className="min-h-[82px] pr-8">
        <p className="text-[11px] font-semibold uppercase text-white/45">{department.role}</p>
        <h2 className="mt-1 text-[17px] font-extrabold leading-tight text-white">
          {department.name}
        </h2>
        <p className="mt-2 text-[12px] leading-relaxed text-white/55">{department.summary}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {department.items.map((item) => (
          <span
            key={item}
            className="ig-glass-icon rounded-full px-3 py-1.5 text-[12px] font-medium leading-none text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function OrganizationPage() {
  const [leader, ...teams] = DEPARTMENTS;
  const firstRow = teams.slice(0, 3);
  const secondRow = teams.slice(3);

  return (
    <div className="min-h-screen text-white">
      <SiteHeader />

      <main className="pt-16">
        <section className="ig-section px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12">
          <SectionBackdrop variant="s2" />
          <div className="ig-content mx-auto max-w-[1180px] text-center">
            <motion.p
              className="text-[12px] font-bold uppercase text-white/45"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, ease: EASE }}
            >
              ADGRIT Organization
            </motion.p>
            <motion.h1
              className="mt-3 text-[38px] font-black leading-tight sm:text-[54px]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.08, ease: EASE }}
            >
              <span className="ig-gradient-text">조직도</span>
            </motion.h1>
            <motion.p
              className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-white/55 sm:text-[16px]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.16, ease: EASE }}
            >
              애드그릿의 전략, 실행, 제작, 개발 조직이 하나의 흐름으로 연결됩니다.
            </motion.p>
          </div>
        </section>

        <section className="ig-section px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
          <SectionBackdrop variant="s6" />
          <div className="ig-content mx-auto max-w-[1180px]">
            <div className="relative flex flex-col items-center">
              <DepartmentCard department={leader} compact />

              <div className="h-10 w-px bg-white/15" aria-hidden="true" />
              <div className="hidden h-px w-[82%] max-w-[940px] bg-white/15 lg:block" aria-hidden="true" />

              <div className="grid w-full grid-cols-1 gap-x-6 gap-y-14 pt-10 sm:grid-cols-2 lg:grid-cols-3">
                {firstRow.map((department, index) => (
                  <div key={department.role} className="relative">
                    <div
                      className="absolute left-1/2 top-[-40px] hidden h-10 w-px -translate-x-1/2 bg-white/15 lg:block"
                      aria-hidden="true"
                    />
                    <DepartmentCard department={department} index={index + 1} />
                  </div>
                ))}
              </div>

              <div className="mt-14 h-10 w-px bg-white/15" aria-hidden="true" />
              <div className="hidden h-px w-[52%] max-w-[620px] bg-white/15 lg:block" aria-hidden="true" />

              <div className="grid w-full grid-cols-1 gap-x-6 gap-y-14 pt-10 sm:grid-cols-2 lg:w-[70%] lg:grid-cols-2">
                {secondRow.map((department, index) => (
                  <div key={department.role} className="relative">
                    <div
                      className="absolute left-1/2 top-[-40px] hidden h-10 w-px -translate-x-1/2 bg-white/15 lg:block"
                      aria-hidden="true"
                    />
                    <DepartmentCard department={department} index={index + 4} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
