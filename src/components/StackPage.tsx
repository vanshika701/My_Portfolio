export default function StackPage() {
  const techStack = [
    'React.js', 'TypeScript', 'AWS Cloud', 'Python', 'Docker',
    'Tailwind CSS', 'Node.js', 'Kubernetes', 'GraphQL'
  ];

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* Profile Header */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-barbie-pink to-purple-600 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative rounded-[2.5rem] p-1 bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] border border-gray-800">
              <div className="rounded-[2.4rem] h-[500px] w-full bg-gradient-to-br from-[#CDA583] via-[#8E9EAB] to-[#1a1a1a] flex items-end justify-center overflow-hidden relative">
                {/* Placeholder for Barbie Image/Aesthetic Gradient */}
                <div className="absolute bottom-8 left-8">
                  <div className="bg-[#3D0C1F] text-barbie-pink px-4 py-2 rounded-full text-xs font-bold tracking-widest border border-barbie-pink/30 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    NEURAL_LINK: ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-[#3D0C1F] text-barbie-pink px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 border border-barbie-pink/20">
              SYSTEM_REPORT: PROFILE
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              High-Tech Barbie<br />
              <span className="text-barbie-pink">Cloud Architect.</span>
            </h1>

            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed mb-10">
              <p>
                Hello world! I'm a software engineer who believes that powerful code and a pink aesthetic aren't mutually exclusive. I specialize in building robust cloud infrastructures and sleek, user-centric interfaces.
              </p>
              <p>
                When I'm not optimizing Kubernetes clusters or debugging React hooks, you can find me exploring the intersection of fashion-tech and digital accessibility. My mission is to build software that is as beautiful on the inside as it is on the outside.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800 hover:border-barbie-pink/30 hover:bg-[#202020] transition-all">
                <div className="text-barbie-pink text-3xl font-bold mb-1">05+</div>
                <div className="text-gray-500 text-xs font-bold tracking-wider">YEARS EXP</div>
              </div>
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800 hover:border-barbie-pink/30 hover:bg-[#202020] transition-all">
                <div className="text-barbie-pink text-3xl font-bold mb-1">42</div>
                <div className="text-gray-500 text-xs font-bold tracking-wider">PROJECTS</div>
              </div>
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800 hover:border-barbie-pink/30 hover:bg-[#202020] transition-all">
                <div className="text-barbie-pink text-3xl font-bold mb-1">100%</div>
                <div className="text-gray-500 text-xs font-bold tracking-wider">UPTIME</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-2xl font-bold text-white shrink-0 font-mono">&gt; TECH_STACK_</h2>
            <div className="h-px w-full bg-gradient-to-r from-barbie-pink/50 to-transparent"></div>
          </div>

          <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="bg-barbie-pink text-white px-8 py-3 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-barbie-pink/40 hover:scale-105 transition-all cursor-default font-mono"
              >
                ./{tech}
              </div>
            ))}
          </div>
        </div>

        {/* System Log */}
        <div className="rounded-3xl border border-gray-800 overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-10 bg-[#1A1A1A] border-b border-gray-800 flex items-center px-4 justify-between z-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">system_status.log</div>
            <div className="w-10"></div> {/* spacer */}
          </div>

          <div className="p-8 pt-16 bg-[#0F0F0F] font-mono text-sm space-y-3 relative">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="text-gray-500 relative z-10">
              <span className="text-green-500 font-bold">[14:23:01]</span> Initializing BarbieCore Kernel...
            </div>
            <div className="text-gray-500 relative z-10">
              <span className="text-green-500 font-bold">[14:23:02]</span> Loading styling_module.v3... <span className="text-barbie-pink">OK</span>
            </div>
            <div className="text-gray-500 relative z-10">
              <span className="text-green-500 font-bold">[14:23:03]</span> Optimizing high_heels_infrastructure... <span className="text-barbie-pink">DONE</span>
            </div>
            <div className="text-barbie-pink font-bold relative z-10">
              <span className="text-green-500 font-normal opacity-50">[14:23:05]</span> WARNING: Fabulous levels exceeding safety threshold!
            </div>
            <div className="text-gray-500 relative z-10">
              <span className="text-green-500 font-bold">[14:23:06]</span> Connection established with AWS-East-1 (Dreamhouse)
            </div>
            <div className="text-gray-500 relative z-10">
              <span className="text-green-500 font-bold">[14:23:08]</span> Scanning for bugs... No bugs found, only features.
            </div>
            <div className="text-green-400 relative z-10">
              <span className="text-green-500 font-bold opacity-50">[14:23:10]</span> System ready. All units operational.
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-12 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500 font-mono">
          <div>© 2024 BarbieEngineer.exe | [ Handcrafted with pink pixels ]</div>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-barbie-pink transition-colors">@user</a>
            <a href="#" className="hover:text-barbie-pink transition-colors">/repo</a>
            <a href="#" className="hover:text-barbie-pink transition-colors">#social</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
