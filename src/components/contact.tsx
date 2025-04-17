"use client"
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get in Touch with Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you need assistance with GST registration, returns filing, or any other tax-related service,
            our team of certified professionals is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information Panel */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-primary" />
                </span>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Phone</p>
                    <p className="text-muted-foreground mb-1">Available 9:00 AM - 6:00 PM (Mon-Sat)</p>
                    <a href="tel:8284808852" className="block text-primary hover:underline">82848-08852</a>
                    <a href="tel:9084049817" className="block text-primary hover:underline">90840-49817</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Email</p>
                    <p className="text-muted-foreground mb-1">For queries and support</p>
                    <a href="mailto:gandhideepika97@gmail.com" className="block text-primary hover:underline">
                      gandhideepika97@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Office Address</p>
                    <p className="text-muted-foreground mb-1">Visit us for in-person consultation</p>
                    <address className="not-italic">
                      121 - Bharat Nagar, <br />
                      Ludhiana, Punjab
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Business Hours</p>
                    <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="#" className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our GST Services?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Certified GST Practitioners with years of experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Timely and accurate filing of all GST returns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dedicated support and personalized guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Affordable pricing with transparent fee structure</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </span>
                Enquire Now
              </h3>
              
              {formStatus === "success" ? (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <AlertTitle className="text-green-800">Thank you for your enquiry!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    We&apos;ve received your message and will contact you shortly.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium flex items-center">
                        Full Name <span className="text-destructive ml-1">*</span>
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Enter your full name" 
                        required 
                        className="focus:border-primary" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium flex items-center">
                        Phone Number <span className="text-destructive ml-1">*</span>
                      </label>
                      <Input 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        required 
                        className="focus:border-primary" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium flex items-center">
                        Email Address <span className="text-destructive ml-1">*</span>
                      </label>
                      <Input 
                        id="email" 
                        placeholder="Enter your email address" 
                        type="email" 
                        required 
                        className="focus:border-primary" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name <span className="text-muted-foreground text-xs">(Optional)</span>
                      </label>
                      <Input 
                        id="company" 
                        placeholder="Enter your company name" 
                        className="focus:border-primary" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium flex items-center">
                      Service Required <span className="text-destructive ml-1">*</span>
                    </label>
                    <select
                      id="service"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select the service you need</option>
                      <option value="gst-registration">GST Registration</option>
                      <option value="gst-returns">GST Returns Filing</option>
                      <option value="gst-compliance">GST Compliance & Advisory</option>
                      <option value="msme">MSME Registrations</option>
                      <option value="audit">Audit Compliance</option>
                      <option value="itr">Income Tax Return Filing (ITR)</option>
                      <option value="accounting">Accounting/Book keeping</option>
                      <option value="gst-refund">GST Refund Assistance</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium flex items-center">
                      Message <span className="text-destructive ml-1">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your requirements or questions in detail"
                      rows={5}
                      required
                      className="focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="source" className="text-sm font-medium">
                      How did you hear about us? <span className="text-muted-foreground text-xs">(Optional)</span>
                    </label>
                    <select
                      id="source"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select an option</option>
                      <option value="search">Search Engine (Google, Bing, etc.)</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral from a friend</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="flex items-start space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      I consent to Gstify collecting my details through this form. To learn more about how we handle your data, please see our <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 text-lg font-medium transition-all hover:shadow-lg" 
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Submit Enquiry <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
              
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>
                  We typically respond to all enquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm overflow-hidden">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-primary/10 p-2 rounded-full mr-3">
                <Globe className="h-5 w-5 text-primary" />
              </span>
              Find Us
            </h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
              {/* Replace with actual map or iframe */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">
                  Map loading... (121 - Bharat Nagar, Ludhiana)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}