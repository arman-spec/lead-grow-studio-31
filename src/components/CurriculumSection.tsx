import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  BookOpen, 
  Award, 
  Zap,
  Search,
  MousePointer,
  Users,
  Mail,
  BarChart,
  Smartphone,
  Video,
  Palette,
  Bot,
  Eye,
  ShoppingCart
} from "lucide-react";

const CurriculumSection = () => {
  const courses = [
    {
      title: "Certificate Course",
      duration: "6 Months / 108 Hours",
      price: "₹35,400",
      level: "Beginner",
      color: "from-green-500 to-emerald-600",
      modules: [
        { icon: <Search className="w-5 h-5" />, name: "SEO Fundamentals", hours: "20 hrs" },
        { icon: <MousePointer className="w-5 h-5" />, name: "Google Ads", hours: "18 hrs" },
        { icon: <Users className="w-5 h-5" />, name: "Social Media Marketing", hours: "25 hrs" },
        { icon: <Mail className="w-5 h-5" />, name: "Email Marketing", hours: "15 hrs" },
        { icon: <BarChart className="w-5 h-5" />, name: "Web Analytics", hours: "20 hrs" },
        { icon: <Smartphone className="w-5 h-5" />, name: "Mobile Marketing", hours: "10 hrs" }
      ],
      features: ["Basic Certifications", "Portfolio Projects", "Job Assistance", "Live Projects"]
    },
    {
      title: "Premier Course", 
      duration: "12 Months / 208 Hours",
      price: "₹70,000",
      level: "Intermediate",
      color: "from-blue-500 to-indigo-600",
      popular: true,
      modules: [
        { icon: <Search className="w-5 h-5" />, name: "Advanced SEO", hours: "25 hrs" },
        { icon: <MousePointer className="w-5 h-5" />, name: "PPC & Google Ads", hours: "30 hrs" },
        { icon: <Users className="w-5 h-5" />, name: "Social Media Strategy", hours: "35 hrs" },
        { icon: <Video className="w-5 h-5" />, name: "Video Marketing", hours: "20 hrs" },
        { icon: <Palette className="w-5 h-5" />, name: "Graphic Design", hours: "25 hrs" },
        { icon: <Bot className="w-5 h-5" />, name: "AI Marketing Tools", hours: "20 hrs" },
        { icon: <BarChart className="w-5 h-5" />, name: "Advanced Analytics", hours: "25 hrs" },
        { icon: <Mail className="w-5 h-5" />, name: "Marketing Automation", hours: "28 hrs" }
      ],
      features: ["15+ Certifications", "Advanced Projects", "Internship Support", "Industry Mentorship"]
    },
    {
      title: "Master Course",
      duration: "16 Months / 306 Hours", 
      price: "₹1,30,000",
      level: "Expert",
      color: "from-purple-500 to-pink-600",
      modules: [
        { icon: <Eye className="w-5 h-5" />, name: "AR/VR Marketing", hours: "25 hrs" },
        { icon: <Bot className="w-5 h-5" />, name: "AI & Machine Learning", hours: "30 hrs" },
        { icon: <MousePointer className="w-5 h-5" />, name: "Programmatic Advertising", hours: "28 hrs" },
        { icon: <BarChart className="w-5 h-5" />, name: "Conversion Rate Optimization", hours: "22 hrs" },
        { icon: <Users className="w-5 h-5" />, name: "Psychographic Marketing", hours: "20 hrs" },
        { icon: <ShoppingCart className="w-5 h-5" />, name: "E-commerce Strategy", hours: "35 hrs" },
        { icon: <Zap className="w-5 h-5" />, name: "Marketing Automation", hours: "30 hrs" },
        { icon: <Video className="w-5 h-5" />, name: "Advanced Video Production", hours: "25 hrs" },
        { icon: <Search className="w-5 h-5" />, name: "Enterprise SEO", hours: "30 hrs" },
        { icon: <Palette className="w-5 h-5" />, name: "Brand Strategy", hours: "25 hrs" }
      ],
      features: ["20+ Premium Certifications", "Capstone Project", "Guaranteed Placement", "Lifetime Support", "VR Headset Included"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-brand-primary border-brand-primary">
            Curriculum
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Master Digital Marketing with Industry-Relevant Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully crafted programs designed to take you from beginner to expert, 
            with hands-on projects and industry certifications.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 ${
                course.popular ? 'ring-2 ring-brand-accent' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-brand-accent text-white">Most Popular</Badge>
                </div>
              )}
              
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <div className="flex items-center space-x-4 text-white/90">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {course.level}
                  </Badge>
                </div>
                
                <div className="text-3xl font-bold mb-2">{course.price}</div>
                <div className="text-white/80 text-sm">One-time payment • EMI Available</div>
              </div>

              <CardContent className="p-6">
                {/* Modules */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-brand-primary" />
                    Course Modules
                  </h4>
                  <div className="space-y-3">
                    {course.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="text-brand-primary mr-3">
                            {module.icon}
                          </div>
                          <span className="text-sm font-medium text-foreground">{module.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {module.hours}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-brand-accent" />
                    What's Included
                  </h4>
                  <div className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand-success rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant={course.popular ? "cta" : "default"} 
                  className="w-full"
                  size="lg"
                >
                  Enroll in {course.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">20+ Certifications</h4>
              <p className="text-sm text-muted-foreground">Google, HubSpot, Facebook & more</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-brand-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Live Projects</h4>
              <p className="text-sm text-muted-foreground">Real campaigns from day one</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Flexible Schedule</h4>
              <p className="text-sm text-muted-foreground">Weekday & weekend batches</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-brand-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Lifetime Access</h4>
              <p className="text-sm text-muted-foreground">Resources & community support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;