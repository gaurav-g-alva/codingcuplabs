import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Careers() {
  const { data: jobs, isLoading } = trpc.jobs.list.useQuery();

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
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link href="/careers" className="text-blue-600 font-semibold">Careers</Link>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition">Blogs</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We're looking for talented individuals who are passionate about technology and innovation. Help us build the future of SaaS.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Join CodingCup Labs?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovative Culture", desc: "Work on cutting-edge projects with the latest technologies" },
              { title: "Growth Opportunities", desc: "Continuous learning and career development programs" },
              { title: "Competitive Benefits", desc: "Competitive salary, health insurance, and flexible work" },
              { title: "Remote Friendly", desc: "Work from anywhere with flexible working arrangements" },
              { title: "Collaborative Team", desc: "Work with talented and passionate professionals" },
              { title: "Impact", desc: "Your work directly impacts thousands of users globally" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading positions...</p>
            </div>
          ) : jobs && jobs.length > 0 ? (
            <div className="space-y-6">
              {jobs.map((job) => (
                <Link key={job.id} href={`/careers/${job.slug}`}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.jobType}
                          </div>
                          <div className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                            {job.department}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-gray-600 line-clamp-2">{job.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No open positions at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", desc: "Submit your application and resume" },
              { step: "2", title: "Review", desc: "We review your qualifications" },
              { step: "3", title: "Interview", desc: "Technical and cultural fit interviews" },
              { step: "4", title: "Offer", desc: "Receive and accept our offer" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Apply now and join a team of innovators building the future of SaaS.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get in Touch
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
