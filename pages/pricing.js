import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Check,
  X,
  Star,
  Users,
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  CheckIcon,
} from "lucide-react";

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Free",
      tagline: "Perfect for individuals",
      price: { monthly: "$0", yearly: "$0" },
      popular: false,
      features: [
        "Task management (Basic)",
        "Subtasks, labels, deadlines",
        "Basic Kanban board",
        "Basic Calendar (no sync)",
        "1 Workspace",
        "Max 5 members",
        "Max 100 tasks per month",
        "Limited email notifications",
        "AI Suggestions (Lite)",
      ],
      cta: "Get Started Free",
    },
    {
      name: "Premium",
      tagline: "Great for small teams",
      price: { monthly: "$12", yearly: "$10" },
      popular: true,
      features: [
        "Unlimited tasks & projects",
        "Up to 3 Workspaces",
        "Role-based access control",
        "Google Calendar & Outlook sync",
        "File uploads (2GB/workspace)",
        "Advanced notifications",
        "Client collaboration",
        "AI Task Assistant",
        "Basic Reports",
      ],
      cta: "Start Premium",
    },
    {
      name: "Business",
      tagline: "Scale with your company",
      price: { monthly: "$30", yearly: "$25" },
      popular: false,
      features: [
        "Everything in Premium",
        "Unlimited Workspaces",
        "Custom Branding & Themes",
        "Department-level roles",
        "Advanced Analytics",
        "File uploads (100GB total)",
        "Slack, Teams, WhatsApp integration",
        "AI Co-Pilot",
        "Export (CSV, PDF)",
        "Audit Logs & SSO",
      ],
      cta: "Choose Business",
    },
    {
      name: "Enterprise",
      tagline: "Custom solutions",
      price: { monthly: "Custom", yearly: "Custom" },
      popular: false,
      features: [
        "Everything in Business",
        "Unlimited storage",
        "Dedicated Account Manager",
        "Custom Integrations",
        "On-premise deployment",
        "API Access & Webhooks",
        "SLA & Priority Support",
        "AI Advanced Planning",
        "Resource allocation",
        "Custom compliance",
      ],
      cta: "Contact Sales",
    },
  ];

  const comparisonFeatures = [
    {
      feature: "Basic Tasks & Subtasks",
      free: true,
      premium: true,
      business: true,
      enterprise: true,
    },
    {
      feature: "Kanban Board",
      free: true,
      premium: true,
      business: true,
      enterprise: true,
    },
    {
      feature: "Calendar Sync",
      free: false,
      premium: true,
      business: true,
      enterprise: true,
    },
    {
      feature: "Workspaces",
      free: "1",
      premium: "3",
      business: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      feature: "Team Members",
      free: "5",
      premium: "30",
      business: "200",
      enterprise: "Unlimited",
    },
    {
      feature: "File Storage",
      free: false,
      premium: "2GB",
      business: "100GB",
      enterprise: "Unlimited",
    },
    {
      feature: "AI Features",
      free: "Lite",
      premium: "Basic",
      business: "Co-Pilot",
      enterprise: "Advanced",
    },
    {
      feature: "Custom Branding",
      free: false,
      premium: false,
      business: true,
      enterprise: true,
    },
    {
      feature: "Integrations",
      free: false,
      premium: false,
      business: true,
      enterprise: true,
    },
    {
      feature: "API & Webhooks",
      free: false,
      premium: false,
      business: false,
      enterprise: true,
    },
  ];

  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! Our Free plan is available forever with no credit card required. You can also start a 14-day free trial of any paid plan.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time from your account settings. No questions asked, no cancellation fees.",
    },
    {
      question: "Do you offer annual discounts?",
      answer:
        "Yes! Save up to 20% when you choose annual billing. The discount is automatically applied when you switch to yearly plans.",
    },
    {
      question: "Is support included in all plans?",
      answer:
        "Free users get community support. Premium and Business users get email support. Enterprise customers get dedicated support with SLA.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan anytime. Upgrades are instant, and downgrades take effect at the end of your current billing cycle.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      text: "The Premium plan is perfect for our 15-person startup. The AI suggestions alone save us hours every week.",
      avatar: "👩‍💼",
    },
    {
      name: "Marcus Johnson",
      company: "Growth Co.",
      text: "Business plan analytics help us track productivity across departments. The custom branding is a nice touch.",
      avatar: "👨‍💼",
    },
    {
      name: "Lisa Wang",
      company: "Enterprise Corp",
      text: "Enterprise support is exceptional. Our dedicated manager helped customize integrations perfectly.",
      avatar: "👩‍💻",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen bg-animated-mesh relative overflow-hidden flex items-center">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-animated-dots opacity-20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float blur-xl"></div>
        <div
          className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-secondary rounded-full opacity-15 animate-float blur-lg"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="animate-slide-in-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-3 glass-nav px-6 py-3 mb-8 hover:scale-105 transition-all duration-300">
                <Sparkles
                  className="w-5 h-5 text-primary animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <span className="text-sm font-bold text-gradient">
                  ✨ Cheapest price!
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Choose Your{" "}
                <span className="text-gradient relative">
                  Perfect Plan
                  <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl animate-pulse rounded-full"></div>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From{" "}
                <span className="text-primary font-semibold">individuals</span>{" "}
                to{" "}
                <span className="text-secondary font-semibold">
                  enterprises
                </span>{" "}
                — scale effortlessly with plans that grow with your team.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn-primary group">
                  <Zap className="w-5 h-5 group-hover:animate-bounce" />
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-glass group">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Live Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <p className="text-sm text-muted-foreground">
                🔒 No credit card • ⚡ 2min setup • 🚀 Cancel anytime
              </p>
            </div>

            {/* Right Side - Visual/Stats */}
            <div className="animate-slide-in-right">
              <div className="glass-strong p-8 rounded-3xl">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* Happy Teams */}
                  <div className="text-center p-6 rounded-2xl hover:scale-105 transition-all bg-gradient-to-br from-emerald-500/20 to-emerald-700/10 backdrop-blur-lg border border-white/10">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      10K+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Happy Teams
                    </div>
                  </div>

                  {/* Tasks Completed */}
                  <div className="text-center p-6 rounded-2xl hover:scale-105 transition-all bg-gradient-to-br from-blue-500/20 to-blue-700/10 backdrop-blur-lg border border-white/10">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      50M+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tasks Completed
                    </div>
                  </div>

                  {/* Uptime */}
                  <div className="text-center p-6 rounded-2xl hover:scale-105 transition-all bg-gradient-to-br from-purple-500/20 to-purple-700/10 backdrop-blur-lg border border-white/10">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      99.9%
                    </div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>

                  {/* User Rating */}
                  <div className="text-center p-6 rounded-2xl hover:scale-105 transition-all bg-gradient-to-br from-amber-500/20 to-amber-700/10 backdrop-blur-lg border border-white/10">
                    <div className="text-3xl font-bold text-amber-400 mb-2">
                      4.9★
                    </div>
                    <div className="text-sm text-muted-foreground">
                      User Rating
                    </div>
                  </div>
                </div>

                {/* Trust Logos */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Trusted by teams at
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="glass px-4 py-2 rounded-full text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity">
                      TechCorp
                    </div>
                    <div className="glass px-4 py-2 rounded-full text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity">
                      StartupXYZ
                    </div>
                    <div className="glass px-4 py-2 rounded-full text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity">
                      Growth Co
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 section bg-animated-waves relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              Simple, Transparent
              <span className="text-gradient"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your team. Start free, upgrade when
              you're ready.
            </p>
          </AnimatedSection>

          {/* Billing Toggle */}
          <AnimatedSection className="text-center mb-16">
            <div className="flex justify-center mb-12">
              {" "}
              <div className="glass-card inline-flex items-center gap-4 p-2 mb-6">
                {/* Monthly */}
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${
                    billingPeriod === "monthly"
                      ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  Monthly
                </button>

                {/* Yearly */}
                <button
                  onClick={() => setBillingPeriod("yearly")}
                  className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${
                    billingPeriod === "yearly"
                      ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  Yearly
                  <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 0.1}>
                <div
                  className={`glass-card text-center relative ${
                    plan.popular ? "ring-2 ring-purple-500/50 scale-105" : ""
                  }`}
                >
                  {/* Most Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Title + Price */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.tagline}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gradient">
                      {billingPeriod === "yearly"
                        ? plan.price.yearly ?? plan.price.monthly
                        : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== "Custom" &&
                      plan.price.yearly !== "Custom" && (
                        <span className="text-gray-400 ml-1">
                          /{billingPeriod === "yearly" ? "year" : "month"}
                        </span>
                      )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6 text-left">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2  text-gray-300"
                      >
                        <Check className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full justify-center  ${
                      plan.popular ? "btn-primary" : "btn-glass"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section bg-animated-particles">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Compare <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See exactly what's included in each plan to make the best choice
                for your team.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="glass-strong rounded-3xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="text-left py-4 px-4 font-semibold">
                      Features
                    </th>
                    <th className="text-center py-4 px-4 font-semibold">
                      Free
                    </th>
                    <th className="text-center py-4 px-4 font-semibold">
                      Premium
                    </th>
                    <th className="text-center py-4 px-4 font-semibold">
                      Business
                    </th>
                    <th className="text-center py-4 px-4 font-semibold">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-glass-border/50 hover:bg-glass transition-colors"
                    >
                      <td className="py-4 px-4 font-medium">{item.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {typeof item.free === "boolean" ? (
                          item.free ? (
                            <Check className="w-5 h-5 text-success mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-error mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-medium">
                            {item.free}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof item.premium === "boolean" ? (
                          item.premium ? (
                            <Check className="w-5 h-5 text-success mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-error mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-medium">
                            {item.premium}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof item.business === "boolean" ? (
                          item.business ? (
                            <Check className="w-5 h-5 text-success mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-error mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-medium">
                            {item.business}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof item.enterprise === "boolean" ? (
                          item.enterprise ? (
                            <Check className="w-5 h-5 text-success mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-error mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-medium">
                            {item.enterprise}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-animated-gradient">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by{" "}
                <span className="text-gradient-secondary">Teams Worldwide</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                See what our customers say about our pricing and value.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card text-center animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-6xl mb-4">{testimonial.avatar}</div>
                  <blockquote className="text-lg mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-animated-particles">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              Frequently Asked
              <span className="text-gradient"> Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about TaskFlow Pro
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <AnimatedSection key={faq.question} delay={index * 0.1}>
                  <div className="glass-card">
                    <h3 className="text-xl font-semibold mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-animated-mesh">
        <AnimatedSection className="text-center mb-16">
          <div className="container">
            <div className="glass-strong text-center p-16 rounded-3xl">
              <Zap className="w-16 h-16 text-primary mx-auto mb-8 animate-pulse-glow" />
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Start Managing Tasks{" "}
                <span className="text-gradient">Smarter</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of teams already using our platform to boost
                productivity and streamline workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-primary text-lg px-8 py-4 glow">
                  <Users className="w-5 h-5" />
                  Get Started Free
                </button>
                <button className="btn-glass text-lg px-8 py-4">
                  <Shield className="w-5 h-5" />
                  Talk to Sales
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
