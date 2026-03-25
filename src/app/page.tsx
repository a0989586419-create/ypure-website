import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import StorePreview from "@/components/home/StorePreview";
import SecurityBadges from "@/components/home/SecurityBadges";
import DataResults from "@/components/home/DataResults";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        <FeaturesGrid />
        <HowItWorks />
        <Testimonials />
        <DataResults />
        <StorePreview />
        <SecurityBadges />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
