import { Terminal } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  theme?: 'light' | 'dark';
}

export default function Header({ currentPage, onNavigate, theme = 'light' }: HeaderProps) {
  const isDark = theme === 'dark';

  return (
    <header className={`${isDark ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              CyberBarbie<span className="text-pink-500">.sh</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {['Projects', 'Stack', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`${
                  currentPage === item.toLowerCase()
                    ? 'text-pink-500'
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                } transition-colors font-medium`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105">
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
