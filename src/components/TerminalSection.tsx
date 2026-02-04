import { useState } from 'react';

export default function TerminalSection() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="bg-cyber-black rounded-[2.5rem] p-12 relative overflow-hidden text-white shadow-2xl">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
        {/* Terminal Window */}
        <div>
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>

          <div className="font-mono text-xs md:text-sm leading-relaxed space-y-3 opacity-90">
            <div>
              <span className="text-barbie-pink">barbie@cyber-station:~$</span> init --aesthetic pink
            </div>
            <div className="pl-4 text-gray-400">
              &gt; Loading BarbieCore.sh...
            </div>
            <div className="pl-4 text-gray-400">
              &gt; [OK] Neural Network: React.js
            </div>
            <div className="pl-4 text-gray-400">
              &gt; [OK] Style Engine: TailwindCSS
            </div>
            <div className="pl-4 text-gray-400">
              &gt; [OK] Cloud Cluster: AWS_PINK_REGION
            </div>
            <div>
              <span className="text-barbie-pink">barbie@cyber-station:~$</span> <span className="animate-pulse inline-block w-2 H-4 bg-barbie-pink align-middle"></span>
            </div>
          </div>
        </div>

        {/* Terminal Description */}
        <div className="text-left">
          <h3 className="text-3xl font-bold mb-2">Terminal v2.0.4</h3>
          <p className="text-barbie-pink text-sm font-semibold mb-6 tracking-wide uppercase">Uptime: 100% unapologetically stylish</p>
          <p className="text-gray-400 leading-relaxed mb-8 font-light">
            Automating luxury and optimizing elegance through enterprise-grade architecture and fashion-forward UI/UX design patterns.
          </p>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs">☁</div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs">⚡</div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs">🔒</div>
            </div>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="bg-barbie-pink text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-barbie-pink/30 hover:scale-105 transition-transform text-sm"
            >
              Run Script
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
