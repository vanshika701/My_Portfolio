import { Briefcase, Download, Send } from 'lucide-react';
import { useState } from 'react';

export default function ExperiencePage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const experiences = [
    {
      title: 'Senior Software Engineer Intern',
      company: 'Global Tech Solutions',
      year: '2024',
      description: 'Architecting scalable microservices and leading the migration to cloud-native infrastructure with a focus on high availability.'
    },
    {
      title: 'Full-Stack Development Fellow',
      company: 'Innovate AI Labs',
      year: '2023',
      description: 'Developed real-time data visualization dashboards using React and WebSockets for AI training monitoring.'
    },
    {
      title: 'Junior Developer Intern',
      company: 'PinkStack Systems',
      year: '2022',
      description: 'Automated CI/CD pipelines and optimized database queries reducing latency by 40%.'
    }
  ];

  const handleSendMessage = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Internships & Mission Control</h1>
          <p className="text-gray-400 text-lg">Tracking the professional trajectory of a high-tech software engineer.<br />Protocol initiated.</p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6 text-pink-400" />
            <h2 className="text-2xl font-bold text-white">Professional Timeline</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-pink-600 to-pink-700"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-16 pb-12 last:pb-0">
                <div className="absolute left-3 top-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center border-4 border-gray-900">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 hover:border-pink-500/50 transition-all">
                  <h3 className="text-xl font-bold text-pink-400 mb-1">{exp.title}</h3>
                  <div className="text-white font-medium mb-3">{exp.company} • {exp.year}</div>
                  <p className="text-gray-400 leading-relaxed italic">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 text-center mb-20">
          <div className="bg-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-pink-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Technical Specifications</h2>
          <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105 inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            DOWNLOAD RESUME
          </button>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-pink-400 text-xl">⚡</span>
            <h2 className="text-2xl font-bold text-white">Command Center</h2>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700">
          <div className="bg-gray-900/50 px-6 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-auto text-gray-500 text-sm font-mono">SYSTEM V2.4_UPLINK_CHANNEL</div>
          </div>

          <div className="p-6 font-mono text-sm">
            <div className="space-y-2 mb-6">
              <div className="text-green-400">
                <span className="text-gray-600">guest@barbie-code:~$</span> init_contact --protocol="high-priority"
              </div>
              <div className="text-gray-500 pl-4">
                [SYSTEM] Establishing uplink...
              </div>
              <div className="text-gray-500 pl-4">
                [SYSTEM] Encryption: PINK-AES-256 enabled.
              </div>
              <div className="text-gray-500 pl-4">
                [SYSTEM] Ready for input. Please specify your message.
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-pink-400 mb-2">==&gt; EMAIL UPLINK</div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <div className="text-pink-400 mb-2">==&gt; TRANSMISSION CONTENT</div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows={4}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                />
              </div>

              <div className="text-gray-500 text-xs">
                &gt; _
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleSendMessage}
                disabled={!email || !message || isSending}
                className={`bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all inline-flex items-center gap-2 ${
                  !email || !message || isSending
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105'
                }`}
              >
                {isSending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    SENDING TRANSMISSION
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    SEND TRANSMISSION
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-12 border-t border-gray-800 text-center">
          <div className="text-gray-600 text-sm mb-4">© 2024 BarbieCode.io • Built with Pink Precision</div>
          <div className="flex justify-center gap-6 text-gray-500">
            <a href="#" className="hover:text-pink-400 transition-colors">🌐</a>
            <a href="#" className="hover:text-pink-400 transition-colors">💻</a>
            <a href="#" className="hover:text-pink-400 transition-colors">✉️</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
