import HeroSection from "../../landing/HeroSection";
import StatsSection from "../../landing/StatsSection";
import FeatureGrid from "../../landing/FeatureGrid";

export default function LandingPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <FeatureGrid />
    </div>
  );
}
