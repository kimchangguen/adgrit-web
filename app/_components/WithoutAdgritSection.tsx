"use client";

import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Banknote,
  BookOpen,
  CameraOff,
  ChartNoAxesCombined,
  ClipboardList,
  Clock3,
  Dices,
  EyeOff,
  MegaphoneOff,
  RefreshCcw,
  RotateCcw,
  SearchX,
  ShieldOff,
  ShieldX,
  Trophy,
  Unlink,
  UserRoundX,
  Users,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionBackdrop } from "./backgrounds/SectionBackdrop";

type FailureItem = {
  lead: string;
  highlight: string;
  Icon: LucideIcon;
  tone: "violet" | "rose";
};

const FAILURES: FailureItem[] = [
  { Icon: Users, tone: "violet", lead: "마케팅을 고민하는 동안 경쟁사는 고객을 계속 데려가고 우리가게만", highlight: "뒤처집니다." },
  { Icon: Banknote, tone: "rose", lead: "광고비는 계속 나가는데 손님은 늘지 않아", highlight: "돈만 쓰고 끝나는 마케팅이 됩니다." },
  { Icon: ChartNoAxesCombined, tone: "violet", lead: "조회수와 좋아요는 늘어도 실제", highlight: "매출은 전혀 늘지 않는 계정이 됩니다." },
  { Icon: MegaphoneOff, tone: "rose", lead: "좋은 제품과 서비스를 가지고도 고객에게 알려지지 않아", highlight: "선택조차 받지 못합니다." },
  { Icon: UserRoundX, tone: "violet", lead: "대표님이 장사도 하고 마케팅도 직접 하다가 결국 둘 다", highlight: "제대로 하지 못하게 됩니다." },
  { Icon: CameraOff, tone: "rose", lead: "잘못된 운영으로 인스타그램 계정 노출이 끊기고 점점", highlight: "아무도 보지 않는 계정이 됩니다." },
  { Icon: SearchX, tone: "violet", lead: "손님이 우리 업종을 검색해도 경쟁업체만 보이고 우리 가게는", highlight: "끝까지 찾지 못합니다." },
  { Icon: RefreshCcw, tone: "rose", lead: "이것저것 다 해봤지만 결과는 없어 마케팅 업체만 계속", highlight: "바꾸게 됩니다." },
  { Icon: ShieldX, tone: "violet", lead: "홈페이지와 계정은 만들어 놓았지만 고객이 신뢰하지 않아", highlight: "문의조차 들어오지 않습니다." },
  { Icon: BookOpen, tone: "rose", lead: "트렌드는 계속 바뀌는데 그때마다 처음부터 다시 배우느라", highlight: "시간과 돈만 낭비하게 됩니다." },
  { Icon: ClipboardList, tone: "violet", lead: "직원에게 마케팅을 맡겼는데 퇴사하면서 노하우까지 함께", highlight: "사라집니다." },
  { Icon: Unlink, tone: "rose", lead: "광고를 멈추는 순간 고객도 함께 끊기는 구조가 되어 매출이", highlight: "불안정해집니다." },
  { Icon: RotateCcw, tone: "violet", lead: "잘못된 방향으로 몇 달을 운영하다가 결국 처음부터", highlight: "다시 시작하게 됩니다." },
  { Icon: EyeOff, tone: "rose", lead: "콘텐츠는 열심히 만들었는데 알고리즘을 몰라 아무에게도", highlight: "노출되지 않습니다." },
  { Icon: BadgeDollarSign, tone: "violet", lead: "매출이 안 오르는 이유를 모르고 계속 엉뚱한 곳에", highlight: "돈을 쓰게 됩니다." },
  { Icon: Trophy, tone: "rose", lead: "경쟁사는 브랜드가 되는데 우리는 아직도 손님을 기다리는", highlight: "가게에 머물게 됩니다." },
  { Icon: ShieldOff, tone: "violet", lead: "잘못된 마케팅 선택 하나가 몇 년 동안 쌓아온 브랜드 신뢰를", highlight: "무너뜨릴 수도 있습니다." },
  { Icon: UsersRound, tone: "rose", lead: "눈앞의 광고만 하다 보니 단골과 재방문 고객이 없어 항상", highlight: "신규 고객만 찾아다니게 됩니다." },
  { Icon: Dices, tone: "violet", lead: "전문가의 전략 없이 운영하면 운에 맡기는 마케팅을", highlight: "계속 반복하게 됩니다." },
  { Icon: Clock3, tone: "rose", lead: "결국 가장 큰 손해는 광고비가 아니라 다시는 돌아오지 않는", highlight: "시간과 고객을 잃는 것입니다." },
];

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.42 } },
};

