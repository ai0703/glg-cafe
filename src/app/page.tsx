import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import ProtocolSection from '@/components/home/ProtocolSection';
import CalendarSection from '@/components/home/CalendarSection';

export default function Home() {
  return (
    <main className="page-content">
      {/* 1. The Opening Shot */}
      <HeroSection />

      {/* 5. Membership / Pricing Replacement (Calendar) */}
      <CalendarSection />

      {/* 2. Interactive Functional Artifacts (Modules) */}
      <FeaturesSection />

      {/* 3. The Manifesto */}
      <PhilosophySection />

      {/* 4. Sticky Stacking Archive */}
      <ProtocolSection />
    </main>
  );
}

