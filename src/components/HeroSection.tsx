import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, TrendingUp, Play } from "lucide-react";
import heroImage from "@/assets/hero-digital-marketing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Award className="w-4 h-4 mr-2" />
                ISO Certified
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Users className="w-4 h-4 mr-2" />
                Google Partner
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <TrendingUp className="w-4 h-4 mr-2" />
                Since 2005
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                India's #1 Digital Marketing Institute 
                <span className="block text-brand-accent">Since 2005</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                50,125+ Students Trained | 47,758+ Placed
                <span className="block text-lg mt-2">Flexible Courses in Bangalore & Online</span>
              </p>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-accent">50K+</div>
                <div className="text-white/80 text-sm">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-accent">47K+</div>
                <div className="text-white/80 text-sm">Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-accent">19</div>
                <div className="text-white/80 text-sm">Years Legacy</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                Enroll Now
              </Button>
              <Button variant="secondary_cta" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Download Free Brochure
              </Button>
            </div>

          </div>

          {/* Hero Image */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Digital Marketing Students Learning" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Stats Cards */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-medium">
                <div className="text-2xl font-bold text-brand-primary">20+</div>
                <div className="text-sm text-gray-600">Global Certifications</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-medium">
                <div className="text-2xl font-bold text-brand-success">100%</div>
                <div className="text-sm text-gray-600">Placement Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;