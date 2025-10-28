import Link from "next/link";
import GitHubButton from "@/components/GitHubButton";

export default function Home() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Structured AI-Assisted
            <br />
            Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A CLI toolkit that brings structure to AI-assisted software development with phase templates, 
            systematic planning, and comprehensive documentation workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/docs" 
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors no-underline"
            >
              Get Started
            </Link>
            <GitHubButton repo="codeaholicguy/ai-devkit" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why AI DevKit?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Documentation-First</h3>
              <p className="text-gray-600 leading-relaxed">
                Start with clear requirements, design decisions, and implementation plans. 
                Keep your project knowledge organized and accessible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Phase-Based Workflow</h3>
              <p className="text-gray-600 leading-relaxed">
                Move systematically through requirements, design, planning, implementation, 
                and testing. No step gets skipped.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">AI-Friendly Context</h3>
              <p className="text-gray-600 leading-relaxed">
                Organize project knowledge so AI assistants provide better guidance. 
                Amplify human capabilities with structured context.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Quick Start
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">Install AI DevKit globally:</p>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>npm install -g ai-devkit</code>
              </pre>
              <p className="text-gray-600 mt-6 mb-4">Initialize in your project:</p>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>ai-devkit init</code>
              </pre>
              <p className="text-gray-600 mt-6">or</p>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>npx ai-devkit init</code>
              </pre>
              <p className="text-gray-600 mt-6">
                This creates a <code>docs/ai/</code> directory with phase templates for 
                requirements, design, planning, implementation, testing, deployment, and monitoring.
              </p>
            </div>
            <div className="text-center mt-8">
              <Link 
                href="/docs" 
                className="text-lg font-medium hover:opacity-70 transition-opacity"
              >
                Read the full documentation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to structure your development?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join developers who are building better software with AI assistance and structured workflows.
          </p>
          <Link 
            href="/docs" 
            className="inline-block px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors no-underline"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
