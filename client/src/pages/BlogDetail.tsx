import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { Code2, Calendar, User, ArrowLeft } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function BlogDetail() {
  const params = useParams<{ slug: string }>();
  const { data: post, isLoading } = trpc.blog.getBySlug.useQuery({ slug: params.slug || "" });

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
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
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
          <p className="text-gray-600">Blog post not found</p>
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
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 transition">Careers</Link>
            <Link href="/blogs" className="text-blue-600 font-semibold">Blogs</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <Link href="/blogs" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* Blog Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-6">
            {post.category && (
              <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                {post.category}
              </span>
            )}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          {post.imageUrl && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="w-full h-96 object-cover" />
            </div>
          )}

          <div className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {post.content}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">More from Our Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-lg transition">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-400"></div>
                <div className="p-6">
                  <div className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full w-fit mb-3">
                    Development
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Upcoming Blog Post</h3>
                  <p className="text-gray-600 mb-4">Check back soon for more insightful content.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with our team for more information about our services.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us
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
