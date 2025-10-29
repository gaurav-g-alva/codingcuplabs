import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2, Users, Award, Globe } from "lucide-react";

export default function About() {
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
            <Link href="/about" className="text-blue-600 font-semibold">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 transition">Careers</Link>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition">Blogs</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About CodingCup Labs</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We're a team of passionate developers and innovators dedicated to building world-class SaaS solutions that empower businesses to scale faster.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2022, CodingCup Labs emerged from a vision to revolutionize how developers build and deploy applications. What started as a small team in Bangalore has grown into a thriving company serving clients across the globe.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our journey has been fueled by a commitment to excellence, continuous innovation, and a deep understanding of developer needs. We believe that great tools can transform the way people work.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be trusted by thousands of developers and companies who rely on our platform to build, scale, and innovate with confidence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">2022</div>
                <p className="text-xl text-gray-700">Founded in Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower developers and businesses with innovative SaaS solutions that simplify complex workflows, accelerate development cycles, and unlock new possibilities for growth and innovation.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Innovation:</strong> We constantly push boundaries</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Quality:</strong> Excellence in everything we do</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Integrity:</strong> Honest and transparent</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Community:</strong> Supporting our users</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Active Users" },
              { number: "50+", label: "Enterprise Clients" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're a diverse team of talented engineers, designers, and product specialists united by a passion for building exceptional software.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "CEO & Founder" },
              { name: "Priya Sharma", role: "CTO" },
              { name: "Amit Patel", role: "Head of Product" },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team.
          </p>
          <Link href="/careers">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Explore Careers
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
