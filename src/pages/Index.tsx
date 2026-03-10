/* ============================================================
   Index Page — High-End Property Management Landing Page
   14 Sections: Navbar → Hero → Partners → Features → Landlord
   Solutions → Financial Growth → Tenant Retention → Services →
   Property Showcase → Counters → News → Landlord Satisfaction →
   Testimonials → Subscribe CTA & Footer
   ============================================================ */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnerAgencies from "@/components/PartnerAgencies";
import ManagementFeatures from "@/components/ManagementFeatures";
import LandlordSolutions from "@/components/LandlordSolutions";
import FinancialGrowth from "@/components/FinancialGrowth";
import TenantRetention from "@/components/TenantRetention";
import ComprehensiveServices from "@/components/ComprehensiveServices";
import PropertyShowcase from "@/components/PropertyShowcase";
import AnimatedCounters from "@/components/AnimatedCounters";
import RealEstateNews from "@/components/RealEstateNews";
import LandlordSatisfaction from "@/components/LandlordSatisfaction";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import SubscribeCTA from "@/components/SubscribeCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnerAgencies />
      <ManagementFeatures />
      <LandlordSolutions />
      <FinancialGrowth />
      <TenantRetention />
      <ComprehensiveServices />
      <PropertyShowcase />
      <AnimatedCounters />
      <RealEstateNews />
      <LandlordSatisfaction />
      <Testimonials />
      <CTASection />
      <SubscribeCTA />
      <Footer />
    </main>
  );
};

export default Index;
