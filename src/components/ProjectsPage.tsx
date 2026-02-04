import { Rocket, Search, Terminal, Activity, GitCommit, Eye, Globe, Pin } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
}

interface LiveProject {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  repoLink?: string;
  status: 'live' | 'beta' | 'maintenance';
  pinned?: boolean;
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [contributions, setContributions] = useState<{ intensity: string; count: number }[]>([]);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const GITHUB_USERNAME = 'vanshika701';

  // Add repository names here to hide them from the portfolio
  const HIDDEN_REPOS = ['vanshika701', 'portfolio-v1', 'learning-git', 'healthcare-website', 'healthcare-website1'];

  // Add repository names here to PIN them to the top of the GitHub list
  const PINNED_REPOS = ['HyperDrive Engine', 'Neural Pink Network']; // Example names, replace with real ones if needed

  // MANUALLY ADD YOUR DEPLOYED PROJECTS HERE
  const LIVE_PROJECTS: LiveProject[] = [
    {
      title: 'Rank Retreivel Model',
      description: 'A comprehensive information retrieval system built with Python that implements advanced text processing, indexing, and ranking algorithms for efficient document search and retrieval.',
      techStack: ['Python', 'NLP', 'Machine Learning', 'Information Retrieval'],
      liveLink: 'https://ranked-retrieval-model.streamlit.app/',
      repoLink: 'https://github.com/vanshika701/Rank-Retrieval-Model',
      status: 'live',
      pinned: true
    },
    {
      title: 'The Route Cause',
      description: 'AI-Powered Traffic Management System',
      techStack: ['Reinforcement Learning', 'Python', 'Machine Learning', 'TypeScript', 'React', 'FastAPI'],
      liveLink: 'https://the-route-cause.vercel.app/',
      repoLink: 'https://github.com/vanshika701/The-Route-Cause',
      status: 'live',
      pinned: true
    },
    {
      title: 'Calories Burnt Predictor',
      description: 'number of calories burnt during exercise',
      techStack: ['Python', 'Machine Learning', 'Jupyter Notebook', 'XGBoost Regressor', 'Scikit-Learn'],
      liveLink: 'https://calorie-burnt-predict-jwqshdbz2bb8pxraqx26pr.streamlit.app/',
      repoLink: 'https://github.com/vanshika701/Calorie-Burnt-Predict',
      status: 'live',
      pinned: true
    },
    // Copy the block above to add more projects
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Contributions
        const contribResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`);
        const contribData = await contribResponse.json();

        if (contribData && contribData.contributions) {
          const processedData = contribData.contributions.map((day: any) => {
            let intensity = 'bg-[#1a1a1a]';
            if (day.count > 10) intensity = 'bg-barbie-pink';
            else if (day.count > 6) intensity = 'bg-barbie-pink/70';
            else if (day.count > 3) intensity = 'bg-barbie-pink/40';
            else if (day.count > 0) intensity = 'bg-barbie-pink/20';

            return { intensity, count: day.count, date: day.date };
          });

          // Ensure we have exactly 52 * 7 = 364 days for the grid, taking the last 364
          const last364 = processedData.slice(-364);
          // Pad if necessary (unlikely for "last year" query but good for safety)
          while (last364.length < 364) {
            last364.unshift({ intensity: 'bg-[#1a1a1a]', count: 0 });
          }
          setContributions(last364);
        }

        // Fetch Repositories
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        const reposData = await reposResponse.json();

        if (Array.isArray(reposData)) {
          // Create a Set of repo links from LIVE_PROJECTS to filter them out of the general repo list
          const liveProjectRepoLinks = new Set(LIVE_PROJECTS.map(p => p.repoLink).filter(link => link));

          let filteredRepos = reposData.filter((repo: Repo) => {
            const isHidden = HIDDEN_REPOS.includes(repo.name);
            const isLiveProject = repo.html_url && liveProjectRepoLinks.has(repo.html_url);
            return !isHidden && !isLiveProject;
          });

          // Sort: Pinned projects first, then by updated_at (default from API usually, but safe to assume order)
          filteredRepos.sort((a, b) => {
            const isAPinned = PINNED_REPOS.includes(a.name);
            const isBPinned = PINNED_REPOS.includes(b.name);
            if (isAPinned && !isBPinned) return -1;
            if (!isAPinned && isBPinned) return 1;
            return 0;
          });

          setRepos(filteredRepos);
        }

      } catch (error) {
        console.error("Failed to fetch GitHub data", error);
        // Fallback for contributions
        setContributions(Array(364).fill({ intensity: 'bg-[#1a1a1a]', count: 0 }));
      } finally {
        setLoading(false);
        setProjectsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter projects based on search query
  const filteredLiveProjects = LIVE_PROJECTS.filter(project => {
    const searchLower = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchLower))
    );
  });

  const filteredRepos = repos.filter(repo => {
    const searchLower = searchQuery.toLowerCase();
    return (
      repo.name.toLowerCase().includes(searchLower) ||
      (repo.language && repo.language.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* Header Section */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              <span className="text-barbie-pink">&gt;_</span> Projects & Open Source<span className="animate-pulse">_</span>
            </h1>
            <p className="text-[#D02670] text-lg font-medium font-mono">// Exploring the intersection of high-tech engineering and pink aesthetics.</p>
          </div>

          <div className="hidden md:flex items-center gap-3 bg-[#1A1A1A] rounded-full px-5 py-2.5 border border-gray-800 w-80 focus-within:border-barbie-pink/50 transition-colors">
            <span className="text-barbie-pink font-bold">$</span>
            <input
              type="text"
              placeholder="grep 'project_name'..."
              className="bg-transparent text-gray-300 outline-none w-full text-sm placeholder-gray-600 font-mono"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-12 border-b border-gray-800">
          {['all', 'featured', 'research'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 font-bold text-xs tracking-widest uppercase transition-all relative font-mono ${activeTab === tab
                ? 'text-white'
                : 'text-gray-500 hover:text-gray-300'
                }`}
            >
              {activeTab === tab && <span className="text-barbie-pink mr-2">[</span>}
              {tab === 'all' && 'ALL_REPOS'}
              {tab === 'featured' && 'LIVE_PROJECTS'}
              {tab === 'research' && 'ACTIVE_RESEARCH'}
              {activeTab === tab && <span className="text-barbie-pink ml-2">]</span>}

              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-barbie-pink shadow-[0_0_10px_rgba(255,0,127,0.5)]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Live Projects Section - Shows on All and Live Projects tabs */}
          {(activeTab === 'all' || activeTab === 'featured') && (
            filteredLiveProjects.map((project, index) => (
              <div
                key={`live-${index}`}
                className="bg-[#0F0F0F] border border-gray-800 rounded-3xl p-8 hover:border-barbie-pink/40 hover:shadow-[0_0_30px_rgba(255,0,127,0.1)] transition-all group relative overflow-hidden flex flex-col"
              >
                {/* Top Row with Pin */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-barbie-pink border border-gray-800 group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5" />
                    </div>
                    {project.pinned && (
                      <div className="w-8 h-8 rounded-full bg-[#3D0C1F] flex items-center justify-center text-barbie-pink border border-barbie-pink/20" title="Pinned Project">
                        <Pin className="w-3 h-3 fill-current" />
                      </div>
                    )}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${project.status === 'live' ? 'bg-[#064e3b]/30 text-green-400 border-green-900' : 'bg-[#3D0C1F] text-barbie-pink border-barbie-pink/20'
                    }`}>
                    {project.status.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-barbie-pink transition-colors truncate" title={project.title}>
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex gap-2 mb-8 flex-wrap">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-[#1A1A1A] text-gray-400 border border-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer / Link */}
                <div className="flex items-center justify-between gap-4 pt-6 border-t border-gray-900/50 mt-auto">
                  {/* Repo Link */}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-bold text-gray-500 hover:text-barbie-pink transition-colors uppercase tracking-widest"
                    >
                      <GitCommit className="w-3 h-3" />
                      VIEW REPO
                    </a>
                  )}

                  {/* Live Link */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group/btn ml-auto"
                  >
                    <span className="text-[10px] font-bold text-white group-hover/btn:text-barbie-pink transition-colors uppercase tracking-widest">VISIT SITE</span>
                    <div className="w-8 h-8 rounded-full bg-barbie-pink text-white flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-barbie-pink transition-all">
                      <Eye className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </div>
            ))
          )}

          {/* GitHub Repos Section - Shows on All and Research tabs (hides on Live Projects tab) */}
          {(activeTab === 'all' || activeTab !== 'featured') && (
            projectsLoading ? (
              Array.from({ length: 9 }).map((_, i) => (
                <div key={`skeleton-${i}`} className="bg-[#0F0F0F] border border-gray-800 rounded-3xl p-8 h-80 animate-pulse">
                  <div className="flex justify-between mb-8">
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-full"></div>
                    <div className="w-20 h-6 bg-[#1A1A1A] rounded-full"></div>
                  </div>
                  <div className="w-3/4 h-8 bg-[#1A1A1A] rounded mb-4"></div>
                  <div className="w-full h-4 bg-[#1A1A1A] rounded mb-2"></div>
                  <div className="w-2/3 h-4 bg-[#1A1A1A] rounded"></div>
                </div>
              ))
            ) : (
              filteredRepos.map((project) => {
                const isPinned = PINNED_REPOS.includes(project.name);
                return (
                  <div
                    key={project.id}
                    className="bg-[#0F0F0F] border border-gray-800 rounded-3xl p-8 hover:border-barbie-pink/40 hover:shadow-[0_0_30px_rgba(255,0,127,0.1)] transition-all group relative overflow-hidden flex flex-col"
                  >
                    {/* Top Row */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-barbie-pink border border-gray-800 group-hover:scale-110 transition-transform">
                          <Rocket className="w-5 h-5" />
                        </div>
                        {isPinned && (
                          <div className="w-8 h-8 rounded-full bg-[#3D0C1F] flex items-center justify-center text-barbie-pink border border-barbie-pink/20" title="Pinned Repo">
                            <Pin className="w-3 h-3 fill-current" />
                          </div>
                        )}
                      </div>
                      <div className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border bg-[#3D0C1F] text-barbie-pink border-barbie-pink/20">
                        PUBLIC
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-barbie-pink transition-colors truncate" title={project.name}>
                      {project.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light line-clamp-3 flex-grow">
                      {project.description || "No description provided."}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-6 text-xs font-medium text-gray-500 mb-8 pt-6 border-t border-gray-900/50">
                      <div className="flex items-center gap-2">
                        <span className="text-barbie-pink">★</span>
                        <span>{project.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GitCommit className="w-3 h-3 text-barbie-pink" />
                        <span>{project.forks_count}</span>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        <span className="w-2 h-2 rounded-full bg-barbie-pink"></span>
                        <span>{project.language || 'Code'}</span>
                      </div>
                    </div>

                    {/* Footer / Link */}
                    <div className="flex items-center justify-between gap-4 pt-6 border-t border-gray-900/50 mt-auto">
                      {/* Repo Link */}
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-bold text-gray-600 hover:text-barbie-pink transition-colors uppercase tracking-widest group-hover/link:text-barbie-pink"
                      >
                        <GitCommit className="w-3 h-3" />
                        VIEW REPO
                      </a>

                      {/* Optional Homepage Link for Repos if it exists */}
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 group/btn"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-gray-400 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-barbie-pink transition-all">
                            <Eye className="w-4 h-4" />
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                )
              })
            )
          )}
        </div>

        {/* Open Source Activity */}
        <div className="bg-[#0F0F0F] border border-barbie-pink/20 rounded-[2.5rem] p-10 mb-20 relative overflow-hidden">

          <div className="flex items-center justify-between mb-10 relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 font-mono">
                <span className="text-barbie-pink">./</span>Open_Source_Activity
              </h2>
              <p className="text-barbie-pink text-sm font-medium font-mono">--visualizing {GITHUB_USERNAME}'s contributions</p>
            </div>
            <div className="hidden md:flex items-center gap-3 text-xs text-gray-500 font-mono">
              <span>[ LOW ]</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-[#1a1a1a]"></div>
                <div className="w-3 h-3 rounded-sm bg-barbie-pink/20"></div>
                <div className="w-3 h-3 rounded-sm bg-barbie-pink/40"></div>
                <div className="w-3 h-3 rounded-sm bg-barbie-pink/70"></div>
                <div className="w-3 h-3 rounded-sm bg-barbie-pink"></div>
              </div>
              <span>[ HIGH ]</span>
            </div>
          </div>

          <div className="flex gap-1 overflow-x-auto pb-4 relative z-10 scrollbar-hide">
            {loading ? (
              // Loading Skeleton
              Array.from({ length: 52 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, j) => (
                    <div key={j} className="w-3 h-3 rounded-sm bg-gray-800/50 animate-pulse"></div>
                  ))}
                </div>
              ))
            ) : (
              // Real Data
              Array.from({ length: 52 }).map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, dayIndex) => {
                    const index = weekIndex * 7 + dayIndex;
                    const contribution = contributions[index] || { intensity: 'bg-[#1a1a1a]', count: 0 };
                    return (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`w-3 h-3 rounded-sm ${contribution.intensity} hover:scale-125 transition-transform cursor-pointer relative group`}
                      >
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-cyber-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 font-mono">
                          {contribution.count} commits
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>

        {/* System Global Status */}
        <div className="bg-[#121212] border border-gray-800 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h2 className="text-xl font-bold text-white mb-1 font-mono">
              [ SYSTEM :: GLOBAL_STATUS ]
            </h2>
            <p className="text-[#D02670] text-sm font-medium font-mono">&gt; All cloud deployments are operational. Continuous integration active.</p>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2.5 rounded-lg bg-[#2D1623] text-barbie-pink text-sm font-bold border border-barbie-pink/20 hover:bg-[#3D1F2F] transition-colors flex items-center gap-2 font-mono">
              <Terminal className="w-4 h-4" /> &gt; view_logs
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-barbie-pink text-white text-sm font-bold hover:bg-barbie-pink/90 transition-colors flex items-center gap-2 shadow-lg shadow-barbie-pink/20 font-mono">
              <Activity className="w-4 h-4" /> --live_feed
            </button>
          </div>
        </div>

        <footer className="mt-24 flex justify-center gap-8 border-t border-gray-800/50 pt-10 pb-10">
          <div className="text-gray-600 text-xs font-mono">© 2024 DevBarbie.js • [ Executed with high-frequency algorithms & love ]</div>
          <div className="flex gap-4 text-gray-500">
            {/* Simple Icons */}
            <div className="w-4 h-4 hover:text-barbie-pink cursor-pointer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg>
            </div>
            <div className="w-4 h-4 hover:text-barbie-pink cursor-pointer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
            </div>
            <div className="w-4 h-4 hover:text-barbie-pink cursor-pointer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="14.31" y1="8" x2="20.05" y2="17.94" /><line x1="9.69" y1="8" x2="21.17" y2="8" /><line x1="7.38" y1="12" x2="13.12" y2="2.06" /><line x1="9.69" y1="16" x2="3.95" y2="6.06" /><line x1="14.31" y1="16" x2="2.83" y2="16" /><line x1="16.62" y1="12" x2="10.88" y2="21.94" /></svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
