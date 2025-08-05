import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Globe, Sparkles, Zap, Shield, Rocket, Eye, Cpu } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32 md:pt-24 md:pb-48">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              Genie 3: The Future of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                World Models
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:text-xl">
              Generate interactive environments from text prompts in real-time. Genie 3 by Google DeepMind 
              represents a breakthrough in AI world modeling, creating dynamic worlds at 24fps with unprecedented consistency.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-base px-8 py-6">
                Try Genie 3 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </section>

      {/* Product Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What is Genie 3?
            </h2>
            <p className="text-lg text-gray-600">
              Genie 3 is a general-purpose world model developed by Google DeepMind that transforms 
              text prompts into fully interactive, consistent environments. As a revolutionary advancement 
              in AI, it simulates physical properties, models ecosystems, and generates animated scenarios 
              that maintain coherence for several minutes at 720p resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powerful Features of Genie 3
            </h2>
            <p className="text-lg text-gray-600">
              Experience the cutting-edge capabilities that make Genie 3 a game-changer in AI world modeling
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Zap className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Real-time Generation</CardTitle>
                <CardDescription>
                  Generate interactive worlds at 24 frames per second with instant response to text prompts
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Globe className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>World Consistency</CardTitle>
                <CardDescription>
                  Maintain environmental coherence for several minutes with auto-regressive frame generation
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>720p Resolution</CardTitle>
                <CardDescription>
                  High-quality visual output at 720p resolution for detailed and immersive environments
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Brain className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Physics Simulation</CardTitle>
                <CardDescription>
                  Accurately model physical properties and natural laws within generated environments
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Eye className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Promptable Events</CardTitle>
                <CardDescription>
                  Dynamically modify environments with text prompts to create custom world events
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mb-3" />
                <CardTitle>Responsible AI</CardTitle>
                <CardDescription>
                  Developed with safety and ethics in mind, featuring controlled access and responsible deployment
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Applications of Genie 3
            </h2>
            <p className="text-lg text-gray-600">
              Unlock new possibilities across multiple domains with Genie 3's world modeling capabilities
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Cpu className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Agent Training & Simulation</h3>
                  <p className="text-gray-600">
                    Create diverse training environments for AI agents and autonomous systems to learn and adapt in controlled scenarios
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Rocket className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Robotics Development</h3>
                  <p className="text-gray-600">
                    Train robots and autonomous systems in simulated environments before real-world deployment
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Educational Environments</h3>
                  <p className="text-gray-600">
                    Generate interactive educational scenarios for immersive learning experiences across various subjects
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Creative Media Generation</h3>
                  <p className="text-gray-600">
                    Amplify human creativity by generating animated and fictional scenarios for entertainment and media
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience the Future of World Models
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Join the revolution in AI world modeling. Get early access to Genie 3 and start creating 
              interactive environments today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="text-base px-8 py-6">
                Request Access <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-white/10 text-white border-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Genie 3</h3>
              <p className="text-sm">
                Advanced world modeling technology by Google DeepMind
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Use Cases</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Research Paper</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Genie 3. All rights reserved. | Powered by Google DeepMind</p>
          </div>
        </div>
      </footer>
    </div>
  )
}