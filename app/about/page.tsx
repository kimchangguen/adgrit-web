import { SiteHeader } from "../_components/SiteHeader";
import { Footer } from "../_components/Footer";
import { AboutSliderCards } from "../_components/AboutSliderCards";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1a1a2e]">
      <SiteHeader />
      <main className="flex-1 flex flex-col pt-16 sm:pt-[4rem]">
        <AboutSliderCards />
      </main>
      <Footer />
    </div>
  );
}
