import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";

// Icons (using simple SVGs for production-ready code)
const CheckIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Feature icons
const TaskIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ChatIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const BellIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-3.5-3.5a50.6 50.6 0 00-1.5 3.5zm-6 0H4l3.5-3.5c.5-1.2 1-2.3 1.5-3.5z"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const LinkIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    />
  </svg>
);

const ZapIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

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

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <TaskIcon />,
      title: "Smart Task Management",
      description:
        "AI-powered task creation, prioritization, and automation. Save 10+ hours per week with intelligent workflow suggestions.",
      benefit: "Save 10hrs/week",
    },
    {
      icon: <ChartIcon />,
      title: "Advanced Analytics",
      description:
        "Deep insights into team productivity, project progress, and performance metrics with predictive analytics.",
      benefit: "Data-driven decisions",
    },
    {
      icon: <ShieldIcon />,
      title: "Enterprise Security",
      description:
        "SOC 2 compliant with end-to-end encryption, SAML SSO, and comprehensive audit logs.",
      benefit: "Bank-grade security",
    },
    {
      icon: <ZapIcon />,
      title: "AI-Powered Automation",
      description:
        "Machine learning algorithms that learn your patterns and automate repetitive tasks intelligently.",
      benefit: "Future-ready",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechFlow",
      content:
        "TaskFlow Pro transformed our team's productivity. The AI suggestions alone saved us 15 hours per week.",
      rating: 5,
      company: "TechFlow",
    },
    {
      name: "Michael Chen",
      role: "Project Manager at InnovateX",
      content:
        "Best task management tool we've ever used. The collaboration features are game-changing.",
      rating: 5,
      company: "InnovateX",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director at ScaleUp",
      content:
        "Seamless integration with our existing tools. Setup took 5 minutes, results were immediate.",
      rating: 5,
      company: "ScaleUp",
    },
  ];

  const integrations = [
    "Slack",
    "Microsoft Teams",
    "Google Workspace",
    "Zoom",
    "Salesforce",
    "Asana",
  ];

  const faqs = [
    {
      question: "How does the free plan work?",
      answer:
        "Our free plan includes up to 5 team members, 100 tasks per month, basic Kanban boards, and core features. No credit card required, forever free.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel anytime with one click. No long-term contracts, no cancellation fees. Your data remains accessible during the transition period.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use bank-grade encryption, SOC 2 compliance, and store data in secure cloud facilities. Your data is encrypted in transit and at rest.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! Free users get community support, paid plans include email support, and Enterprise customers get dedicated phone support with SLA guarantees.",
    },
    {
      question: "How easy is it to migrate from other tools?",
      answer:
        "Very easy! We provide one-click import from popular tools like Trello, Asana, Monday.com, and others. Our migration team helps Enterprise customers.",
    },
    {
      question: "Can I try premium features before upgrading?",
      answer:
        "Absolutely! All paid plans come with a 30-day free trial with full access to premium features. No credit card required to start.",
    },
  ];

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Navigation */}
        <nav className="glass-nav fixed top-4 left-4 right-4 z-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center glow">
                <TaskIcon />
              </div>
              <span className="text-xl font-bold text-gradient">
                TaskFlow Pro
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#features" className="nav-link">
                Features
              </Link>
              <Link href="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/login" className="hidden sm:block nav-link">
                Sign In
              </Link>
              <Link href="/signup" className="btn-primary">
                <span>Get Started Free</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="btn-Menu flex lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-white/10"
            >
              <div className="flex flex-col space-y-2">
                <Link href="#features" className="nav-link">
                  Features
                </Link>
                <Link href="/pricing" className="nav-link">
                  Pricing
                </Link>
                <Link href="/about" className="nav-link">
                  About
                </Link>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
                <Link href="/login" className="nav-link">
                  Sign In
                </Link>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="section-hero bg-animated-mesh">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Transform Your Team's
                  <span className="text-gradient block mt-2">Productivity</span>
                </motion.h1>

                <motion.p
                  className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Stop juggling scattered tasks across endless tools. TaskFlow
                  Pro unifies your workflow with AI-powered automation and
                  seamless collaboration.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link
                    href="/signup"
                    className="btn-primary text-lg px-8 py-4"
                  >
                    <span className="flex items-center gap-2">
                      Get Started Free <ArrowRightIcon />
                    </span>
                  </Link>

                  <button className="btn-glass text-lg px-8 py-4 flex items-center gap-2">
                    <PlayIcon />
                    Watch Demo
                  </button>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    Free forever plan
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon />
                    Setup in 60 seconds
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="glass-strong p-8 rounded-3xl animate-float">
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center glow animate-pulse-glow">
                        <TaskIcon />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Live Dashboard
                      </h3>
                      <p className="text-gray-400">
                        Real-time collaboration in action
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-animated-dots">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-12">
              <p className="text-gray-400 mb-8">
                Trusted by 10,000+ teams worldwide
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {[
                  "TechFlow",
                  "InnovateX",
                  "ScaleUp",
                  "FutureCorps",
                  "NextGen",
                  "CloudWorks",
                ].map((company, index) => (
                  <div
                    key={company}
                    className="text-2xl font-bold text-gray-500"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="text-center">
              <div className="glass-card max-w-2xl mx-auto">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="text-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  "TaskFlow Pro reduced our project delivery time by 40% and
                  eliminated the chaos of managing multiple tools."
                </blockquote>
                <cite className="text-gray-400">
                  - Sarah Johnson, CEO at TechFlow
                </cite>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Features Highlight */}
        <section id="features" className="py-20 bg-animated-particles">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">
                Everything You Need to
                <span className="text-gradient block">Stay Organized</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From simple task management to enterprise-grade workflow
                automation, we've got every aspect of team productivity covered.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.1}>
                  <div className="glass-card text-center group h-full">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center glow-blue group-hover:animate-pulse-glow">
                      {feature.icon}
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-sm font-medium text-purple-300">
                      {feature.benefit}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center">
              <Link href="/features" className="btn-secondary">
                <span className="flex items-center gap-2">
                  Explore All Features <ArrowRightIcon />
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Product Demo */}
        <section className="py-20 bg-animated-waves">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">
                See TaskFlow Pro in
                <span className="text-gradient"> Action</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of intelligent task management with our
                interactive demo
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-strong p-8 rounded-3xl max-w-5xl mx-auto">
                <div className="aspect-video bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <button className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6 mx-auto glow hover:scale-110 transition-transform">
                      <PlayIcon />
                    </button>
                    <h3 className="text-2xl font-semibold mb-2">
                      Interactive Product Demo
                    </h3>
                    <p className="text-gray-400 mb-6">
                      See how teams boost productivity by 300% with TaskFlow Pro
                    </p>
                    <div className="flex justify-center gap-4">
                      <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                        3 min watch
                      </span>
                      <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                        No signup required
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-animated-grid">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">
                Why Choose
                <span className="text-gradient"> TaskFlow Pro?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with cutting-edge technology and designed for the future
                of work
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Enterprise Secure",
                  description:
                    "Bank-grade encryption, SOC 2 compliance, and comprehensive audit trails",
                  icon: <ShieldIcon />,
                  color: "from-green-600 to-blue-600",
                },
                {
                  title: "Infinitely Scalable",
                  description:
                    "From 1 user to 10,000+ employees with consistent performance",
                  icon: <ZapIcon />,
                  color: "from-blue-600 to-purple-600",
                },
                {
                  title: "AI-Powered",
                  description:
                    "Machine learning that adapts to your workflow and predicts your needs",
                  icon: <TaskIcon />,
                  color: "from-purple-600 to-pink-600",
                },
                {
                  title: "Ridiculously Easy",
                  description:
                    "Setup in 60 seconds, master in 10 minutes, love it forever",
                  icon: <CheckIcon />,
                  color: "from-pink-600 to-orange-600",
                },
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="glass-card text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center glow`}
                    >
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20 bg-animated-gradient">
          <div className="container mx-auto px-6">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  name: "Free",
                  price: "$0",
                  period: "forever",
                  features: [
                    "5 team members",
                    "100 tasks/month",
                    "Basic Kanban",
                    "Email support",
                  ],
                },
                {
                  name: "Starter",
                  price: "$12",
                  period: "per user/month",
                  features: [
                    "30 team members",
                    "Unlimited tasks",
                    "Advanced features",
                    "Priority support",
                  ],
                  popular: true,
                },
                {
                  name: "Business",
                  price: "$29",
                  period: "per user/month",
                  features: [
                    "200 team members",
                    "Custom branding",
                    "Advanced analytics",
                    "Integrations",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "contact sales",
                  features: [
                    "Unlimited users",
                    "Custom integrations",
                    "Dedicated support",
                    "SLA guarantee",
                  ],
                },
              ].map((plan, index) => (
                <AnimatedSection key={plan.name} delay={index * 0.1}>
                  <div
                    className={`glass-card text-center relative ${
                      plan.popular ? "ring-2 ring-purple-500/50" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckIcon />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={
                        plan.popular ? "btn-primary w-full" : "btn-glass w-full"
                      }
                    >
                      {plan.name === "Enterprise"
                        ? "Contact Sales"
                        : "Start Free Trial"}
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center">
              <Link href="/pricing" className="btn-secondary">
                <span className="flex items-center gap-2">
                  See Full Pricing <ArrowRightIcon />
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-animated-mesh">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">
                Loved by Teams
                <span className="text-gradient"> Worldwide</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join 10,000+ teams who have transformed their productivity with
                TaskFlow Pro
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                  <div className="glass-card">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="text-yellow-500" />
                      ))}
                    </div>

                    <blockquote className="text-lg mb-6 italic">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                        <span className="text-sm font-bold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-animated-dots">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">
                Integrates with
                <span className="text-gradient"> Everything</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Connect TaskFlow Pro with your favorite tools and services
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {integrations.map((integration, index) => (
                    <div
                      key={integration}
                      className="text-center p-4 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                        <LinkIcon />
                      </div>
                      <div className="text-sm font-medium">{integration}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <p className="text-gray-400 mb-4">
                    And 200+ more integrations
                  </p>
                  <Link
                    href="/integrations"
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    View all integrations →
                  </Link>
                </div>
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
        <section className="py-20 bg-animated-waves">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="glass-strong p-12 rounded-3xl text-center max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                  Ready to Transform Your
                  <span className="text-gradient block">
                    {" "}
                    Team's Productivity?
                  </span>
                </h2>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of teams already using TaskFlow Pro to achieve
                  more together. Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link
                    href="/signup"
                    className="btn-primary text-xl px-12 py-4"
                  >
                    <span className="flex items-center gap-2">
                      Start Free Trial <ArrowRightIcon />
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="btn-glass text-xl px-10 py-4"
                  >
                    Contact Sales
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <CheckIcon />
                    30-day free trial
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckIcon />
                    No setup fees
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckIcon />
                    Cancel anytime
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 my-20">
          <div className="container mx-auto px-6 py-16">
            <div className="grid md:grid-cols-5 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center glow">
                    <TaskIcon />
                  </div>
                  <span className="text-xl font-bold text-gradient">
                    TaskFlow Pro
                  </span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  The most powerful task management platform for modern teams.
                  Transform your productivity with AI-powered automation.
                </p>

                {/* Social Media */}
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "GitHub", "Discord"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-20 h-10 m-2 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                      >
                        <span className="text-sm">{social}</span>
                      </a>
                    )
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <div className="space-y-3">
                  <Link
                    href="/features"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/integrations"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Integrations
                  </Link>
                  <Link
                    href="/changelog"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Changelog
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <div className="space-y-3">
                  <Link
                    href="/about"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/careers"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <div className="space-y-3">
                  <Link
                    href="/help"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/docs"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/status"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Status
                  </Link>
                  <Link
                    href="/security"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2024 TaskFlow Pro. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/cookies"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
