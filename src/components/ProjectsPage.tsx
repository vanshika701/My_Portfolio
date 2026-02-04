import { Rocket, Search, User } from 'lucide-react';
import { useState } from 'react';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      name: 'HyperDrive Engine',
      description: 'A high-performance Pink-JS runtime for distributed computing across edge nodes.',
      version: 'v2.4.1',
      stars: '1.7k',
      watchers: '245',
      language: 'JavaScript',
      status: 'active',
      terminalAccess: true
    },
    {
      name: 'Neural Pink Network',
      description: 'Self-learning UI components that adapt to user behavior using lightweight ML models.',
      version: 'β 0.8',
      stars: '856',
      watchers: '89',
      language: 'TypeScript',
      status: 'active',
      terminalAccess: false
    },
    {
      name: 'Boutique Blockchain',
      description: 'A specialized ledger for luxury asset tracking and authentication.',
      version: '1.0.2',
      stars: '2.1k',
      watchers: '173',
      language: 'Go',
      status: 'public-beta',
      terminalAccess: false
    }
  ];

  const generateContributionGraph = () => {
    const weeks = 52;
    const days = 7;
    const contributions = [];

    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < days; day++) {
        const level = Math.random();
        let intensity = 'bg-pink-900/20';
        if (level > 0.7) intensity = 'bg-pink-500';
        else if (level > 0.5) intensity = 'bg-pink-600';
        else if (level > 0.3) intensity = 'bg-pink-700';
        else if (level > 0.1) intensity = 'bg-pink-800';

        contributions.push({ week, day, intensity });
      }
    }

    return contributions;
  };

  const contributions = generateContributionGraph();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Projects & Open Source</h1>
            <p className="text-pink-400 text-lg">Exploring the intersection of high-tech engineering and pink aesthetics.</p>
          </div>

          <div className="hidden md:flex items-center gap-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-full px-4 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Repos..."
              className="bg-transparent text-gray-300 outline-none w-48"
            />
          </div>
        </div>

        <div className="flex gap-6 mb-8 border-b border-gray-800">
          {['all', 'featured', 'research'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 font-medium transition-colors relative ${
                activeTab === tab
                  ? 'text-pink-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab === 'all' && 'ALL REPOSITORY'}
              {tab === 'featured' && 'FEATURED WORK'}
              {tab === 'research' && 'ACTIVE RESEARCH'}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500"></div>
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 hover:border-pink-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-pink-500/20 p-3 rounded-xl">
                  <Rocket className="w-6 h-6 text-pink-400" />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'active'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                }`}>
                  {project.status === 'active' ? 'ACTIVE' : 'PUBLIC BETA'}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-pink-400">★</span>
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-pink-400">👁</span>
                  <span>{project.watchers}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                  <span>{project.language}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="text-gray-500 text-sm font-mono">TERMINAL ACCESS</div>
                <div className={`w-12 h-6 rounded-full transition-colors ${
                  project.terminalAccess ? 'bg-pink-500' : 'bg-gray-700'
                } relative`}>
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    project.terminalAccess ? 'right-0.5' : 'left-0.5'
                  }`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Open Source Activity</h2>
              <p className="text-gray-400 text-sm">Visualizing 2,842 contributions in the last 12 months</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-pink-900/20 rounded"></div>
                  <div className="w-3 h-3 bg-pink-800 rounded"></div>
                  <div className="w-3 h-3 bg-pink-700 rounded"></div>
                  <div className="w-3 h-3 bg-pink-600 rounded"></div>
                  <div className="w-3 h-3 bg-pink-500 rounded"></div>
                </div>
                <span className="text-gray-400">More</span>
              </div>
            </div>
          </div>

          <div className="flex gap-1 overflow-x-auto pb-4">
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const contribution = contributions[weekIndex * 7 + dayIndex];
                  return (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm ${contribution.intensity} hover:ring-2 hover:ring-pink-400 transition-all cursor-pointer`}
                      title="Contributions"
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-2">System Global Status</h2>
          <p className="text-green-400 text-sm mb-6">All cloud deployments are operational. Continuous integration active.</p>

          <div className="flex gap-4">
            <button className="bg-pink-500/20 text-pink-400 px-6 py-3 rounded-full font-medium border border-pink-500/30 hover:bg-pink-500/30 transition-all flex items-center gap-2">
              <span>📊</span> System Logs
            </button>
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/50 transition-all flex items-center gap-2 hover:scale-105">
              <span>📡</span> Live Feed
            </button>
          </div>
        </div>

        <footer className="mt-20 pt-12 border-t border-gray-800 text-center">
          <div className="text-gray-600 text-sm mb-4">© 2024 DevBarbie.js • Designed with high-frequency algorithms & love.</div>
        </footer>
      </div>
    </div>
  );
}
