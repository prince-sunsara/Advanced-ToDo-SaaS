import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  Zap,
  Heart,
  Award,
  TrendingUp,
  Globe,
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Brain,
  Shield,
  Clock,
  Rocket,
  Trophy,
  Building,
  Code,
  Coffee,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/sectionAnimation";

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      number: "50K+",
      label: "Happy Users",
      icon: <Users className="w-8 h-8" />,
      color: "text-primary",
    },
    {
      number: "2M+",
      label: "Tasks Completed",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "text-success",
    },
    {
      number: "99.9%",
      label: "Uptime",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-secondary",
    },
    {
      number: "150+",
      label: "Countries",
      icon: <Globe className="w-8 h-8" />,
      color: "text-warning",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We push the boundaries of what task management can be, integrating cutting-edge AI and automation.",
      icon: <Lightbulb className="w-12 h-12" />,
      color: "from-purple-500 to-blue-500",
    },
    {
      title: "User-Centric Design",
      description:
        "Every feature is crafted with real user needs in mind, ensuring intuitive and delightful experiences.",
      icon: <Heart className="w-12 h-12" />,
      color: "from-pink-500 to-red-500",
    },
    {
      title: "Reliability & Security",
      description:
        "Enterprise-grade security and 99.9% uptime ensure your data is always safe and accessible.",
      icon: <Shield className="w-12 h-12" />,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Continuous Growth",
      description:
        "We never stop improving, constantly adding new features and refining existing ones.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "Former Google PM with 10+ years in productivity tools",
      avatar: "👨‍💼",
      speciality: "Product Vision",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Ex-Microsoft engineer, AI and scalability expert",
      avatar: "👩‍💻",
      speciality: "Technical Leadership",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Design",
      bio: "Award-winning UX designer from Apple",
      avatar: "👨‍🎨",
      speciality: "User Experience",
    },
    {
      name: "Lisa Wang",
      role: "VP of Engineering",
      bio: "Full-stack architect with enterprise experience",
      avatar: "👩‍🔬",
      speciality: "Engineering Excellence",
    },
  ];

  const milestones = [
    {
      year: "2021",
      event: "Company Founded",
      description: "Started with a vision to revolutionize task management",
    },
    {
      year: "2022",
      event: "10K Users",
      description: "Reached our first major user milestone",
    },
    {
      year: "2023",
      event: "AI Integration",
      description: "Launched our revolutionary AI co-pilot feature",
    },
    {
      year: "2024",
      event: "Series A Funding",
      description: "Raised $15M to accelerate growth and innovation",
    },
    {
      year: "2025",
      event: "Global Expansion",
      description: "Serving users in 150+ countries worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen bg-animated-mesh relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-animated-dots opacity-20 pointer-events-none"></div>
        <div
          className="absolute top-20 right-10 w-40 h-40 bg-gradient-primary rounded-full opacity-10 animate-float blur-xl pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-secondary rounded-full opacity-8 animate-float blur-lg pointer-events-none"
          style={{
            animationDelay: "2s",
            transform: `translateY(${scrollY * -0.2}px)`,
          }}
        ></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-3 glass-nav px-6 py-3 mb-8 hover:scale-105 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-bold text-gradient">
                  Curious to know us?
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                Empower &{" "}
                <span className="text-gradient relative">
                  Achieve More
                  <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl animate-pulse rounded-full"></div>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our mission is to empower organizations to scale their
                productivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn-primary group">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Our Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-glass group">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Meet Our Team
                </button>
              </div>

              <p className="text-sm text-muted-foreground">
                Founded in 2021 • Serving 50K+ users • 150+ countries
              </p>
            </div>

            {/* Right Side - Animated Stats */}
            <div className="animate-slide-in-right">
              <div className="glass-strong p-8 rounded-3xl relative">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="glass p-6 rounded-2xl text-center hover:scale-110 transition-all duration-500 group"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`${stat.color} mx-auto mb-3 group-hover:animate-bounce`}
                      >
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full hover:scale-105 transition-all">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">
                      Growing every day
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-animated-waves">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Mission & Vision</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe productivity should be effortless, collaboration
                should be seamless, and growth should be unlimited.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass-card animate-slide-in-left group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 glass rounded-2xl">
                    <Target
                      className="w-8 h-8 text-primary group-hover:animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  To democratize productivity by creating intelligent, intuitive
                  tools that help teams of all sizes organize their work,
                  automate repetitive tasks, and focus on what truly matters.
                  We're building the future where technology amplifies human
                  potential.
                </p>
              </div>

              <div className="glass-card animate-slide-in-right group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 glass rounded-2xl">
                    <Rocket className="w-8 h-8 text-secondary group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A world where every team, regardless of size or industry, has
                  access to enterprise-grade productivity tools powered by AI.
                  We envision workplaces where manual task management is
                  obsolete, and teams can focus entirely on innovation and
                  creativity.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-animated-particles">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Core <span className="text-gradient-secondary">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do and every decision we
                make.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`glass-card cursor-pointer transition-all duration-500 ${
                    activeValue === index
                      ? "ring-2 ring-primary glow scale-105"
                      : "hover:scale-102"
                  }`}
                  onClick={() => setActiveValue(index)}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white flex-shrink-0`}
                    >
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-animated-grid">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-gradient">Amazing Team</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The brilliant minds behind TaskFlow Pro, working tirelessly to
                revolutionize productivity.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="glass-card text-center group hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-8xl mb-6 group-hover:animate-bounce">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs">
                    <Star className="w-3 h-3 text-warning" />
                    <span>{member.speciality}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Journey/Timeline */}
      <section className="section bg-animated-gradient">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient-secondary">Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                From a simple idea to serving teams worldwide - here's how we've
                grown.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection className="text-center mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full opacity-30"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } animate-slide-up`}
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="glass-card hover:scale-105 transition-all duration-300">
                        <div className="text-3xl font-bold text-gradient mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                          {milestone.event}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-background animate-pulse"></div>
                    </div>

                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture & Life */}
      <section className="section bg-animated-mesh">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Life at <span className="text-gradient">TaskFlow Pro</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We foster a culture of innovation, collaboration, and continuous
                learning.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card text-center animate-slide-up group">
                <Coffee className="w-16 h-16 text-warning mx-auto mb-6 group-hover:animate-bounce" />
                <h3 className="text-xl font-bold mb-4">Remote-First Culture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Work from anywhere in the world. We believe great work happens
                  when people are comfortable and inspired.
                </p>
              </div>

              <div
                className="glass-card text-center animate-slide-up group"
                style={{ animationDelay: "200ms" }}
              >
                <Brain className="w-16 h-16 text-primary mx-auto mb-6 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We invest in our team's growth with learning stipends,
                  conferences, and skill development programs.
                </p>
              </div>

              <div
                className="glass-card text-center animate-slide-up group"
                style={{ animationDelay: "400ms" }}
              >
                <Trophy
                  className="w-16 h-16 text-success mx-auto mb-6 group-hover:animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <h3 className="text-xl font-bold mb-4">Recognition & Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every team member's contribution matters. We celebrate wins
                  together and learn from challenges.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-animated-waves">
        <AnimatedSection className="text-center mb-16">
          <div className="container">
            <div className="glass-strong text-center p-16 rounded-3xl">
              <Building className="w-16 h-16 text-primary mx-auto mb-8 animate-float" />
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're looking to transform your team's productivity or
                join our growing company, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-primary text-lg px-8 py-4 glow group">
                  <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-glass text-lg px-8 py-4 group">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Join Our Team
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Ready to be part of something bigger? Let's build the future of
                productivity together.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
