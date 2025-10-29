import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { Code2, MapPin, Briefcase, ArrowLeft } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function JobDetail() {
  const params = useParams<{ slug: string }>();
  const { data: job, isLoading } = trpc.jobs.getBySlug.useQuery({ slug: params.slug || "" });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">CodingCup Labs</span>
            </Link>
          </div>
        </nav>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">CodingCup Labs</span>
            </Link>
          </div>
        </nav>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600">Job not found</p>
        </div>
      </div>
    );
  }

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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <Link href="/careers" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </div>
      </div>

      {/* Job Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{job.title}</h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              {job.location}
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              {job.jobType}
            </div>
            <div className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              {job.department}
            </div>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
              <div className="prose prose-sm max-w-none mb-8">
                <p className="text-gray-600 whitespace-pre-wrap">{job.description}</p>
              </div>

              {job.requirements && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                  <div className="prose prose-sm max-w-none mb-8">
                    <p className="text-gray-600 whitespace-pre-wrap">{job.requirements}</p>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Info</h3>
                
                {job.salaryRange && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-2">Salary Range</p>
                    <p className="text-lg font-semibold text-gray-900">{job.salaryRange}</p>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Department</p>
                  <p className="text-lg font-semibold text-gray-900">{job.department}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Job Type</p>
                  <p className="text-lg font-semibold text-gray-900">{job.jobType}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Location</p>
                  <p className="text-lg font-semibold text-gray-900">{job.location}</p>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Interested in This Position?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Send us your resume and let's talk about how you can contribute to our team.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Apply Now
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
