import { Button } from "./ui/button";
import { ArrowRight, CheckCircle, PhoneCall } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Hero() {
  const features = [
    "Expert consulting team",
    "Proven strategies",
    "Global reach & support",
    "Result-driven approach"
  ];

  const stats = [
    { value: "100+", label: "Startups Mentored" },
    { value: "13", label: "Countries" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section 
      className="py-12 md:py-20 lg:py-28 overflow-hidden relative"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge className="px-4 py-2 text-sm bg-primary/20 hover:bg-primary/30 text-primary border-primary/50 mx-auto">
            IIBA & PMI Certified
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Business Strategist
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-gray-100">
              Leading 100+ Developers & Mentors Globally
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white pt-4">
            Revolutionary Business Ecosystem
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Experience the future of business consulting with our 100+ expert team, cutting-edge 
            technology, and revolutionary revenue-sharing model that aligns our success with yours.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-white">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="group transition-all duration-300 h-14 text-base bg-primary hover:bg-primary/90">
              <a href="#contact"> Get Started Today</a>

              
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 text-base text-white bg-white/30 border-white hover:bg-white/10">
              <PhoneCall className="mr-2 h-5 w-5" />
              <a href="#contact"> Schedule Consultation</a>
             
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="h-10 w-10 rounded-full bg-primary/40 border-2 border-white flex items-center justify-center text-xs font-medium text-white"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-100">
              <span className="font-medium text-white">500+</span> businesses enrolled this month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}