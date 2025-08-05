import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: 'Terms of Service - Genie 3 | AI World Model',
  description: 'Terms of Service for Genie 3. Understand your rights and responsibilities when using our AI world modeling platform.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2025<br />
            <strong>Last Updated:</strong> January 1, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using Genie 3 services ("Services"), you agree to be bound by these Terms of Service 
              ("Terms"). If you do not agree to these Terms, you may not use our Services. These Terms constitute 
              a legally binding agreement between you and Genie 3 ("Company," "we," "our," or "us").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
            <p className="text-gray-600 mb-4">
              Genie 3 is an AI-powered world modeling platform that generates interactive environments from text 
              prompts. Our Services include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Real-time generation of interactive environments</li>
              <li>API access for developers and researchers</li>
              <li>Documentation and support resources</li>
              <li>Related tools and features as we may provide</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Account Registration</h3>
            <p className="text-gray-600 mb-4">
              To access certain features, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly notify us of any unauthorized use</li>
              <li>Be responsible for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3.2 Eligibility</h3>
            <p className="text-gray-600 mb-4">
              You must be at least 13 years old to use our Services. By using Genie 3, you represent that you 
              meet this age requirement and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>
            <p className="text-gray-600 mb-4">You agree not to use Genie 3 to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Generate illegal, harmful, or offensive content</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Create misleading or deceptive content</li>
              <li>Attempt to reverse engineer or compromise our systems</li>
              <li>Use automated systems to access Services without permission</li>
              <li>Interfere with or disrupt the Services</li>
              <li>Generate content that depicts real individuals without consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <h3 className="text-xl font-semibold mb-3">5.1 Our Intellectual Property</h3>
            <p className="text-gray-600 mb-4">
              Genie 3 and its underlying technology, including all intellectual property rights, are owned by 
              Google DeepMind. You may not copy, modify, or create derivative works without express permission.
            </p>

            <h3 className="text-xl font-semibold mb-3">5.2 User Content</h3>
            <p className="text-gray-600 mb-4">
              You retain ownership of text prompts you submit. However, you grant us a worldwide, non-exclusive 
              license to use your prompts to provide and improve our Services. Generated environments may be 
              used for research and development purposes.
            </p>

            <h3 className="text-xl font-semibold mb-3">5.3 Generated Content</h3>
            <p className="text-gray-600 mb-4">
              Subject to compliance with these Terms, you may use generated environments for lawful purposes. 
              We make no claims of ownership to environments you generate, but reserve the right to monitor 
              and remove content that violates these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Privacy and Data Protection</h2>
            <p className="text-gray-600 mb-4">
              Your use of our Services is subject to our Privacy Policy, which is incorporated by reference 
              into these Terms. By using Genie 3, you consent to our data practices as described in the 
              Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimers and Limitations</h2>
            <h3 className="text-xl font-semibold mb-3">7.1 Service Availability</h3>
            <p className="text-gray-600 mb-4">
              We strive to maintain reliable Services but cannot guarantee uninterrupted availability. 
              Services are provided "as is" and "as available" without warranties of any kind.
            </p>

            <h3 className="text-xl font-semibold mb-3">7.2 Content Accuracy</h3>
            <p className="text-gray-600 mb-4">
              Generated environments are AI-created and may not accurately represent real-world locations, 
              physics, or phenomena. Users should not rely on generated content for critical decisions.
            </p>

            <h3 className="text-xl font-semibold mb-3">7.3 Limitation of Liability</h3>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages arising from your use of the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
            <p className="text-gray-600 mb-4">
              You agree to indemnify and hold harmless Genie 3, Google DeepMind, and their affiliates from 
              any claims, damages, or expenses arising from your use of the Services or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to suspend or terminate your access to the Services at any time for 
              violation of these Terms or for any other reason. You may terminate your account at any time 
              by contacting support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Modifications to Terms</h2>
            <p className="text-gray-600 mb-4">
              We may modify these Terms at any time. Continued use of the Services after changes constitutes 
              acceptance of the modified Terms. We will notify users of material changes via email or 
              through the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These Terms are governed by the laws of California, United States, without regard to conflict 
              of law principles. Any disputes shall be resolved in the courts of Santa Clara County, California.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: legal@genie3.vip<br />
              Address: Genie 3 Legal Team<br />
              Google DeepMind<br />
              Mountain View, CA 94043<br />
              United States
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
            <p className="text-gray-600 mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall 
              continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Entire Agreement</h2>
            <p className="text-gray-600 mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you 
              and Genie 3 regarding the use of our Services.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}