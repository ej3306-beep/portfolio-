import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/ProfileSection";
import BrandVisionPlayground from "./components/BrandVisionPlayground";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="premium-gradient min-h-screen selection:bg-[#E6D5CB] selection:text-[#1C1C1C] overflow-x-hidden antialiased">
      {/* Absolute visual structural frames */}
      <div className="fixed inset-y-0 left-6 right-6 pointer-events-none border-x border-[#D9C3B0]/15 z-40 hidden md:block" />
      
      {/* Minimal Header Navigation */}
      <Navigation />

      <main className="relative">
        {/* Landing Section with massive luxury typography */}
        <HeroSection />

        {/* Dynamic & Inspiring Biography Canvas representing 10 years of Ballet & Passion */}
        <ProfileSection />

        {/* Interactive Clothing Catalog & Swatch Configurator for her Brand Idea, LIVRHYCO */}
        <BrandVisionPlayground />

        {/* Professional Career Timeline showing her roles in detail */}
        <ExperienceSection />

        {/* Star-Rated Business & Language Proficiency grids */}
        <SkillsSection />

        {/* Local Persisted Partnership Inquiry terminal & contact footer */}
        <ContactSection />
      </main>
    </div>
  );
}
