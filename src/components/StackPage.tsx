export default function StackPage() {
  const techStack = [
    'React.js', 'TypeScript', 'AWS Cloud', 'Python', 'Docker',
    'Tailwind CSS', 'Node.js', 'Kubernetes', 'GraphQL'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 rounded-3xl p-1">
              <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 via-pink-200/50 to-blue-200/50 animate-pulse"></div>
                <div className="relative bg-pink-500 text-white px-6 py-3 rounded-full font-mono text-sm font-semibold">
                  ● NEURAL LINK: ACTIVE
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-pink-500/30">
              SYSTEM_REPORT: PROFILE
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              High-Tech Barbie<br />
              <span className="text-pink-400">Cloud Architect.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Hello world! I'm a software engineer who believes that powerful code and a pink aesthetic aren't mutually exclusive. I specialize in building robust cloud infrastructures and sleek, user-centric interfaces.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              When I'm not optimizing Kubernetes clusters or debugging React hooks, you can find me exploring the intersection of fashion-tech and digital accessibility. My mission is to build software that is as beautiful on the inside as it is on the outside.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-4">
                <div className="text-pink-400 text-3xl font-bold mb-1">05+</div>
                <div className="text-gray-400 text-sm">YEARS EXP.</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-4">
                <div className="text-pink-400 text-3xl font-bold mb-1">42</div>
                <div className="text-gray-400 text-sm">PROJECTS</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-4">
                <div className="text-pink-400 text-3xl font-bold mb-1">100%</div>
                <div className="text-gray-400 text-sm">UPTIME</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
            <h2 className="text-3xl font-bold text-white">TECH_STACK</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-auto text-gray-500 text-sm font-mono">SYSTEM_STATUS.LOG</div>
          </div>

          <div className="font-mono text-sm space-y-2">
            <div className="text-gray-500">
              <span className="text-gray-600">[14:23:01]</span> Initializing BarbieCore Kernel...
            </div>
            <div className="text-gray-500">
              <span className="text-gray-600">[14:23:02]</span> Loading styling_module.v3... <span className="text-green-400">OK</span>
            </div>
            <div className="text-gray-500">
              <span className="text-gray-600">[14:23:03]</span> Optimizing high_heels_infrastructure... <span className="text-green-400">DONE</span>
            </div>
            <div className="text-pink-400">
              <span className="text-gray-600">[14:23:05]</span> <span className="font-bold">WARNING: Fabulous levels exceeding safety threshold!</span>
            </div>
            <div className="text-gray-500">
              <span className="text-gray-600">[14:23:06]</span> Connection established with AWS-East-1 (Dreamhouse)
            </div>
            <div className="text-gray-500">
              <span className="text-gray-600">[14:23:08]</span> Scanning for bugs... No bugs found, only features.
            </div>
            <div className="text-green-400">
              <span className="text-gray-600">[14:23:10]</span> System ready. All units operational.
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-12 border-t border-gray-800 text-center">
          <div className="text-gray-600 text-sm mb-4">© 2024 BarbieEngineer.exe | Handcrafted with pink pixels.</div>
          <div className="flex justify-center gap-6 text-gray-500">
            <a href="#" className="hover:text-pink-400 transition-colors">👤</a>
            <a href="#" className="hover:text-pink-400 transition-colors">💻</a>
            <a href="#" className="hover:text-pink-400 transition-colors">✉️</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
