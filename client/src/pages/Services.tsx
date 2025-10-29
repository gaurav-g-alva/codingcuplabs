import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2, Cloud, Database, Lock, Zap, BarChart3, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">CodingCup Labs</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 transition">Careers</Link>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition">Blogs</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive SaaS solutions designed to streamline your development workflow and accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Code2,
                title: "Development Tools",
                desc: "Powerful IDE integration and code generation tools that accelerate your development process.",
                features: ["Real-time collaboration", "Advanced debugging", "Code templates"],
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                desc: "Scalable cloud solutions with automatic deployment and monitoring capabilities.",
                features: ["Auto-scaling", "Global CDN", "99.9% uptime"],
              },
              {
                icon: Database,
                title: "Database Management",
                desc: "Fully managed database services with automatic backups and disaster recovery.",
                features: ["Multi-region replication", "Automated backups", "Query optimization"],
              },
              {
                icon: Lock,
                title: "Security & Compliance",
                desc: "Enterprise-grade security with compliance certifications and audit trails.",
                features: ["SSL/TLS encryption", "GDPR compliant", "Regular audits"],
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                desc: "Tools to monitor, analyze, and optimize your application performance.",
                features: ["Real-time monitoring", "Performance analytics", "Bottleneck detection"],
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                desc: "Comprehensive analytics dashboard to track usage, performance, and user behavior.",
                features: ["Custom dashboards", "Real-time reports", "Predictive analytics"],
              },
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                desc: "Perfect for small projects",
                features: ["Up to 5 projects", "1GB storage", "Community support"],
              },
              {
                name: "Professional",
                price: "$99",
                desc: "For growing teams",
                features: ["Unlimited projects", "100GB storage", "Email support", "Advanced analytics"],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "For large organizations",
                features: ["Custom infrastructure", "Dedicated support", "SLA guarantee", "Custom integrations"],
              },
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 ${plan.highlighted ? "bg-blue-600 text-white border-2 border-blue-600 transform scale-105" : "bg-white border border-gray-200"}`}>
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                <div className={`text-4xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>{plan.price}</div>
                <p className={`mb-6 ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-blue-200" : "text-green-500"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.highlighted ? "bg-white text-blue-600 hover:bg-gray-100" : ""}`}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Development?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with a free trial and experience the power of CodingCup Labs.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">CodingCup Labs</h3>
              <p className="text-sm">Building innovative SaaS solutions since 2022.</p>
              <p className="text-sm mt-2">Bangalore, India</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/blogs" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 CodingCup Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
