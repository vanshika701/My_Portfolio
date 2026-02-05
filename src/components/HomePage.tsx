import { Code2, Layers, Shield, Brain, Heart, Layers2 } from 'lucide-react';
import { useState } from 'react';
import TerminalSection from './TerminalSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [noBtnPosition, setNoBtnPosition] = useState<{ top: string; left: string } | null>(null);

  const handleNoHover = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10; // 10% to 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10; // 10% to 90%
    setNoBtnPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative">
        {/* Decorative Stars */}
        <Star className="w-12 h-12 top-20 left-4 opacity-20 -rotate-12" />
        <Star className="w-16 h-16 top-40 right-10 opacity-10 rotate-45" />
        <Star className="w-8 h-8 bottom-1/4 left-10 opacity-15 rotate-180" />
        {/* New Stars */}
        <Star className="w-6 h-6 top-10 right-1/4 opacity-20 rotate-12" />
        <Star className="w-10 h-10 bottom-1/3 right-20 opacity-15 -rotate-12" />

        {/* Dynamic Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 relative">
          <div className="order-2 md:order-1 flex justify-center relative">
            {/* Pink Heart Circle Effect */}
            <div className="relative z-10">
              <div className="absolute inset-0 bg-barbie-pink/20 rounded-full blur-[100px] transform scale-150"></div>
              <div className="relative w-[400px] h-[400px] rounded-full border border-barbie-pink/20 flex items-center justify-center animate-spin-slow">
                <div className="w-[300px] h-[300px] rounded-full border border-barbie-pink/40 flex items-center justify-center">
                  <Heart className="w-32 h-32 text-barbie-pink fill-barbie-pink animate-pulse" />
                </div>
              </div>
              <Star className="w-10 h-10 -top-4 -right-4 opacity-30 rotate-12" />
            </div>
          </div>

          <div className="order-1 md:order-2 z-10">
            <div className="inline-block bg-barbie-soft text-barbie-pink px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 font-mono">
              [ SYSTEM STATUS :: OPTIMIZED ]
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-cyber-black mb-6 leading-tight font-mono">
              <span className="text-barbie-pink">&gt;_</span> Hello World,<br />
              <span className="text-cyber-black opacity-80">// I'm Barbie.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg font-light font-mono">
              /* Architecting the future of web ecosystems with high-heels and higher-order functions. Computer Science Engineer specializing in pink-themed high-performance systems. */
            </p>
            <div className="flex gap-4 font-mono">
              <button
                onClick={() => onNavigate('projects')}
                className="bg-barbie-pink text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-barbie-pink/30 hover:shadow-xl hover:shadow-barbie-pink/40 hover:-translate-y-1 transition-all text-sm"
              >
                [ View Portfolio ]
              </button>
            </div>
          </div>
        </div>

        {/* Terminal Section */}
        <div className="mb-32 relative">
          <Star className="w-14 h-14 -top-10 right-20 opacity-10 -rotate-6" />
          <h2 className="text-2xl font-bold text-cyber-black mb-6 font-mono">&gt; Active Terminal Session_</h2>
          <TerminalSection />
        </div>

        {/* Core Technical Stack */}
        <div className="mb-32 relative">
          <Star className="w-10 h-10 top-0 left-1/2 opacity-10 rotate-12" />
          <h2 className="text-2xl font-bold text-cyber-black mb-8 font-mono">&gt; Core Technical Stack_</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <TechCard
              icon={<Code2 className="w-6 h-6" />}
              title="Frontend Development"
              skills="HTML, CSS, JavaScript,Tailwind CSS, React, TypeScript, & Sass Pink"
            />
            <TechCard
              icon={<Layers className="w-6 h-6" />}
              title="Programming Languages"
              skills="Java, Python, SQL"
            />
            <TechCard
              icon={<Shield className="w-6 h-6" />}
              title="Python Libraries"
              skills="pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, Seaborn, Plotly, XGBoost, YOLOv8, OpenCV"
            />
            <TechCard
              icon={<Brain className="w-6 h-6" />}
              title="AI / ML"
              skills="Supervised Learning, Unsupervised Learning, Reinforcement Learning,  Generative AI"
            />
            <TechCard
              icon={<Layers2 className="w-6 h-6" />}
              title="Relevant Coursework"
              skills="Data Structure and Algorithms(DSA), Probability Statistics, Object Oriented Programming(OOPs),
Operating System, Database Management System(DBMS)"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-barbie-soft rounded-[2.5rem] p-16 text-center relative overflow-hidden mb-20 h-[400px] flex flex-col items-center justify-center">
          <Star className="w-24 h-24 top-10 right-10 opacity-20 rotate-12" />
          <Star className="w-16 h-16 bottom-10 left-10 opacity-10 -rotate-12" />
          <h2 className="text-3xl font-bold text-cyber-black mb-4 font-mono">
            &gt; Wanna hire me?_
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto font-mono">
            // Select your response below. Choose wisely.
          </p>
          <div className="w-full max-w-md h-20">
            <div className="flex justify-center gap-8 items-center h-full">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-barbie-pink text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-barbie-pink/30 hover:shadow-xl hover:shadow-barbie-pink/40 transition-all hover:-translate-y-1 font-mono z-10"
              >
                [ Yes ]
              </button>

              <button
                onMouseEnter={handleNoHover}
                style={
                  noBtnPosition
                    ? { position: 'absolute', top: noBtnPosition.top, left: noBtnPosition.left, transition: 'all 0.2s ease', zIndex: 20 }
                    : { position: 'relative', transition: 'all 0.2s ease', zIndex: 20 }
                }
                className="bg-white text-cyber-black px-10 py-4 rounded-full font-bold border border-gray-200 hover:bg-gray-50 transition-all font-mono whitespace-nowrap"
              >
                [ No ]
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 border-t border-gray-100 text-center relative">
          <Star className="w-8 h-8 -top-6 left-1/2 opacity-20 rotate-45 delay-75" />
          <Star className="w-12 h-12 bottom-10 right-10 opacity-10 -rotate-12" />
          <div className="text-barbie-pink font-bold text-lg mb-6 font-mono">&gt; CyberBarbie.sh</div>
          <div className="flex justify-center gap-8 mb-8 text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
            <a href="#" className="hover:text-barbie-pink transition-colors">[ GitHub ]</a>
            <a href="#" className="hover:text-barbie-pink transition-colors">[ LinkedIn ]</a>
            <a href="#" className="hover:text-barbie-pink transition-colors">[ Twitter (X) ]</a>
            <a href="#" className="hover:text-barbie-pink transition-colors">[ Dribbble ]</a>
          </div>
          <p className="text-gray-400 text-xs font-mono">[ © 2024. Designed with &lt;3 and lots of Pink CSS. ]</p>
        </footer>
      </div>
    </div>
  );
}

function TechCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-barbie-pink/30 hover:shadow-xl hover:shadow-barbie-pink/5 transition-all group cursor-default">
      <div className="mb-6">
        <div className="w-12 h-12 bg-barbie-soft rounded-2xl flex items-center justify-center text-barbie-pink group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="font-bold text-cyber-black text-lg mb-2">{title}</h3>
      <p className="text-barbie-pink text-xs font-medium">{skills}</p>
    </div>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none text-barbie-pink ${className}`}>
      <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
  );
}
