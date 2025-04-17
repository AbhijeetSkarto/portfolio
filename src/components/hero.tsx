import { Button } from "./ui/button";
import { ArrowRight, CheckCircle, PhoneCall } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export default function Hero() {
  const features = [
    "Real-time GST tracking",
    "Expert tax consulting",
    "Timely compliance alerts",
    "Secure document handling"
  ];

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          {/* Content Area */}
          <div className="space-y-8">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm bg-primary/10 hover:bg-primary/20 text-primary border-none">
                Since 2018 • Trusted by 5000+ businesses
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-primary">ease</span> your taxes
                <span className="block mt-2">simplify compliance</span>
              </h1>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground">
              Your trusted GST service partner for businesses of all sizes
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              At Gstify, we specialize in providing comprehensive GST services tailored 
              to your business needs. Our expert team ensures seamless tax compliance, 
              accurate filings, and hassle-free GST management, so you can focus on 
              what matters most — growing your business.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="group transition-all duration-300 h-14 text-base">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 text-base">
                <PhoneCall className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="h-10 w-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">500+</span> businesses enrolled this month
              </p>
            </div>
          </div>
          
          {/* SVG Illustration Area */}
          <div className="relative">
            <div className="relative h-72 sm:h-96 md:h-[500px] w-full rounded-xl overflow-hidden shadow-xl bg-background/80 flex items-center justify-center">
              <svg
                viewBox="0 0 800 600"
                className="w-full h-full p-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Elements */}
                <circle cx="400" cy="300" r="250" fill="#f9fafb" />
                <circle cx="400" cy="300" r="200" fill="#f3f4f6" />
                
                {/* Invoice/Document */}
                <rect x="280" y="150" width="240" height="300" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <rect x="300" y="180" width="200" height="20" rx="4" fill="#e5e7eb" />
                <rect x="300" y="210" width="120" height="10" rx="2" fill="#e5e7eb" />
                <rect x="300" y="230" width="80" height="10" rx="2" fill="#e5e7eb" />
                
                {/* GST Lines */}
                <rect x="300" y="270" width="200" height="1" fill="#d1d5db" />
                <rect x="300" y="290" width="60" height="10" rx="2" fill="#e5e7eb" />
                <rect x="440" y="290" width="60" height="10" rx="2" fill="#e5e7eb" />
                <rect x="300" y="310" width="60" height="10" rx="2" fill="#e5e7eb" />
                <rect x="440" y="310" width="60" height="10" rx="2" fill="#e5e7eb" />
                <rect x="300" y="330" width="60" height="10" rx="2" fill="#e5e7eb" />
                <rect x="440" y="330" width="60" height="10" rx="2" fill="#e5e7eb" />
                
                {/* Total Line */}
                <rect x="300" y="370" width="200" height="1" fill="#d1d5db" />
                <rect x="300" y="390" width="80" height="15" rx="2" fill="#d1d5db" />
                <rect x="420" y="390" width="80" height="15" rx="2" fill="#d1d5db" />
                
                {/* GST Logo/Symbol */}
                <circle cx="400" cy="100" r="40" fill="currentColor" className="text-primary/20" />
                <text x="400" y="110" textAnchor="middle" fill="currentColor" className="text-primary" fontWeight="bold" fontSize="20">GST</text>
                
                {/* Check Mark / Approved Symbol */}
                <circle cx="500" cy="200" r="30" fill="currentColor" className="text-green-100" />
                <path d="M490,200 L500,210 L520,190" stroke="currentColor" className="text-green-600" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Calculation Elements */}
                <circle cx="150" cy="250" r="30" fill="currentColor" className="text-primary/10" />
                <text x="150" y="255" textAnchor="middle" fill="currentColor" className="text-primary" fontSize="16">%</text>
                
                <circle cx="600" cy="350" r="40" fill="currentColor" className="text-primary/10" />
                <path d="M590,350 L610,350 M600,340 L600,360" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round" />
                
                {/* Calendar */}
                <rect x="150" y="350" width="60" height="60" rx="4" fill="white" stroke="#d1d5db" strokeWidth="2" />
                <rect x="150" y="350" width="60" height="15" rx="2" fill="currentColor" className="text-primary/20" />
                <text x="180" y="390" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="bold">31</text>
                
                {/* Decorative Lines */}
                <path d="M650,150 Q680,230 650,300" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                <path d="M150,150 Q120,230 150,300" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                
                {/* Small Decorative Elements */}
                <circle cx="650" cy="150" r="5" fill="currentColor" className="text-primary" />
                <circle cx="650" cy="300" r="5" fill="currentColor" className="text-primary" />
                <circle cx="150" cy="150" r="5" fill="currentColor" className="text-primary" />
                <circle cx="150" cy="300" r="5" fill="currentColor" className="text-primary" />
              </svg>
              
              {/* Floating cards */}
              <Card className="absolute -bottom-6 -left-6 sm:left-6 w-64 bg-background/95 backdrop-blur-sm shadow-lg hidden sm:block">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">98% on-time filing</p>
                      <p className="text-xs text-muted-foreground">Avoid penalties & notices</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="absolute -top-6 -right-6 sm:right-6 w-64 bg-background/95 backdrop-blur-sm shadow-lg hidden sm:block">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Save up to 30%</p>
                      <p className="text-xs text-muted-foreground">on compliance costs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}