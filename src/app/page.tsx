import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import StorePreview from "@/components/home/StorePreview";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <StorePreview />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
