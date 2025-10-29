import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code2 } from "lucide-react";

export default function PrivacyPolicy() {
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
            <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition">Blogs</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600">Last updated: October 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              CodingCup Labs ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide through forms.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and clicks.</li>
              <li><strong>Device Data:</strong> Information about your device, browser type, IP address, and operating system.</li>
              <li><strong>Cookies:</strong> Small files stored on your device to enhance your browsing experience.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect in the following ways:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries and customer service requests</li>
              <li>To send promotional communications (with your consent)</li>
              <li>To analyze website usage and trends</li>
              <li>To prevent fraudulent transactions and protect against security threats</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">8. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. You can request deletion of your data at any time by contacting us.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700"><strong>CodingCup Labs</strong></p>
              <p className="text-gray-600">Email: privacy@codingcuplabs.com</p>
              <p className="text-gray-600">Phone: +91 (080) 1234-5678</p>
              <p className="text-gray-600">Address: Tech Park, Bangalore, Karnataka, India 560001</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">12. Compliance</h2>
            <p className="text-gray-600">
              We comply with applicable data protection regulations, including but not limited to the General Data Protection Regulation (GDPR) and the Information Technology Act, 2000 (India).
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Questions About Your Privacy?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're here to help. Contact our privacy team for any concerns or requests.
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
