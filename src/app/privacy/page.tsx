"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute left-0 top-20 w-[600px] h-32 bg-[#1F3A6D] rounded-r-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#5A6270] leading-tight mb-6">
              Privacy, Cookies & <span className="text-[#1F3A6D]">GDPR</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5A6270] max-w-3xl mx-auto leading-relaxed">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="prose prose-lg max-w-none space-y-12">
              {/* Privacy Policy */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h3>
                    <p>
                      Kabalega Society Foundation (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Foundation&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h3>
                    <p>We may collect information about you in the following ways:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>Information you voluntarily provide through forms (name, email, phone, donation details)</li>
                      <li>Automatically collected information (IP address, browser type, pages visited)</li>
                      <li>Information from cookies and similar tracking technologies</li>
                      <li>Information from third-party sources (payment processors, social media)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Use of Your Information</h3>
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>Process donations and provide receipts</li>
                      <li>Send newsletters and updates (only with your consent)</li>
                      <li>Respond to inquiries and provide customer support</li>
                      <li>Analyze website usage and improve user experience</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Cookies & Tracking Technologies</h3>
                    <p>
                      We use cookies and similar tracking technologies to enhance your browsing experience and analyze site usage. Cookies are small files stored on your device that help us remember your preferences and understand how you use our website.
                    </p>
                    <p className="mt-3">
                      <strong>Types of Cookies We Use:</strong>
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors use the site</li>
                      <li><strong>Preference Cookies:</strong> Remember your choices and settings</li>
                      <li><strong>Marketing Cookies:</strong> Track your interests for personalized content</li>
                    </ul>
                  </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Data Sharing</h3>
                    <p>
                      We do not sell your personal information. We may share your information with:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>Payment processors to process donations</li>
                      <li>Email service providers to send communications</li>
                      <li>Legal authorities when required by law</li>
                      <li>Our partners and affiliates working on our behalf</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights Under GDPR</h3>
                    <p>
                      If you are located in the European Union, you have the following rights under the General Data Protection Regulation (GDPR):
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                      <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
                      <li><strong>Right to Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
                      <li><strong>Right to Restrict Processing:</strong> Limit how your data is used</li>
                      <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                      <li><strong>Right to Object:</strong> Opt-out of marketing communications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Data Retention</h3>
                    <p>
                      We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You can request deletion of your data at any time by contacting us.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Security</h3>
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Third-Party Links</h3>
                    <p>
                      Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We encourage you to review their privacy policies before providing any personal information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Children's Privacy</h3>
                    <p>
                      Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child under 13, we will promptly delete such information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Contact Us</h3>
                    <p>
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p><strong>Email:</strong> info@kabalegafoundation.org</p>
                      <p><strong>Phone:</strong> +256 700 000 000</p>
                      <p><strong>Address:</strong> Hoima City, Bunyoro Region, Western Uganda</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">12. Policy Updates</h3>
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date below.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg text-sm text-gray-600">
                  <p><strong>Last Updated:</strong> April 2026</p>
                </div>
              </div>

              {/* Cookie Settings Link */}
              <div className="border-t pt-12">
                <p className="text-gray-700">
                  You can manage your cookie preferences at any time. To adjust your settings,{" "}
                  <button
                    onClick={() => {
                      localStorage.removeItem("cookieConsent");
                      window.location.reload();
                    }}
                    className="text-[#1F3A6D] hover:text-[#162D56] font-semibold underline"
                  >
                    click here
                  </button>
                  {" "}to update your cookie preferences.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
