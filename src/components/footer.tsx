import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Newsletter Subscription */}
        <div className="bg-muted/50 rounded-xl p-6 mb-12 border border-border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest GST updates, tax news, and filing deadlines.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow"
                  required
                />
                <Button type="submit" className="whitespace-nowrap">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M9 5v4c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Gstify</h3>
            </div>
            
            <p className="text-muted-foreground">
              Your trusted GST service partner. We specialize in providing
              comprehensive GST services to businesses of all sizes, ensuring
              seamless tax compliance, accurate filings, and hassle-free GST management.
            </p>
            
            <a 
              href="https://www.gstify.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              www.gstify.in <ExternalLink className="ml-1 h-4 w-4" />
            </a>
            
            <div className="pt-2">
              <h4 className="font-medium mb-3">Connect With Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-muted p-2 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-muted p-2 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-muted p-2 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-muted p-2 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#gst-registration"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  GST Registration
                </Link>
              </li>
              <li>
                <Link
                  href="#gst-returns"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  GST Returns Filing
                </Link>
              </li>
              <li>
                <Link
                  href="#gst-compliance"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  GST Compliance & Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="#msme"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  MSME Registrations
                </Link>
              </li>
              <li>
                <Link
                  href="#audit"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Audit Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="#itr"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Income Tax Return Filing
                </Link>
              </li>
            </ul>
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
                  About Us
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
                  href="#why-us"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Why Choose Us
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
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground hover:text-primary flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <address className="not-italic text-muted-foreground">
                  121 - Bharat Nagar, Ludhiana, Punjab
                </address>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <a href="tel:8284808852" className="hover:text-primary block">82848-08852</a>
                  <a href="tel:9084049817" className="hover:text-primary block">90840-49817</a>
                </div>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:gandhideepika97@gmail.com" 
                  className="text-muted-foreground hover:text-primary"
                >
                  gandhideepika97@gmail.com
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <h4 className="font-medium mb-2">Business Hours</h4>
              <div className="text-muted-foreground">
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Gstify. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-muted-foreground hover:text-primary"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/sitemap"
                className="text-muted-foreground hover:text-primary"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}