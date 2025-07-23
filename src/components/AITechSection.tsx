import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Brain, 
  Zap, 
  Eye,
  Sparkles,
  Cpu,
  MessageSquare,
  Image,
  Video,
  Palette,
  TrendingUp,
  Target
} from "lucide-react";

const AITechSection = () => {
  const aiTools = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      name: "ChatGPT & Claude",
      description: "Master AI writing and content creation for marketing campaigns",
      applications: ["Content writing", "Ad copy creation", "Email sequences", "Social media posts"]
    },
    {
      icon: <Image className="w-8 h-8 text-purple-500" />,
      name: "Midjourney & DALL-E",
      description: "Create stunning visuals and graphics using AI image generation",
      applications: ["Social media graphics", "Ad creatives", "Brand visuals", "Product mockups"]
    },
    {
      icon: <Bot className="w-8 h-8 text-green-500" />,
      name: "Google AI Studio",
      description: "Leverage Google's AI tools for advanced marketing automation",
      applications: ["Customer insights", "Predictive analytics", "Automated bidding", "Content optimization"]
    },
    {
      icon: <Video className="w-8 h-8 text-red-500" />,
      name: "Runway & Synthesia",
      description: "Produce AI-generated videos and animations for marketing",
      applications: ["Video ads", "Explainer videos", "Product demos", "Personalized content"]
    }
  ];

  const emergingTech = [
    {
      icon: <Eye className="w-10 h-10 text-purple-600" />,
      title: "AR Filters & Experiences",
      description: "Create interactive AR filters for Instagram, Snapchat, and Facebook that engage audiences in new ways.",
      features: ["Instagram AR effects", "Snapchat lenses", "Facebook filters", "Brand experiences"],
      projects: "Create 3+ AR filters during the course"
    },
    {
      icon: <Brain className="w-10 h-10 text-blue-600" />,
      title: "VR Marketing Campaigns", 
      description: "Design immersive VR experiences that transport customers into your brand's world.",
      features: ["Virtual showrooms", "Product experiences", "Brand storytelling", "Event marketing"],
      projects: "Build a VR marketing experience"
    },
    {
      icon: <Cpu className="w-10 h-10 text-green-600" />,
      title: "AI-Powered Analytics",
      description: "Use machine learning to predict customer behavior and optimize marketing campaigns.",
      features: ["Predictive modeling", "Customer segmentation", "Behavior analysis", "ROI optimization"],
      projects: "Implement AI analytics dashboard"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-purple-600 border-purple-600">
            Future-Ready Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stay Ahead with Cutting-Edge AI & Tech
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the latest AI tools and emerging technologies that are revolutionizing digital marketing. 
            Be future-ready with skills that set you apart in the job market.
          </p>
        </div>

        {/* AI Tools Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8 flex items-center justify-center">
            <Bot className="w-6 h-6 text-brand-primary mr-3" />
            Master AI Marketing Tools
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => (
              <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full w-fit">
                    {tool.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">{tool.description}</p>
                  <div className="space-y-2">
                    {tool.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                        <span className="text-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emerging Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8 flex items-center justify-center">
            <Zap className="w-6 h-6 text-brand-accent mr-3" />
            Emerging Technology Training
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {emergingTech.map((tech, index) => (
              <Card key={index} className="bg-white border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full w-fit">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">{tech.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">What You'll Learn:</h4>
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand-success rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                    <div className="flex items-center text-sm font-semibold text-purple-700">
                      <Target className="w-4 h-4 mr-2" />
                      Hands-On Project
                    </div>
                    <p className="text-sm text-purple-600 mt-1">{tech.projects}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AITechSection;