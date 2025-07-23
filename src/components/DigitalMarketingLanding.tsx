import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import SocialProofSection from "@/components/SocialProofSection";
import CurriculumSection from "@/components/CurriculumSection";
import HandsOnSection from "@/components/HandsOnSection";
import AITechSection from "@/components/AITechSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const DigitalMarketingLanding = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Above the fold */}
      <HeroSection />
      
      {/* Why Choose Us - Unique differentiators */}
      <WhyChooseSection />
      
      {/* Social Proof - Success stories and placements */}
      <SocialProofSection />
      
      {/* Curriculum - Course details and modules */}
      <CurriculumSection />
      
      {/* Hands-On Experience - Practical learning */}
      <HandsOnSection />
      
      {/* AI & Emerging Tech - Future-ready skills */}
      <AITechSection />
      
      {/* Target Audience - Who should apply */}
      <TargetAudienceSection />
      
      {/* FAQ - Address common concerns */}
      <FAQSection />
      
      {/* Final CTA - Drive conversions */}
      <CTASection />
    </div>
  );
};

export default DigitalMarketingLanding;