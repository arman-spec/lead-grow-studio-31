import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Download, 
  Phone, 
  Users,
  Star,
  Clock,
  Gift,
  Target
} from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <Badge className="mb-6 bg-brand-accent text-white border-brand-accent text-lg px-6 py-2">
            <Gift className="w-5 h-5 mr-2" />
            Limited Time Offer - 10% Early Bird Discount
          </Badge>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Join 47,758+ Placed Alumni
            <span className="block text-brand-accent">Start Your Digital Marketing Journey Today</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Don't let another opportunity pass by. Transform your career with India's most trusted digital marketing institute.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-accent">19</div>
              <div className="text-white/80 text-sm">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-accent">50K+</div>
              <div className="text-white/80 text-sm">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-accent">95%</div>
              <div className="text-white/80 text-sm">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-accent">4.8★</div>
              <div className="text-white/80 text-sm">Student Rating</div>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 hover:scale-105 transform transition-all duration-300">
              <Target className="w-5 h-5 mr-2" />
              Enroll Now & Save 10%
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button variant="secondary_cta" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-primary">
              <Download className="w-5 h-5 mr-2" />
              Download Free Brochure
            </Button>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 text-sm">
            <Button variant="link" className="text-white/80 hover:text-white">
              <Phone className="w-4 h-4 mr-2" />
              Request Free Callback
            </Button>
            <span className="text-white/60 hidden sm:block">•</span>
            <Button variant="link" className="text-white/80 hover:text-white">
              <Users className="w-4 h-4 mr-2" />
              Talk to Our Alumni
            </Button>
            <span className="text-white/60 hidden sm:block">•</span>
            <Button variant="link" className="text-white/80 hover:text-white">
              <Star className="w-4 h-4 mr-2" />
              Book Free Demo Class
            </Button>
          </div>

          {/* Urgency Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-brand-accent mr-2" />
              <span className="text-white font-semibold">Next Batch Starts Soon!</span>
            </div>
            <p className="text-white/90 text-sm">
              Secure your seat with just ₹5,000 admission fee. 
              <span className="font-semibold text-brand-accent"> Only 12 seats left</span> in the upcoming batch.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">
              ⭐⭐⭐⭐⭐ Trusted by 50,000+ Students • ISO Certified • Google Partner
            </p>
            <p className="text-white/60 text-xs">
              100% Secure Payment • EMI Available • Money Back Guarantee*
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;