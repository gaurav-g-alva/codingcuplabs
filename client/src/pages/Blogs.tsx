import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2, Calendar, User, ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Blogs() {
  const { data: blogs, isLoading } = trpc.blog.list.useQuery();

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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Insights, tips, and stories from our team about development, SaaS, and technology trends.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading blog posts...</p>
            </div>
          ) : blogs && blogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post) => (
                <Link key={post.id} href={`/blogs/${post.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-lg transition cursor-pointer h-full flex flex-col">
                    {post.imageUrl && (
                      <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-400 overflow-hidden">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      {post.category && (
                        <div className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full w-fit mb-3">
                          {post.category}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt || post.content}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
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
