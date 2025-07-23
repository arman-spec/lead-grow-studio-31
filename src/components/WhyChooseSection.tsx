import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Users, 
  Award, 
  Laptop, 
  Video, 
  Zap,
  Target,
  Brain,
  Globe
} from "lucide-react";

const WhyChooseSection = () => {
  const differentiators = [
    {
      icon: <Lightbulb className="w-8 h-8 text-brand-accent" />,
      title: "Hands-On Learning",
      description: "Master digital marketing with live campaigns, in-house studio, AR/VR projects, and AI-powered tools.",
      features: ["Live Client Projects", "In-house Studio", "AR/VR Technology", "AI Tools Integration"]
    },
    {
      icon: <Users className="w-8 h-8 text-brand-secondary" />,
      title: "Expert Trainers",
      description: "Learn from industry veterans based in Bangalore, Hyderabad, Kolkata, and Gurgaon.",
      features: ["15+ Years Experience", "Industry Professionals", "Live Project Mentoring", "Career Guidance"]
    },
    {
      icon: <Award className="w-8 h-8 text-brand-success" />,
      title: "Global Certifications",
      description: "Earn 20+ certifications from Google Ads, SEMrush, HubSpot, Facebook, LinkedIn, and more.",
      features: ["Google Certified", "HubSpot Partner", "Facebook Blueprint", "LinkedIn Learning"]
    }
  ];

  const certifications = [
    "Google", "Twitter", "LinkedIn", "Microsoft Bing", 
    "HubSpot", "SEMrush", "Unbounce", "Buffer", "YouTube"
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why NIHT Stands Out
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience India's most comprehensive digital marketing education with cutting-edge technology, 
            expert guidance, and guaranteed career support.
          </p>
        </div>

        {/* Main Differentiators */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full w-fit">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">{item.description}</p>
                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
            <Laptop className="w-10 h-10 text-brand-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Latest Technology</h3>
            <p className="text-sm text-muted-foreground">Learn with cutting-edge tools and platforms</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
            <Video className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Live Projects</h3>
            <p className="text-sm text-muted-foreground">Work on real campaigns from day one</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
            <Target className="w-10 h-10 text-brand-accent mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">100% Placement</h3>
            <p className="text-sm text-muted-foreground">Guaranteed job assistance and support</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
            <Brain className="w-10 h-10 text-brand-success mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">AI Integration</h3>
            <p className="text-sm text-muted-foreground">Master AI tools for modern marketing</p>
          </div>
        </div>

        {/* Certifications Showcase */}
        <div className="bg-white rounded-2xl p-8 shadow-medium">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Global Certification
            </h3>
            <p className="text-muted-foreground">
              Get industry-recognized certifications that employers value
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 hover:from-brand-primary/20 hover:to-brand-secondary/20 transition-all duration-300"
              >
                <Globe className="w-4 h-4 mr-2" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;