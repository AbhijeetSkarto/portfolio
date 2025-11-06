import { Check, ArrowRight, Globe, Megaphone, Code, Layers, Briefcase, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const services = [
  {
    name: "360° Startup Ecosystem",
    description: "End-to-End Development, Global Market Entry, Funding Strategy",
    icon: <Globe className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    details: [
      "End-to-End Development",
      "Global Market Entry",
      "Funding Strategy"
    ]
  },
  {
    name: "Digital Marketing Platform",
    description: "Advanced digital marketing with influencer networks, PR, and performance marketing.",
    icon: <Megaphone className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    details: [
      "Influencer Marketing",
      "PR & Media Relations",
      "Brand Strategy"
    ]
  },
  {
    name: "100+ Developer Network",
    description: "Elite developers across all domains - AI/ML, Blockchain, Web3, Mobile, Cloud.",
    icon: <Code className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    details: [
      "Full-Stack Teams",
      "DevOps Engineers",
      "AI/ML Specialists"
    ]
  },
  {
    name: "Multi-Domain Expertise",
    description: "Specialized solutions across various industries",
    icon: <Layers className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    details: [
      "EdTech Platforms",
      "HealthTech Innovation",
      "E-commerce Growth"
    ]
  },
  {
    name: "Revenue-Based Partnership",
    description: "Revolutionary payment model: 50% upfront + 50% on revenue generation.",
    icon: <Briefcase className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    details: [
      "Risk-Shared Investment",
      "Performance Guarantee",
      "Long-term Partnership",
      "Success Alignment"
    ]
  },
  {
    name: "ISO & Compliance Excellence",
    description: "Complete compliance framework with international certifications.",
    icon: <Shield className="h-10 w-10 p-2 rounded-lg bg-primary/10 text-primary" />,
    details: [
      "International Standards",
      "Compliance Framework",
      "Quality Assurance"
    ]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 hover:bg-primary/20 text-primary border-none">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Business Solutions</h2>
          <p className="text-lg text-muted-foreground">
            We offer end-to-end solutions tailored to accelerate your business growth and success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden transition-all duration-300 hover:shadow-xl border border-border hover:border-primary/20 h-full flex flex-col bg-background dark:bg-slate-950 hover:bg-gradient-to-br hover:from-background hover:to-primary/5 dark:hover:from-slate-950 dark:hover:to-primary/10"
            >
              <CardHeader className="pb-4">
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="pb-4 flex-grow">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0 flex-shrink-0" />
                      <span className="text-sm text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-2 pb-4">
                <Button 
                  asChild
                  variant="outline" 
                  size="sm" 
                  className="w-full group text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="border-none bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 overflow-hidden relative shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 dark:bg-primary/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            
            <CardContent className="p-8 md:p-12 text-center relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready to transform your business?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                Partner with our expert team and leverage our cutting-edge solutions to accelerate growth, enter global markets, and achieve sustainable success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="px-8"
                >
                  <a href="#contact">Get Started Now</a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                >
                  <a href="#contact">Schedule Consultation</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}