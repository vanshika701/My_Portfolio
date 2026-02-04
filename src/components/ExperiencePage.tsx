import { Briefcase, Download, Send, Terminal } from 'lucide-react';
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
    <div className="min-h-screen bg-cyber-black text-white">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-barbie-pink">&gt;_</span> Internships & Mission Control
          </h1>
          <p className="text-[#D02670] text-lg font-medium font-mono">
            // Tracking the professional trajectory of a high-tech software engineer.<br />
            <span className="animate-pulse">[ Protocol initiated ]</span>
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12 border-b border-gray-800 pb-4">
            <Briefcase className="w-5 h-5 text-barbie-pink" />
            <h2 className="text-2xl font-bold font-mono">&gt; Professional Timeline_</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-barbie-pink via-purple-600 to-gray-800"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-16 pb-12 last:pb-0">
                <div className="absolute left-3 top-2 w-6 h-6 bg-cyber-black rounded-full flex items-center justify-center border-2 border-barbie-pink z-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8 hover:border-barbie-pink/30 hover:bg-[#202020] transition-all group">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-barbie-pink transition-colors font-mono">&gt; {exp.title}</h3>
                  <div className="text-gray-400 font-medium mb-3 text-sm font-mono">[ {exp.company} ] • <span className="text-barbie-pink">{exp.year}</span></div>
                  <p className="text-gray-500 leading-relaxed text-sm font-mono">// {exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-gray-800 rounded-[2rem] p-10 text-center mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-barbie-pink/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-[#252525] rounded-2xl flex items-center justify-center text-barbie-pink mb-2">
              <Download className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 font-mono">[ Technical Specifications ]</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto font-mono">Download my full resume to see the complete list of protocols and capabilities.</p>
          <button className="bg-white text-cyber-black px-8 py-3 rounded-full font-bold hover:bg-barbie-pink hover:text-white transition-all inline-flex items-center gap-2 font-mono">
            <Download className="w-4 h-4" />
            ./download_resume.sh
          </button>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-6 h-6 text-barbie-pink" />
            <h2 className="text-2xl font-bold text-white font-mono">&gt; Command Center_</h2>
          </div>
        </div>

        <div className="bg-[#0F0F0F] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          <div className="bg-[#1A1A1A] px-6 py-3 flex items-center gap-2 border-b border-gray-800">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            <div className="ml-auto text-gray-500 text-[10px] font-bold tracking-widest uppercase">SYSTEM V2.4_UPLINK_CHANNEL</div>
          </div>

          <div className="p-8 font-mono text-sm">
            <div className="space-y-2 mb-8 opacity-80">
              <div className="text-barbie-pink">
                <span className="text-green-500">guest@barbie-code:~$</span> init_contact --protocol="high-priority"
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

            <div className="space-y-6 max-w-2xl">
              <div>
                <div className="text-barbie-pink mb-2 font-bold text-xs tracking-wider">==&gt; EMAIL UPLINK</div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barbie-pink transition-colors placeholder-gray-600"
                />
              </div>

              <div>
                <div className="text-barbie-pink mb-2 font-bold text-xs tracking-wider">==&gt; TRANSMISSION CONTENT</div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows={4}
                  className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barbie-pink transition-colors resize-none placeholder-gray-600"
                />
              </div>

              <div className="text-gray-500 text-xs animate-pulse">
                &gt; _
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleSendMessage}
                disabled={!email || !message || isSending}
                className={`bg-barbie-pink text-white px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2 ${!email || !message || isSending
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:shadow-lg hover:shadow-barbie-pink/40 hover:scale-105'
                  }`}
              >
                {isSending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    SENDING...
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

        <footer className="mt-20 pt-12 border-t border-gray-800 text-center text-xs text-gray-600">
          © 2024 BarbieCode.io • Built with Pink Precision
        </footer>
      </div>
    </div>
  );
}
