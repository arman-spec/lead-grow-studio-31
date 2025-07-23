import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Building2, Users, TrendingUp, Quote } from "lucide-react";

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Digital Marketing Manager at Samsung",
      image: "/placeholder.svg",
      content: "NIHT's trainers gave me practical skills to land my dream job! The hands-on approach with live projects made all the difference.",
      rating: 5,
      company: "Samsung"
    },
    {
      name: "Rahul Verma", 
      role: "SEO Specialist at HCL",
      image: "/placeholder.svg",
      content: "The curriculum is industry-relevant and the placement support is exceptional. I got placed within 2 months of completion.",
      rating: 5,
      company: "HCL"
    },
    {
      name: "Sneha Patel",
      role: "Social Media Manager at Oyo",
      image: "/placeholder.svg", 
      content: "From zero to hero in digital marketing! The AI tools training gave me an edge over other candidates.",
      rating: 5,
      company: "Oyo"
    }
  ];

  const placementPartners = [
    "Samsung", "HCL", "Oyo", "Wipro", "TCS", "Infosys", "Accenture", "Cognizant",
    "Amazon", "Flipkart", "Paytm", "Zomato", "Swiggy", "BYJU'S", "Unacademy", "Vedantu"
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-brand-accent" />,
      number: "50,125+",
      label: "Students Trained",
      description: "Since 2005"
    },
    {
      icon: <Building2 className="w-8 h-8 text-brand-secondary" />,
      number: "47,758+", 
      label: "Successfully Placed",
      description: "In top companies"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-success" />,
      number: "95%",
      label: "Placement Rate",
      description: "Within 6 months"
    },
    {
      icon: <Star className="w-8 h-8 text-brand-accent" />,
      number: "4.8/5",
      label: "Student Rating",
      description: "10,000+ reviews"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Success, Real Careers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful professionals who transformed their careers with NIHT
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-white border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0 space-y-4">
                <div className="mx-auto w-fit p-4 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            What Our Students Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-brand-accent/30 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-brand-primary text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Placement Partners */}
        <div className="bg-white rounded-2xl p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Our Placement Partners
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Join alumni working at India's top companies
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {placementPartners.map((company, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="font-semibold text-sm text-gray-700">
                  {company}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Badge variant="outline" className="text-brand-success border-brand-success">
              And 500+ More Companies
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;