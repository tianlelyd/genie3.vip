import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: 'Privacy Policy - Genie 3 | AI World Model',
  description: 'Privacy Policy for Genie 3. Learn how we collect, use, and protect your data when using our AI world modeling technology.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Genie 3 ("we," "our," or "us"). We are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you use our AI world modeling services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Account information (name, email address, organization)</li>
              <li>Text prompts and inputs for world generation</li>
              <li>Feedback and correspondence</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Usage data and interaction patterns</li>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Performance metrics and error logs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide and improve Genie 3 services</li>
              <li>Process and generate interactive environments</li>
              <li>Enhance model performance and accuracy</li>
              <li>Communicate with you about services and updates</li>
              <li>Ensure safety and prevent misuse</li>
              <li>Comply with legal obligations</li>
              <li>Conduct research and development</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Service providers who assist in our operations</li>
              <li>Research partners under strict confidentiality agreements</li>
              <li>Legal authorities when required by law</li>
              <li>Affiliated entities within Google DeepMind</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and authentication systems</li>
              <li>Secure data centers with physical security</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your information for as long as necessary to provide services and comply with legal 
              obligations. Generated environments and associated data may be retained for research purposes 
              in anonymized form.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to certain processing activities</li>
              <li>Export your data in a portable format</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Genie 3 is not intended for users under 13 years of age. We do not knowingly collect 
              personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="text-gray-600 mb-4">
              Your information may be transferred and processed in countries other than your own. 
              We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy periodically. We will notify you of significant changes 
              through our services or via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: privacy@genie3.vip<br />
              Address: Genie 3 Privacy Team<br />
              Google DeepMind<br />
              Mountain View, CA 94043
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}