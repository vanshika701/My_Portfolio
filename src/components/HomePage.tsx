import { Heart, Code2, Layers, Shield, Brain } from 'lucide-react';
import TerminalSection from './TerminalSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <div className="relative bg-white rounded-full p-12 shadow-xl border-4 border-pink-100">
                <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-full p-8">
                  <Heart className="w-24 h-24 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              SYSTEM STATUS: OPTIMIZED
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Hello World,<br />
              <span className="text-gray-800">I'm Barbie.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Architecting the future of web ecosystems with high-heels and higher-order functions. Computer Science Engineer specializing in pink-themed high-performance systems.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105">
                View Portfolio
              </button>
              <button className="bg-white text-gray-700 px-8 py-3 rounded-full font-medium border-2 border-gray-200 hover:border-pink-300 transition-all hover:scale-105">
                Read Blog
              </button>
            </div>
          </div>
        </div>

        <TerminalSection />

        <div className="mt-32">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Core Technical Stack</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <TechCard
              icon={<Code2 className="w-8 h-8" />}
              title="Frontend Dev"
              skills="React, Vue, & Sass Pink"
            />
            <TechCard
              icon={<Layers className="w-8 h-8" />}
              title="Architecture"
              skills="Go, Node.js, & Rust"
            />
            <TechCard
              icon={<Shield className="w-8 h-8" />}
              title="Security"
              skills="Cyber-Pink Hardening"
            />
            <TechCard
              icon={<Brain className="w-8 h-8" />}
              title="AI / ML"
              skills="Neural BarbieCore"
            />
          </div>
        </div>

        <div className="mt-32 bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-16 text-center relative overflow-hidden">
          <div className="absolute top-10 right-10 text-pink-300 text-9xl font-bold opacity-20">★</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Pink-ify your Production?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Currently accepting select engineering projects that demand high precision and impeccable style.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105 text-lg">
            Start Collaboration
          </button>
        </div>

        <footer className="mt-32 pt-12 border-t border-gray-200 text-center">
          <div className="text-pink-500 font-bold text-lg mb-4">CyberBarbie.sh</div>
          <div className="flex justify-center gap-6 mb-6 text-gray-500">
            <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
            <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Twitter (X)</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Dribbble</a>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Barbie Tech Industries. Designed with <span className="text-pink-500">♥</span> and lots of Pink CSS.</p>
        </footer>
      </div>
    </div>
  );
}

function TechCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-pink-300 transition-all hover:shadow-xl group">
      <div className="bg-pink-100 text-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-pink-500 text-sm font-medium">{skills}</p>
    </div>
  );
}
