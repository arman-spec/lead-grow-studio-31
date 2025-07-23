import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MessageCircle,
  Phone,
  Mail
} from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need a tech or design background to join?",
      answer: "Not at all! Our courses are designed for complete beginners. We start with the basics and gradually build up your skills. Whether you're from any educational background - arts, commerce, science, or engineering - you can succeed in digital marketing. Our curriculum includes everything from basic computer skills to advanced marketing strategies."
    },
    {
      question: "What's the placement process and success rate?",
      answer: "We have a dedicated placement team with 100% placement assistance. Our process includes: Resume building workshops, Mock interviews with industry experts, Direct placement drives with 500+ partner companies, Soft skills training, and Salary negotiation guidance. 95% of our students get placed within 6 months, with an average starting salary of ₹3.5-5 LPA for freshers."
    },
    {
      question: "Is the learning truly practical and hands-on?",
      answer: "Absolutely! From day one, you'll work on live projects. This includes: Running actual Google Ads campaigns with real budgets, Creating social media strategies for real businesses, Building websites and landing pages, Producing videos in our professional studio, and Developing AR filters and VR experiences. You'll graduate with a portfolio of real work, not just certificates."
    },
    {
      question: "Are the certifications globally recognized and valuable?",
      answer: "Yes! We provide 20+ industry-recognized certifications from: Google (Ads, Analytics, Digital Marketing), Facebook Blueprint, HubSpot Content Marketing, SEMrush SEO Toolkit, LinkedIn Learning, and Microsoft Advertising. These are the same certifications that employers look for and are valued globally in the digital marketing industry."
    },
    {
      question: "What if I'm a complete beginner with no marketing experience?",
      answer: "Perfect! 70% of our students start with zero marketing experience. Our curriculum is designed to take you from absolute beginner to job-ready professional. We start with digital marketing fundamentals, teach you how businesses work online, and gradually introduce advanced concepts. Our trainers are experts at making complex topics simple."
    },
    {
      question: "Can I balance this course with my current job/studies?",
      answer: "Yes! We offer flexible schedules: Weekend batches (Saturday-Sunday), Evening batches (6-9 PM), Online live classes, and Self-paced learning options. Many of our students are working professionals who successfully completed the course while maintaining their jobs. We also provide recorded sessions for review."
    },
    {
      question: "What's the difference between online and classroom training?",
      answer: "Both formats cover the same comprehensive curriculum. Classroom training offers: Direct access to our studio and lab facilities, Face-to-face interaction with trainers, Immediate hands-on practice with equipment. Online training provides: Flexibility to learn from anywhere, Interactive live sessions with screen sharing, Access to all digital tools and software, Recorded sessions for later review. Both include the same projects, certifications, and placement support."
    },
    {
      question: "What kind of salary can I expect after completion?",
      answer: "Salaries vary based on your background and role: Freshers: ₹3.5-5 LPA as Digital Marketing Executive, Experienced switchers: ₹6-12 LPA as Marketing Manager/Specialist, Freelancers: ₹25,000-1,00,000+ per month, Business owners: 300%+ ROI on marketing investments. Many of our alumni have achieved 40-60% salary hikes within their first year."
    },
    {
      question: "Is there any age limit for enrollment?",
      answer: "No age limit! Our youngest student was 18 and oldest was 52. We welcome: Fresh graduates looking to start their careers, Working professionals wanting to switch fields, Homemakers returning to work, Retirees starting new ventures, Business owners wanting to grow their companies. Age is just a number when it comes to learning digital marketing!"
    },
    {
      question: "What support do I get after course completion?",
      answer: "Lifetime support includes: Access to updated course materials, Alumni network and community, Continued placement assistance, Advanced workshop invitations, Industry trend updates, Career counseling sessions, Refresher training opportunities, and Free access to new tool trainings. We believe in long-term relationships with our students."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-brand-primary border-brand-primary">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear your doubts and make an informed decision about your digital marketing journey
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  </div>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="pl-8 pr-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-white rounded-2xl p-8 shadow-medium">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground">
              Our admission counselors are here to help you make the best decision for your career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-card rounded-lg">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Live Chat</h4>
              <p className="text-sm text-muted-foreground mb-4">Chat with our counselors instantly</p>
              <Button variant="outline" size="sm" className="w-full">
                Start Chat
              </Button>
            </div>

            <div className="text-center p-6 bg-gradient-card rounded-lg">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-brand-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
              <p className="text-sm text-muted-foreground mb-4">Speak with our experts directly</p>
              <Button variant="outline" size="sm" className="w-full">
                Request Callback
              </Button>
            </div>

            <div className="text-center p-6 bg-gradient-card rounded-lg">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
              <p className="text-sm text-muted-foreground mb-4">Get detailed information via email</p>
              <Button variant="outline" size="sm" className="w-full">
                Send Email
              </Button>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="cta" size="lg">
              Book Free Counseling Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;