import { AccountGrowthEffects } from "./AccountGrowthEffects";
import { AccountGrowthProcess } from "./AccountGrowthProcess";
import { AccountGrowthIntro } from "./AccountGrowthIntro";

export function AccountGrowthSection() {
  return (
    <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div
        className="shortform-section-container relative mx-auto w-full max-w-7xl overflow-hidden rounded-[24px] border border-white/[0.08] bg-[rgba(20,20,30,0.45)] px-5 py-12 text-white shadow-[0_24px_80px_rgba(10,8,24,0.28)] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        style={{
          backdropFilter: "blur(20px) saturate(120%)",
          WebkitBackdropFilter: "blur(20px) saturate(120%)",
        }}
      >
        <AccountGrowthIntro />

        <div className="middle-box mt-8 px-5 py-9 shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:px-8 sm:py-11 lg:min-h-[500px] lg:px-10 lg:py-16">
          <AccountGrowthProcess />
        </div>

        <div className="middle-box mt-8 px-5 py-9 shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:px-8 sm:py-11 lg:mt-[100px] lg:min-h-[800px] lg:px-10">
          <AccountGrowthEffects />
        </div>
      </div>
    </section>
  );
}
