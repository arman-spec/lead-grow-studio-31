import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Camera, 
  Code, 
  Palette, 
  Video, 
  Eye,
  Target,
  Laptop,
  Users,
  TrendingUp,
  Play,
  Download
} from "lucide-react";

const HandsOnSection = () => {
  const projects = [
    {
      icon: <Briefcase className="w-8 h-8 text-brand-primary" />,
      title: "Live Client Campaigns",
      description: "Work on real campaigns for actual businesses from day one of your training.",
      details: ["Google Ads campaigns", "Social media strategies", "SEO optimization", "Performance tracking"]
    },
    {
      icon: <Code className="w-8 h-8 text-brand-secondary" />,
      title: "Website Development",
      description: "Build responsive websites and landing pages using modern tools and platforms.",
      details: ["WordPress development", "Landing page design", "E-commerce setup", "Mobile optimization"]
    },
    {
      icon: <Video className="w-8 h-8 text-brand-accent" />,
      title: "Video Production",
      description: "Create compelling video content using our state-of-the-art in-house studio.",
      details: ["Video editing", "Motion graphics", "Social media reels", "YouTube optimization"]
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      title: "AR/VR Experiences",
      description: "Design immersive marketing experiences using cutting-edge AR and VR technology.",
      details: ["Instagram AR filters", "VR marketing tours", "3D product demos", "Interactive experiences"]
    }
  ];

  const tools = [
    { name: "Adobe Creative Suite", category: "Design" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "SEMrush", category: "SEO" },
    { name: "HubSpot", category: "CRM" },
    { name: "Canva Pro", category: "Design" },
    { name: "Hootsuite", category: "Social Media" },
    { name: "Mailchimp", category: "Email" },
    { name: "WordPress", category: "Web Dev" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Figma", category: "UI/UX" },
    { name: "Final Cut Pro", category: "Video" },
    { name: "Unity", category: "AR/VR" }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Campaign",
      description: "Complete digital marketing strategy for an online fashion brand",
      metrics: "40% increase in conversions"
    },
    {
      title: "Local Business SEO",
      description: "SEO optimization project for a restaurant chain",
      metrics: "200% increase in local searches"
    },
    {
      title: "Social Media Growth",
      description: "Instagram marketing campaign for a tech startup",
      metrics: "500% follower growth"
    },
    {
      title: "AR Filter Campaign",
      description: "Interactive AR filter for a beauty brand launch",
      metrics: "1M+ filter uses"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent">
            Hands-On Learning
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Build Your Portfolio from Day One
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just learn theory—create real campaigns, build websites, produce videos, 
            and develop AR experiences that showcase your skills to employers.
          </p>
        </div>

        {/* Project Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-white border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                      <span className="text-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Studio & Tools */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Studio Features */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Camera className="w-6 h-6 text-brand-primary mr-3" />
                In-House Studio Access
              </h3>
              <p className="text-muted-foreground mb-6">
                Get full access to our professional content creation studio with the latest equipment and software.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-soft">
                <Video className="w-8 h-8 text-brand-accent mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Video Studio</h4>
                <p className="text-sm text-muted-foreground">Professional lighting, cameras, and editing suites</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-soft">
                <Palette className="w-8 h-8 text-brand-secondary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Design Lab</h4>
                <p className="text-sm text-muted-foreground">High-end workstations with design software</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-soft">
                <Eye className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-semibold text-foreground mb-2">AR/VR Zone</h4>
                <p className="text-sm text-muted-foreground">Latest VR headsets and AR development tools</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-soft">
                <Laptop className="w-8 h-8 text-brand-success mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Tech Lab</h4>
                <p className="text-sm text-muted-foreground">Latest hardware and development environments</p>
              </div>
            </div>
          </div>

          {/* Tools & Software */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Target className="w-6 h-6 text-brand-accent mr-3" />
                Professional Tools Training
              </h3>
              <p className="text-muted-foreground mb-6">
                Master industry-standard tools and platforms used by top digital marketing professionals worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <div className="font-medium text-foreground text-sm">{tool.name}</div>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {tool.category}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Showcase */}
        <div className="bg-white rounded-2xl p-8 shadow-medium">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-brand-success mr-3" />
              Student Portfolio Examples
            </h3>
            <p className="text-muted-foreground">
              See the type of impressive projects our students create during their training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="p-4 bg-gradient-card rounded-lg border border-gray-100">
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <Badge variant="secondary" className="bg-brand-success/10 text-brand-success">
                  {item.metrics}
                </Badge>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" className="flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Portfolio Videos
            </Button>
            <Button variant="secondary_cta" className="flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download Sample Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandsOnSection;