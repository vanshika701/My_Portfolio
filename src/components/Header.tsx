import { Terminal } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  theme?: 'light' | 'dark';
}

export default function Header({ currentPage, onNavigate, theme = 'light' }: HeaderProps) {
  const isDark = theme === 'dark';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isDark ? 'bg-[#0f0f0f]/80 border-gray-800' : 'bg-white/80 border-gray-100'
      } backdrop-blur-md border-b`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-[#1A1A1A] group-hover:bg-[#252525]' : 'bg-barbie-pink text-white'}`}>
              <Terminal className={`w-5 h-5 ${isDark ? 'text-barbie-pink' : 'text-white'}`} />
            </div>
            <span className={`font-bold text-xl tracking-tight ${isDark ? 'text-white' : 'text-cyber-black'}`}>
              <span className="text-barbie-pink mr-1">&gt;_</span>CyberBarbie<span className="text-barbie-pink">.sh</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {['Projects', 'Stack', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`text-sm font-bold tracking-wide transition-colors ${currentPage === item.toLowerCase()
                  ? 'text-barbie-pink'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-cyber-black'
                  }`}
              >
                <span className="text-barbie-pink opacity-50 mr-1">//</span>{item}
              </button>
            ))}
          </nav>

          <button className="bg-barbie-pink text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-barbie-pink/30 hover:shadow-xl hover:shadow-barbie-pink/40 hover:-translate-y-0.5 transition-all font-mono">
            sudo ./hire_me
          </button>
        </div>
      </div>
    </header>
  );
}
