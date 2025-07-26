// app/about/page.tsx
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import InformationSections from "@/components/information-section";
import FAQSection from "@/components/faq-section";
// import ClientLogos from "@/components/client-logos";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <InformationSections />
      <FAQSection />
      {/* <ClientLogos /> */}
      <Footer />
    </div>
  );
}
