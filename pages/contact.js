import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Calendar,
  Star,
  CheckCircle,
  Globe,
  Headphones,
  FileQuestion,
  Building,
  User,
  ChevronDown,
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/sectionAnimation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "general",
    message: "",
  });
  const [activeMethod, setActiveMethod] = useState(0);

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      contact: "support@taskflowpro.com",
      action: "Send Email",
      color: "text-primary",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      color: "text-warning",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Demo",
      contact: "Book a 30-min call",
      action: "Schedule Now",
      color: "text-secondary",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, CA 94105",
      timezone: "PST (UTC-8)",
      flag: "🇺🇸",
    },
    {
      city: "London",
      address: "456 Tech Street, EC2A 4DP",
      timezone: "GMT (UTC+0)",
      flag: "🇬🇧",
    },
    {
      city: "Singapore",
      address: "789 Marina Boulevard, 018981",
      timezone: "SGT (UTC+8)",
      flag: "🇸🇬",
    },
  ];

  const supportOptions = [
    {
      icon: <FileQuestion className="w-6 h-6" />,
      title: "Help Center",
      description: "Browse our comprehensive knowledge base",
      link: "View Articles",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Forum",
      description: "Connect with other users and share tips",
      link: "Join Discussion",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Feature Requests",
      description: "Suggest new features and improvements",
      link: "Submit Idea",
    },
  ];

  const faqs = [
    {
      question: "How quickly do you respond?",
      answer:
        "We respond to all inquiries within 24 hours, with enterprise customers getting priority support within 2-4 hours.",
    },
    {
      question: "Do you offer phone support?",
      answer:
        "Yes! Phone support is available for Business and Enterprise customers. Free and Premium users can access live chat and email support.",
    },
    {
      question: "Can I schedule a demo?",
      answer:
        "Absolutely! We offer personalized 30-minute demos for teams interested in our Business or Enterprise plans.",
    },
    {
      question: "Do you provide implementation help?",
      answer:
        "Yes, our Customer Success team helps Enterprise customers with onboarding, training, and custom integrations.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen bg-animated-mesh relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-animated-dots opacity-20 pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float blur-xl pointer-events-none"></div>
        <div
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-secondary rounded-full opacity-8 animate-float blur-lg pointer-events-none"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-3 glass-nav px-6 py-3 mb-8 hover:scale-105 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-bold text-gradient">
                  Get in Touch
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                Let's Build{" "}
                <span className="text-gradient relative">
                  Together
                  <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl animate-pulse rounded-full"></div>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                you just get started and we'll help you succeed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn-primary group">
                  <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Start Live Chat
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-glass group">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Schedule Demo
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass p-4 rounded-2xl text-center hover:scale-105 transition-all">
                  <Clock className="w-6 h-6 text-success mx-auto mb-2" />
                  <div className="text-sm font-semibold">24/7 Support</div>
                </div>
                <div className="glass p-4 rounded-2xl text-center hover:scale-105 transition-all">
                  <Globe className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold">Global Reach</div>
                </div>
                <div className="glass p-4 rounded-2xl text-center hover:scale-105 transition-all">
                  <Headphones className="w-6 h-6 text-warning mx-auto mb-2" />
                  <div className="text-sm font-semibold">Expert Team</div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Methods */}
            <div className="animate-slide-in-right">
              <div className="glass-strong p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Choose Your Preferred Method
                </h3>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className={`glass-card p-6 cursor-pointer transition-all duration-300  mb-2 ${
                        activeMethod === index
                          ? "ring-2 ring-primary glow scale-105"
                          : "hover:scale-102"
                      }`}
                      onClick={() => setActiveMethod(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-2xl bg-gradient-to-br ${method.gradient} text-white`}
                        >
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">{method.title}</h4>
                          <div className="text-sm font-semibold mt-1">
                            {method.contact}
                          </div>
                        </div>
                        <button className="btn-glass text-sm">
                          {method.action}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-animated-waves">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's <span className="text-gradient-secondary">Connect</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Need a hand? We're here to help.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <AnimatedSection className="text-center mb-16">
                <div className="animate-slide-in-left">
                  <div className="glass-strong p-8 rounded-3xl">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold mb-4">
                        Send Us a Message
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form and we'll get back to you within 24
                        hours.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="block text-sm font-semibold mb-2">
                            Name *
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <div className="block text-sm font-semibold mb-2">
                            Email *
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="block text-sm font-semibold mb-2">
                          Company
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <div className="block text-sm font-semibold mb-2">
                          Subject *
                        </div>
                        <div className="relative">
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="form-input appearance-none pr-10 "
                          >
                            <option className="bg-[#2d3157]" value="general">
                              General Inquiry
                            </option>
                            <option className="bg-[#2d3157]" value="sales">
                              Sales & Pricing
                            </option>
                            <option className="bg-[#2d3157]" value="support">
                              Technical Support
                            </option>
                            <option className="bg-[#2d3157]" value="enterprise">
                              Enterprise Solutions
                            </option>
                            <option
                              className="bg-[#2d3157]"
                              value="partnership"
                            >
                              Partnership
                            </option>
                            <option className="bg-[#2d3157]" value="feedback">
                              Feedback & Suggestions
                            </option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <div className="block text-sm font-semibold mb-2">
                          Message *
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="5"
                          className="form-input resize-none"
                          placeholder="Tell us how we can help you..."
                        ></textarea>
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="btn-primary w-full group justify-center mt-2"
                      >
                        <Send className="w-5 h-5 group-hover:animate-bounce" />
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Additional Support Options */}

              <div className="animate-slide-in-right">
                <div className="space-y-8">
                  <AnimatedSection className="text-center mb-8">
                    <div className="glass-card">
                      <h3 className="text-2xl font-bold mb-6">
                        Other Ways to Get Help
                      </h3>
                      <div className="space-y-4">
                        {supportOptions.map((option, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 p-4 glass rounded-2xl hover:scale-105 transition-all my-2"
                          >
                            <div className="p-2 glass rounded-xl">
                              <div className="text-primary">{option.icon}</div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{option.title}</h4>
                              <p className="text-muted-foreground text-sm">
                                {option.description}
                              </p>
                            </div>
                            <button className="btn-glass text-sm">
                              {option.link}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection className="text-center mb-8">
                    <div className="glass-card ">
                      <h3 className="text-2xl font-bold mb-6">
                        Response Times
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            General Inquiries
                          </span>
                          <span className="font-semibold">Within 24 hours</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Technical Support
                          </span>
                          <span className="font-semibold">Within 4 hours</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Enterprise Sales
                          </span>
                          <span className="font-semibold">Within 2 hours</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Critical Issues
                          </span>
                          <span className="font-semibold text-success">
                            Within 1 hour
                          </span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section bg-animated-particles">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Global{" "}
                <span className="text-gradient-secondary">Presence</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                With offices worldwide, we're always here to support you in your
                timezone.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officeLocations.map((office, index) => (
                <div
                  key={index}
                  className="glass-card text-center group hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-6xl mb-6 group-hover:animate-bounce">
                    {office.flag}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2 justify-center">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground justify-center">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{office.timezone}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-animated-grid">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Quick <span className="text-gradient">Answers</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions before reaching out.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`glass-card ${
                    index % 2 === 0
                      ? "animate-slide-in-left"
                      : "animate-slide-in-right"
                  }`}
                  style={{ animationDelay: `${Math.floor(index / 2) * 200}ms` }}
                >
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics */}
      <section className="section bg-animated-mesh">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="text-gradient">Thousands</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join the growing community of teams who rely on our support.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="glass-card text-center hover:scale-105 transition-all duration-300 animate-slide-up">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground text-sm">
                  Happy Customers
                </div>
              </div>
              <div
                className="glass-card text-center hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "100ms" }}
              >
                <div className="text-4xl font-bold text-success mb-2">98%</div>
                <div className="text-muted-foreground text-sm">
                  Satisfaction Rate
                </div>
              </div>
              <div
                className="glass-card text-center hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                <div className="text-4xl font-bold text-secondary mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground text-sm">
                  Support Available
                </div>
              </div>
              <div
                className="glass-card text-center hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "300ms" }}
              >
                <div className="text-4xl font-bold text-warning mb-2">150+</div>
                <div className="text-muted-foreground text-sm">
                  Countries Served
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Support */}
      <section className="section bg-animated-waves">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our{" "}
                <span className="text-gradient-secondary">Support Team</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Real people ready to help you succeed with TaskFlow Pro.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card text-center animate-slide-up">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
                  AJ
                </div>
                <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
                <div className="text-primary font-semibold mb-3">
                  Support Team Lead
                </div>
                <p className="text-muted-foreground text-sm">
                  Specializes in technical issues and integrations
                </p>
              </div>

              <div
                className="glass-card text-center animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
                  SR
                </div>
                <h3 className="text-xl font-bold mb-2">Sarah Rodriguez</h3>
                <div className="text-success font-semibold mb-3">
                  Customer Success Manager
                </div>
                <p className="text-muted-foreground text-sm">
                  Helps teams maximize their productivity potential
                </p>
              </div>

              <div
                className="glass-card text-center animate-slide-up"
                style={{ animationDelay: "400ms" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white">
                  MC
                </div>
                <h3 className="text-xl font-bold mb-2">Mike Chen</h3>
                <div className="text-warning font-semibold mb-3">
                  Enterprise Specialist
                </div>
                <p className="text-muted-foreground text-sm">
                  Dedicated to enterprise customers and implementations
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-animated-gradient">
        <AnimatedSection className="text-center mb-16">
          <div className="container">
            <div className="glass-strong text-center p-16 rounded-3xl">
              <Zap className="w-16 h-16 text-primary mx-auto mb-8 animate-pulse-glow" />
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Get <span className="text-gradient">Started?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't wait! Join thousands of teams who've already transformed
                their productivity with TaskFlow Pro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-primary text-lg px-8 py-4 glow group">
                  <User className="w-5 h-5 group-hover:animate-bounce" />
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-glass text-lg px-8 py-4 group">
                  <Building className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Enterprise Demo
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                No credit card required • Setup in minutes • Cancel anytime
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
