import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Briefcase, 
  Rocket,
  Users,
  TrendingUp,
  Target,
  Clock,
  Award,
  ArrowRight
} from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: <GraduationCap className="w-12 h-12 text-green-600" />,
      title: "Students & Freshers",
      subtitle: "Post-Class 12 • Age 18-25",
      description: "Kickstart your career with in-demand digital marketing skills straight out of school or college.",
      benefits: [
        "Start earning while studying",
        "Build impressive portfolio",
        "Get industry-ready skills",
        "100% placement assistance"
      ],
      cta: "Start Your Career Journey",
      color: "from-green-500 to-emerald-600",
      stats: "85% of our freshers get placed within 3 months"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: "Working Professionals",
      subtitle: "Career Switchers • Age 25-40",
      description: "Upskill or pivot to the high-growth digital marketing industry with flexible learning options.",
      benefits: [
        "Weekend & evening batches",
        "Learn while working",
        "Career transition support",
        "Salary hike guarantee"
      ],
      cta: "Switch to Digital Marketing",
      color: "from-blue-500 to-indigo-600",
      stats: "Average 40% salary increase post-completion"
    },
    {
      icon: <Rocket className="w-12 h-12 text-purple-600" />,
      title: "Entrepreneurs & Business Owners",
      subtitle: "Small Business • Startups",
      description: "Grow your business exponentially with proven digital marketing strategies and tools.",
      benefits: [
        "Reduce marketing costs",
        "Increase online visibility",
        "Scale your business",
        "Build your team"
      ],
      cta: "Scale Your Business",
      color: "from-purple-500 to-pink-600",
      stats: "Businesses see 300% ROI within 6 months"
    }
  ];

  const successPaths = [
    {
      audience: "Fresh Graduate",
      timeline: "6 months",
      journey: ["Enroll in Certificate Course", "Complete Live Projects", "Build Portfolio", "Get Placed"],
      outcome: "Digital Marketing Executive at Tech Company",
      salary: "₹3.5-5 LPA"
    },
    {
      audience: "Working Professional",
      timeline: "12 months",
      journey: ["Weekend Premier Course", "Upskill Current Role", "Build Network", "Career Switch"],
      outcome: "Senior Digital Marketing Manager",
      salary: "₹8-12 LPA"
    },
    {
      audience: "Business Owner",
      timeline: "6-12 months",
      journey: ["Master Course", "Implement Strategies", "Scale Marketing", "Hire Team"],
      outcome: "3x Business Growth",
      salary: "300% ROI"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-brand-primary border-brand-primary">
            Who Should Join?
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Designed for Your Goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're starting your career, switching fields, or scaling your business, 
            we have the perfect program tailored to your needs and schedule.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${audience.color} p-6 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-white/20 rounded-full">
                    {audience.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{audience.title}</h3>
                    <p className="text-white/80 text-sm">{audience.subtitle}</p>
                  </div>
                </div>
                <p className="text-white/90">{audience.description}</p>
              </div>

              <CardContent className="p-6">
                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  {audience.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-gradient-card p-4 rounded-lg mb-6">
                  <div className="flex items-center text-sm font-medium text-brand-success">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Success Rate
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{audience.stats}</p>
                </div>

                {/* CTA */}
                <Button variant="cta" className="w-full">
                  {audience.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Journey Paths */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center">
              <Target className="w-6 h-6 text-brand-primary mr-3" />
              Your Success Journey
            </h3>
            <p className="text-muted-foreground">
              See how students from different backgrounds achieve their goals with NIHT
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successPaths.map((path, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-foreground">{path.audience}</h4>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {path.timeline}
                  </Badge>
                </div>

                <div className="space-y-3 mb-6">
                  {path.journey.map((step, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm font-semibold text-foreground mb-1">Expected Outcome:</div>
                  <div className="text-sm text-brand-primary font-medium">{path.outcome}</div>
                  <div className="text-sm text-brand-success font-bold mt-2">{path.salary}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flexible Learning Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
            <Users className="w-10 h-10 text-brand-primary mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Classroom Learning</h4>
            <p className="text-sm text-muted-foreground">In-person training in Bangalore with hands-on labs</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
            <Clock className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Online Live Classes</h4>
            <p className="text-sm text-muted-foreground">Interactive online sessions with real-time doubt clearing</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
            <Award className="w-10 h-10 text-brand-accent mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Weekend Batches</h4>
            <p className="text-sm text-muted-foreground">Perfect for working professionals and students</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
            <TrendingUp className="w-10 h-10 text-brand-success mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Self-Paced Learning</h4>
            <p className="text-sm text-muted-foreground">Learn at your own speed with recorded sessions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;