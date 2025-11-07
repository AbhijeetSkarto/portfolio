"use client";
import { Phone, Mail, Globe, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import axios from "axios";


export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
    source: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");


    try {
      const response = await axios.post('/api', formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const {data}=response


      if (data.success ) {
        setFormStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          service: "",
          message: "",
          source: "",
        });
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(
         "Something went wrong. Please try again later."
      );
      console.error("Submission error:", error);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get in Touch with Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start your transformation today. Connect with our expert team to discuss your business goals and how we can help you scale globally.
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
                    <p className="text-muted-foreground mb-1">Available 24/7</p>
                    <a href="tel:+917009899194" className="block text-primary hover:underline">+91 7009899194</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Email</p>
                    <p className="text-muted-foreground mb-1">For queries and support</p>
                    <a href="mailto: abhijeetskarto.er@gmail.com" className="block text-primary hover:underline">
                       abhijeetskarto.er@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Global Presence</p>
                    <p className="text-muted-foreground mb-1">Operating in 15+ countries</p>
                    <address className="not-italic">Global Service Provider</address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Response Time</p>
                    <p className="text-muted-foreground">Typically within 24 hours</p>
                    <p className="text-muted-foreground">WhatsApp for immediate assistance</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3">Connect With Us</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://api.whatsapp.com/send/?phone=917009899194&text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                  <a href="mailto: abhijeetskarto.er@gmail.com" className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors" title="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our Services?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Expert team with IIBA & PMI certifications and proven track record</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Revenue-based partnership model aligning success metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>24/7 dedicated global support across 15+ countries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transparent pricing with flexible customized solutions</span>
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

              {formStatus === "success" && (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <AlertTitle className="text-green-800">Thank you!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </AlertDescription>
                </Alert>
              )}

              {formStatus === "error" && (
                <Alert className="mb-6 bg-red-50 border-red-200">
                  <AlertTitle className="text-red-800">Submission Failed</AlertTitle>
                  <AlertDescription className="text-red-700">{errorMessage}</AlertDescription>
                </Alert>
              )}

              {formStatus !== "success" && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium flex items-center">
                        Full Name <span className="text-destructive ml-1">*</span>
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
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
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
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
                        value={formData.company}
                        onChange={handleChange}
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
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select the service you need</option>
                      <option value="startup-ecosystem">360° Startup Ecosystem</option>
                      <option value="digital-marketing">Digital Marketing Platform</option>
                      <option value="developer-network">100+ Developer Network</option>
                      <option value="multi-domain">Multi-Domain Expertise</option>
                      <option value="revenue-partnership">Revenue-Based Partnership</option>
                      <option value="iso-compliance">ISO & Compliance Excellence</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium flex items-center">
                      Message <span className="text-destructive ml-1">*</span>
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
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
                      value={formData.source}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select an option</option>
                      <option value="search">Search Engine</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 text-lg font-medium transition-all hover:shadow-lg"
                    disabled={formStatus === "loading"}
                  >
                    {formStatus === "loading" ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
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
                <p>We typically respond within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}