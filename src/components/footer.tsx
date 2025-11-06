import Link from "next/link";
import {  Mail,  ArrowRight,  MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Abhijeet Suman</h3>
            </div>
            
            <p className="text-muted-foreground">
              Transforming Startups & Enterprises Globally with 100+ Expert Team & Revolutionary Payment Model
            </p>
            
            <div className="pt-2">
              <h4 className="font-medium mb-3">Connect With Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://api.whatsapp.com/send/?phone=917009899194&text&type=phone_number&app_absent=0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted p-2 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:abhijeet@onlinestartup.store" 
                  className="bg-muted p-2 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/abhijeet" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted p-2 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="LinkedIn"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#results"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Key Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Startup Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Business Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  ISO Certification
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  AI Tools Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ready to Scale Your Business?</h3>
            <p className="text-muted-foreground">
              Join 100+ successful businesses that transformed with our proven strategies.
            </p>
            <Link href="#contact">
              <Button className="w-full">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Abhijeet Suman. All rights reserved. | 
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary ml-1">
                Privacy Policy
              </Link>
              {" | "}
              <Link href="/terms-service" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              {" | "}
              <Link href="/website-builder" className="text-muted-foreground hover:text-primary">
                Website Builder
              </Link>
            </p>
            <div className="flex justify-start md:justify-end">
              <Link href="#top" className="text-muted-foreground hover:text-primary text-sm flex items-center">
                ↑ Back to top
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}