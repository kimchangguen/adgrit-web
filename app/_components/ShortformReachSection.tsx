import type { ReactNode } from "react";
import {
  Camera,
  Check,
  ChevronRight,
  Clapperboard,
  CloudUpload,
  ImageIcon,
  Lightbulb,
  Megaphone,
  Play,
  ShieldCheck,
  TrendingUp,
  Type,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

const PROCESS_STEPS = [
  { label: "기획", Icon: Lightbulb, tone: "border-violet-200 bg-violet-50 text-violet-700" },
  { label: "촬영", Icon: Camera, tone: "border-orange-200 bg-orange-50 text-orange-600" },
  { label: "편집", Icon: Clapperboard, tone: "border-pink-200 bg-pink-50 text-pink-600" },
  { label: "자막", Icon: Type, tone: "border-rose-200 bg-rose-50 text-rose-600" },
  { label: "썸네일", Icon: ImageIcon, tone: "border-blue-200 bg-blue-50 text-blue-600" },
  { label: "업로드", Icon: CloudUpload, tone: "border-indigo-200 bg-indigo-50 text-indigo-700" },
  { label: "32채널 확산", Icon: Megaphone, tone: "border-purple-200 bg-purple-50 text-purple-700" },
] as const;

const CHECKLIST = [
  "재촬영·수정 무제한 지원",
  "삭제 없는 콘텐츠",
  "원본 영상 제공",
  "투명한 진행 과정",
];

export function ShortformReachSection() {
  return (
    <section id="shortform" className="relative z-10 scroll-mt-20 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div
        className="shortform-section-container relative mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-[rgba(20,20,30,0.45)] px-5 py-10 text-white shadow-[0_24px_80px_rgba(10,8,24,0.28)] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
        style={{
          backdropFilter: "blur(20px) saturate(120%)",
          WebkitBackdropFilter: "blur(20px) saturate(120%)",
        }}
      >
        <div className="text-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-violet-500 via-pink-400 to-orange-400 p-[1.5px]">
            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold sm:px-7 sm:text-base">
              <span className="text-violet-600" aria-hidden>✦</span>
              <span className="text-violet-700">32개 채널</span>
              <span className="text-slate-400">·</span>
              <span className="text-rose-500">240만명 도달</span>
            </div>
          </div>

          <h2 className="mt-6 font-black leading-[1.08] tracking-[-0.05em] text-white sm:tracking-[-0.045em]">
            <span className="block bg-gradient-to-r from-orange-400 via-rose-500 to-pink-500 bg-clip-text text-[2.55rem] text-transparent drop-shadow-[0_8px_22px_rgba(244,63,94,0.2)] sm:text-[3.75rem] lg:text-[4.5rem]">
              숏폼 하나가
            </span>
            <span className="mt-2 block text-[1.8rem] sm:text-[2.65rem] lg:text-[3.25rem]">
              손님을 <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">폭발적으로 증가시키는</span> 시대
            </span>
          </h2>

          <p className="mt-5 text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
            기획부터 업로드, 32개 채널 확산까지
            <br />
            사장님은 음식만 만드세요!
          </p>
        </div>

        <div className="middle-box scrollbar-hide mt-8 overflow-x-auto px-4 py-6 shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:px-6 lg:overflow-visible lg:px-8">
          <div className="mx-auto flex min-w-[820px] items-start justify-between gap-3 lg:min-w-0">
            {PROCESS_STEPS.map(({ label, Icon, tone }, index) => (
              <div key={label} className="contents">
                <div className="flex w-[92px] flex-none flex-col items-center text-center lg:w-auto lg:flex-1">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full border ${tone}`}>
                    <Icon className="h-8 w-8" strokeWidth={1.8} aria-hidden />
                  </div>
                  <span className="mt-3 whitespace-nowrap text-sm font-bold text-white/85 sm:text-[15px]">{label}</span>
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <ChevronRight className="mt-5 h-5 w-5 flex-none text-white/25" strokeWidth={1.7} aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="middle-box mt-5 grid grid-cols-2 overflow-hidden shadow-[0_14px_40px_rgba(0,0,0,0.08)] lg:grid-cols-4">
          <Stat icon={<UserRoundCheck />} value="32" suffix="개 채널" label="동시 확산" tone="text-violet-400" />
          <Stat icon={<UsersRound />} value="240" suffix="만명" label="실제 팔로워 도달" tone="text-pink-400" />
          <Stat icon={<ShieldCheck />} value="100%" label="결과 없으면 환불" tone="text-blue-400" />
          <Stat icon={<TrendingUp />} value="플레이스" label="상승 효과" tone="text-violet-400" />
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <a href="https://open.kakao.com/o/s2RtMSei" target="_blank" rel="noopener noreferrer" className="flex min-h-[112px] items-center justify-center gap-5 rounded-[24px] bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 px-6 py-5 text-white shadow-[0_14px_30px_rgba(244,80,93,0.25)] transition-transform hover:-translate-y-0.5">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white text-orange-500 shadow-sm">
              <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
            </span>
            <span className="text-left">
              <strong className="block text-lg font-extrabold sm:text-xl">20건 숏폼 제작</strong>
              <span className="mt-1 block text-sm font-medium text-white/85">전문가가 한 번에!</span>
            </span>
          </a>

          <a href="https://open.kakao.com/o/s2RtMSei" target="_blank" rel="noopener noreferrer" className="flex min-h-[112px] items-center justify-center gap-5 rounded-[24px] bg-gradient-to-r from-fuchsia-500 via-violet-600 to-blue-500 px-6 py-5 text-white shadow-[0_14px_30px_rgba(98,75,224,0.25)] transition-transform hover:-translate-y-0.5">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white text-violet-600 shadow-sm">
              <ShieldCheck className="h-8 w-8" aria-hidden />
            </span>
            <span className="text-left">
              <strong className="block text-lg font-extrabold sm:text-xl">100% 환불 보장</strong>
              <span className="mt-1 block text-sm font-medium text-white/85">결과 없으면 전액 환불</span>
            </span>
          </a>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm font-semibold text-slate-200">
          {CHECKLIST.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && <span className="hidden text-slate-300 sm:inline" aria-hidden>|</span>}
              <Check className="h-4 w-4 text-violet-600" strokeWidth={3} aria-hidden />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, suffix, label, tone }: { icon: ReactNode; value: string; suffix?: string; label: string; tone: string }) {
  return (
    <div className="relative flex min-h-[176px] flex-col items-center justify-center border-white/10 px-3 py-6 text-center even:border-l lg:border-l lg:first:border-l-0">
      <span className={`${tone} [&>svg]:h-8 [&>svg]:w-8`} aria-hidden>{icon}</span>
      <div className={`mt-2 font-black tracking-[-0.035em] ${tone}`}>
        <span className={value === "플레이스" ? "text-2xl sm:text-3xl" : "text-4xl sm:text-[2.75rem]"}>{value}</span>
        {suffix && <span className="ml-1 text-sm font-bold sm:text-base">{suffix}</span>}
      </div>
      <p className="mt-2 text-sm font-semibold text-white/70 sm:text-base">{label}</p>
    </div>
  );
}
