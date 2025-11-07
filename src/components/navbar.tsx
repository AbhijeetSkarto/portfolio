"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "./ui/navigation-menu";
import { Badge } from "./ui/badge";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    { name: "Startup Consulting", href: "#services" },
    { name: "Business Strategy", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
    { name: "ISO Certification", href: "#services" },
    { name: "Software Development", href: "#services" },
    { name: "AI Tools Integration", href: "#services" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-primary/5 py-2 border-b border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <span>+91 7009899194</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-3 w-3 mr-1" />
              <span> abhijeetskarto.er@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-xs font-normal">
              Expert Support
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`sticky top-0 z-50 bg-background backdrop-blur transition-all duration-300 ${
          scrolled 
            ? "shadow-md bg-background/95 supports-[backdrop-filter]:bg-background/80" 
            : "bg-background supports-[backdrop-filter]:bg-background/90 border-b border-border"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              {/* Logo Image */}
              <div className="relative w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Abhijeet Suman
                </span>
                <span className="hidden sm:block text-xs text-muted-foreground">
                  Consulting & Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-3 text-foreground hover:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#services"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium">{service.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Regular Menu Items */}
                <NavigationMenuItem>
                  <Link href="#about" className="group flex items-center h-9 px-3 text-foreground hover:text-primary">
                    <span>About</span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary mt-1"></span>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="#results" className="group flex items-center h-9 px-3 text-foreground hover:text-primary">
                    <span>Results</span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary mt-1"></span>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="#contact" className="group flex items-center h-9 px-3 text-foreground hover:text-primary">
                    <span>Contact</span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary mt-1"></span>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center pl-2 space-x-3">
              <ThemeToggle />
              <Button className="group">
                <a href="#contact">Get Started</a>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-6 space-y-4 divide-y divide-border">
              <div className="pb-2">
                <p className="text-xs font-medium text-muted-foreground mb-3">Services</p>
                <div className="space-y-3 pl-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-foreground hover:text-primary text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-3 space-y-3">
                <Link
                  href="#about"
                  className="block text-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#results"
                  className="block text-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Results
                </Link>
                <Link
                  href="#contact"
                  className="block text-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              
              <div className="pt-4">
                <Button className="w-full">Get Started</Button>
                <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Phone className="h-3 w-3 mr-1" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-3 w-3 mr-1" />
                    <span>contact@company.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}