export function WithoutAdgritSection() {
  return (
    <section id="without-adgrit" className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <SectionBackdrop variant="s6" />
      <div
        className="shortform-section-container relative mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] border border-white/[0.08] bg-[rgba(20,20,30,0.45)] px-5 py-12 text-white shadow-[0_24px_80px_rgba(10,8,24,0.28)] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        style={{ backdropFilter: "blur(20px) saturate(120%)", WebkitBackdropFilter: "blur(20px) saturate(120%)" }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-red-700/10 blur-[100px]" />
          <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-violet-700/10 blur-[100px]" />
          <div className="absolute left-[7%] top-36 hidden rotate-[-8deg] text-5xl font-black tracking-widest text-red-300/[0.04] lg:block">CLOSED</div>
          <ChartNoAxesCombined className="absolute right-[8%] top-32 hidden h-32 w-32 rotate-12 text-violet-300/[0.05] lg:block" />
        </div>

        <header className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
            <svg viewBox="0 0 80 72" className="h-full w-full overflow-visible" aria-hidden>
              <path d="M40 5 75 66H5L40 5Z" fill="rgba(239,68,68,.08)" stroke="#fb7185" strokeWidth="3" strokeLinejoin="round" className="drop-shadow-[0_0_9px_rgba(248,113,113,.9)]" />
              <path d="M40 24v21" stroke="#fdba74" strokeWidth="5" strokeLinecap="round" />
              <circle cx="40" cy="55" r="3" fill="#fdba74" />
            </svg>
          </div>
          <h2 className="mt-7 text-[2.05rem] font-black leading-[1.18] tracking-[-0.045em] sm:text-[2.9rem] lg:text-[3.5rem]">
            애드그릿과 하지 않을 경우<br />
            하단의 <span className="bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">낭패를 볼 수 있습니다.</span>
          </h2>
          <p className="mt-7 text-[15px] leading-7 text-white/70 sm:text-lg sm:leading-8">
            지금의 선택이, 몇 달 뒤 결과의 차이를 만듭니다.<br />
            아래의 <strong className="font-extrabold text-rose-400">20가지 낭패</strong>가 당신의 현실이 될 수 있습니다.
          </p>
        </header>

        <motion.div
          className="relative mt-12 grid gap-2 overflow-hidden rounded-[20px] border border-violet-400/25 bg-[rgba(15,10,25,0.5)] p-2 sm:p-3 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          transition={{ staggerChildren: 0.045 }}
        >
          {FAILURES.map(({ lead, highlight, Icon, tone }, index) => {
            const rose = tone === "rose";
            return (
              <motion.article
                key={index}
                variants={itemVariants}
                className="warning-item grid min-h-[158px] grid-cols-[48px_62px_1fr] items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.012] px-3 py-5 sm:min-h-[172px] sm:grid-cols-[56px_72px_1fr] sm:gap-4 sm:px-5"
              >
                <span className={`self-start pt-1 text-2xl font-black tabular-nums sm:text-[1.7rem] ${rose ? "text-rose-400" : "text-violet-400"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`warning-icon flex h-14 w-14 items-center justify-center rounded-full border bg-white/[0.025] sm:h-16 sm:w-16 ${rose ? "border-rose-400/25 text-rose-400" : "border-violet-400/25 text-violet-400"}`}>
                  <Icon className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.7} aria-hidden />
                </span>
                <p className="warning-text text-[clamp(0.875rem,2.2vw,1.125rem)] font-medium leading-[1.7] text-white/82">
                  {lead} <strong className={`font-bold ${rose ? "text-rose-400" : "text-fuchsia-400"}`}>{highlight}</strong>
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
