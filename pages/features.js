import React, { useState } from "react";
import {
  CheckSquare,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Shield,
  Zap,
  Brain,
  Target,
  Workflow,
  Database,
  Globe,
  ArrowRight,
  Play,
  Star,
  Eye,
  Sparkles,
  Trophy,
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/sectionAnimation";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("task-management");
  const [activeUseCase, setActiveUseCase] = useState("individuals");

  const featureHighlights = [
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Smart Task Management",
      description:
        "Create, organize, and track tasks with AI-powered suggestions and automated workflows.",
      color: "text-primary",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-blue-500/20",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Co-Pilot Assistant",
      description:
        "Natural language processing turns your thoughts into organized tasks and smart recommendations.",
      color: "text-secondary",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Advanced Collaboration",
      description:
        "Role-based permissions, real-time chat, and seamless team coordination across all projects.",
      color: "text-accent",
      bgColor: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description:
        "Comprehensive dashboards with productivity metrics, progress tracking, and performance analytics.",
      color: "text-success",
      bgColor: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Custom Workflows",
      description:
        "Build approval processes, automation rules, and custom business logic for your organization.",
      color: "text-warning",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Enterprise Integrations",
      description:
        "Connect with 100+ tools including Slack, Google Workspace, Microsoft 365, and custom APIs.",
      color: "text-purple-400",
      bgColor: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    },
  ];

  const featureTabs = {
    "task-management": {
      title: "Task Management",
      icon: <CheckSquare className="w-5 h-5" />,
      features: [
        "Create, edit, delete tasks with rich descriptions",
        "Subtasks for breaking down complex projects",
        "Priority levels: Urgent, High, Medium, Low",
        "Status tracking: To Do, In Progress, On Hold, Done",
        "Recurring tasks with smart scheduling",
        "Task dependencies and prerequisite management",
        "Custom categories and color-coded labels",
        "Bulk actions for efficient task management",
      ],
    },
    calendar: {
      title: "Calendar & Scheduling",
      icon: <Calendar className="w-5 h-5" />,
      features: [
        "Due dates and deadline management",
        "Start dates for project planning",
        "Multiple calendar views: daily, weekly, monthly",
        "Google Calendar & Outlook synchronization",
        "Smart reminders and notifications",
        "Time blocking for focused work sessions",
        "Drag-and-drop scheduling",
        "Calendar sharing and team coordination",
      ],
    },
    collaboration: {
      title: "Team Collaboration",
      icon: <MessageSquare className="w-5 h-5" />,
      features: [
        "Real-time task comments and discussions",
        "@mentions for team communication",
        "File attachments: PDFs, images, documents, videos",
        "Shared Kanban boards with live updates",
        "Slack, Teams, WhatsApp integration",
        "Activity logs and change tracking",
        "Team workspaces and project sharing",
        "Client collaboration with restricted access",
      ],
    },
    ai: {
      title: "AI Features",
      icon: <Brain className="w-5 h-5" />,
      features: [
        "Smart task prioritization based on deadlines",
        "AI-powered task title improvements",
        "Natural language task creation",
        "Intelligent task assignment suggestions",
        "Auto-generated task summaries",
        "Meeting notes to task conversion",
        "Resource allocation optimization",
        "Predictive project timeline estimation",
      ],
    },
    reports: {
      title: "Analytics & Reports",
      icon: <BarChart3 className="w-5 h-5" />,
      features: [
        "Task progress percentage tracking",
        "Project completion analytics",
        "Overdue task identification and alerts",
        "Employee productivity scoring",
        "Custom reports by team, project, or role",
        "Interactive charts: bar, pie, line graphs",
        "Performance trend analysis",
        "Export reports in CSV, PDF formats",
      ],
    },
    integrations: {
      title: "Integrations",
      icon: <Globe className="w-5 h-5" />,
      features: [
        "Google Workspace: Docs, Sheets, Drive, Calendar",
        "Microsoft 365: Office, OneDrive, Teams",
        "Communication: Slack, Teams, WhatsApp, Telegram",
        "File storage: Dropbox, Google Drive, OneDrive",
        "Project tools: Jira, Trello, Notion, Asana",
        "Finance: QuickBooks, Zoho Books, PayPal",
        "Custom API access and webhooks",
        "Single Sign-On (SSO) with major providers",
      ],
    },
  };

  const useCases = {
    individuals: {
      title: "For Individuals",
      icon: <Target className="w-6 h-6" />,
      description: "Perfect for personal productivity and goal achievement",
      features: [
        "Personal task management with AI suggestions",
        "Goal tracking and habit formation",
        "Calendar integration for life planning",
        "Mobile app for on-the-go productivity",
        "Offline mode for uninterrupted work",
        "Personal analytics and insights",
      ],
      stats: { users: "50K+", tasks: "2M+", rating: "4.8" },
    },
    teams: {
      title: "For Teams",
      icon: <Users className="w-6 h-6" />,
      description: "Streamline collaboration and boost team performance",
      features: [
        "Role-based access control and permissions",
        "Team workspaces and project collaboration",
        "Real-time communication and file sharing",
        "Team performance analytics",
        "Custom workflows and approval processes",
        "Integration with team communication tools",
      ],
      stats: { users: "15K+", tasks: "8M+", rating: "4.9" },
    },
    enterprises: {
      title: "For Enterprises",
      icon: <Database className="w-6 h-6" />,
      description: "Scale operations with enterprise-grade features",
      features: [
        "Multi-tenant architecture for multiple organizations",
        "Advanced security with SSO and audit logs",
        "Custom branding and white-label options",
        "Dedicated account management and support",
        "API access for custom integrations",
        "Compliance with industry standards (GDPR, SOC2)",
      ],
      stats: { users: "500+", tasks: "20M+", rating: "4.9" },
    },
  };

  const competitors = [
    {
      name: "Our Platform",
      aiFeatures: true,
      unlimitedWorkspaces: true,
      customBranding: true,
      apiAccess: true,
      advancedAnalytics: true,
      price: "From $12/user",
      highlight: true,
    },
    {
      name: "Trello",
      aiFeatures: false,
      unlimitedWorkspaces: false,
      customBranding: false,
      apiAccess: true,
      advancedAnalytics: false,
      price: "From $5/user",
      highlight: false,
    },
    {
      name: "Asana",
      aiFeatures: false,
      unlimitedWorkspaces: false,
      customBranding: true,
      apiAccess: true,
      advancedAnalytics: true,
      price: "From $10.99/user",
      highlight: false,
    },
    {
      name: "Todoist",
      aiFeatures: false,
      unlimitedWorkspaces: false,
      customBranding: false,
      apiAccess: false,
      advancedAnalytics: false,
      price: "From $4/user",
      highlight: false,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp",
      text: "The AI features have revolutionized how our team manages projects. Task prioritization is now effortless.",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "CEO",
      company: "StartupXYZ",
      text: "Custom workflows and analytics help us scale efficiently. The ROI has been incredible.",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      role: "Team Lead",
      company: "Growth Inc",
      text: "Integration with our existing tools was seamless. Our productivity increased by 40% in the first month.",
      avatar: "👩‍💻",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen bg-animated-mesh relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-animated-dots opacity-20"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float blur-xl"></div>
        <div
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-secondary rounded-full opacity-15 animate-float blur-lg"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-3 glass-nav px-6 py-3 mb-8 hover:scale-105 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-bold text-gradient">
                  🚀 Advanced Features
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Organization &{" "}
                <span className="text-gradient relative">
                  Automation
                  <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl animate-pulse rounded-full"></div>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Level up your team's productivity with AI-powered task
                management and seamless collaboration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn-primary group">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-glass group">
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  See Pricing
                </button>
              </div>

              <p className="text-sm text-muted-foreground">
                🔒 No setup fees • ⚡ 5min onboarding • 🎯 Cancel anytime
              </p>
            </div>

            {/* Right Side - Feature Preview */}
            <div className="animate-slide-in-right">
              <div className="glass-strong p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass p-4 rounded-2xl text-center hover:scale-105 transition-all">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">AI-Powered</div>
                  </div>
                  <div className="glass p-4 rounded-2xl text-center hover:scale-105 transition-all">
                    <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-sm font-semibold">Team Ready</div>
                  </div>
                  <div className="glass p-4 rounded-2xl text-center hover:scale-105 transition-all">
                    <Shield className="w-8 h-8 text-success mx-auto mb-2" />
                    <div className="text-sm font-semibold">Enterprise</div>
                  </div>
                  <div className="glass p-4 rounded-2xl text-center hover:scale-105 transition-all">
                    <Globe className="w-8 h-8 text-warning mx-auto mb-2" />
                    <div className="text-sm font-semibold">
                      100+ Integrations
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    500K+ Tasks
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Completed this month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section bg-animated-waves">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful Features for{" "}
                <span className="text-gradient">Every Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From AI-powered automation to enterprise-grade security,
                discover the tools that will transform your workflow.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureHighlights.map((feature, index) => (
                <div
                  key={index}
                  className={`glass-card group hover:scale-105  transition-all duration-500 animate-slide-up ${feature.bgColor}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`${feature.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Features - Tabbed */}
      <section className="section bg-animated-particles">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Explore{" "}
                <span className="text-gradient-secondary">Every Detail</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Dive deep into the features that make our platform the best
                choice for your team.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="glass-strong rounded-3xl p-8">
              {/* Tab Navigation */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {Object.entries(featureTabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`glass-card p-4 text-center transition-all duration-300 ${
                      activeTab === key
                        ? "ring-2 ring-primary glow scale-105"
                        : "hover:scale-105"
                    }`}
                  >
                    <div
                      className={`${
                        activeTab === key
                          ? "text-primary"
                          : "text-muted-foreground"
                      } mb-2`}
                    >
                      {tab.icon}
                    </div>
                    <div className="text-sm font-semibold">{tab.title}</div>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="animate-slide-up">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  {featureTabs[activeTab].icon}
                  {featureTabs[activeTab].title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featureTabs[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckSquare className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-animated-grid">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-gradient">Our Platform?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                See how we compare to other popular task management tools.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mb-16">
            <div className="glass-strong rounded-3xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="text-left py-4 px-4 font-semibold">
                      Platform
                    </th>
                    <th className="text-center py-4 px-4 font-semibold">
                      AI Features
                    </th>
                    <th className="text-center py-4 px-4 font-semibold">
                      Unlimited Workspaces
                    </th>
                    <th className="text-center py-4 px-4 font-semibold">
                      Custom Branding
                    </th>
                    <th className="text-center py-4 px-4 font-semibold">
                      API Access
                    </th>
                    <th className="text-center py-4 px-4 font-semibold">
                      Advanced Analytics
                    </th>
                    <th className="text-center py-4 px-4 font-semibold">
                      Starting Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((competitor, index) => (
                    <tr
                      key={index}
                      className={`border-b border-glass-border/50 hover:bg-glass transition-colors ${
                        competitor.highlight ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      <td className="py-4 px-4 font-semibold">
                        {competitor.highlight && (
                          <Star className="w-4 h-4 text-primary inline mr-2" />
                        )}
                        {competitor.name}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {competitor.aiFeatures ? (
                          <CheckSquare className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <div className="w-5 h-5 bg-error/20 rounded mx-auto"></div>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {competitor.unlimitedWorkspaces ? (
                          <CheckSquare className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <div className="w-5 h-5 bg-error/20 rounded mx-auto"></div>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {competitor.customBranding ? (
                          <CheckSquare className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <div className="w-5 h-5 bg-error/20 rounded mx-auto"></div>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {competitor.apiAccess ? (
                          <CheckSquare className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <div className="w-5 h-5 bg-error/20 rounded mx-auto"></div>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {competitor.advancedAnalytics ? (
                          <CheckSquare className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <div className="w-5 h-5 bg-error/20 rounded mx-auto"></div>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center font-semibold">
                        {competitor.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-animated-gradient">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for{" "}
                <span className="text-gradient-secondary">Every Use Case</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Whether you're flying solo or managing enterprise teams, we've
                got you covered.
              </p>
            </div>
          </AnimatedSection>
          {/* Use Case Selector */}
          <AnimatedSection className="text-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(useCases).map(([key, useCase]) => (
                <button
                  key={key}
                  onClick={() => setActiveUseCase(key)}
                  className={`glass-nav flex items-center gap-3 px-6 py-4 transition-all duration-300 ${
                    activeUseCase === key
                      ? "ring-2 ring-primary glow scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  <div
                    className={
                      activeUseCase === key
                        ? "text-primary"
                        : "text-muted-foreground"
                    }
                  >
                    {useCase.icon}
                  </div>
                  <span className="font-semibold">{useCase.title}</span>
                </button>
              ))}
            </div>

            {/* Active Use Case Content */}
            <AnimatedSection className="text-center mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-in-left">
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    {useCases[activeUseCase].icon}
                    {useCases[activeUseCase].title}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    {useCases[activeUseCase].description}
                  </p>

                  <div className="space-y-4">
                    {useCases[activeUseCase].features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckSquare className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="animate-slide-in-right">
                  <div className="glass-strong p-8 rounded-3xl">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-success mb-2">
                          {useCases[activeUseCase].stats.users}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Active Users
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">
                          {useCases[activeUseCase].stats.tasks}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Tasks Managed
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-warning mb-2 flex items-center justify-center gap-1">
                          {useCases[activeUseCase].stats.rating}
                          <Star className="w-6 h-6 fill-current" />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          User Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-animated-mesh">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Our <span className="text-gradient">Users Say</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Real feedback from teams who've transformed their productivity.
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
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-warning fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-animated-waves">
        <AnimatedSection className="text-center mb-16">
          <div className="container">
            <div className="glass-strong text-center p-16 rounded-3xl">
              <Zap className="w-16 h-16 text-primary mx-auto mb-8 animate-pulse-glow" />
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Start Managing{" "}
                <span className="text-gradient">Smarter Today</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of teams who've already transformed their
                productivity with our advanced features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-primary text-lg px-8 py-4 glow group">
                  <Trophy className="w-5 h-5 group-hover:animate-bounce" />
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-glass text-lg px-8 py-4 group">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Schedule Demo
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                🎯 14-day free trial • 🚀 No credit card required • ⚡ Setup in
                minutes
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
