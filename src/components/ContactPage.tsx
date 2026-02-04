import { Mail, MessageSquare, Send, MapPin, Clock, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  // REPLACE THIS WITH YOUR REAL EMAIL
  const CONTACT_EMAIL = 'hello@cyberbarbie.sh';

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSending(true);

    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Simulate network delay for "sending" effect
    setTimeout(() => {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setIsSending(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Opening your email client...');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-20">
          <div className="inline-block bg-[#3D0C1F] text-barbie-pink px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 border border-barbie-pink/20 font-mono">
            // LET'S CONNECT
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 font-mono">
            <span className="text-barbie-pink">&gt;_</span> Get In Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light font-mono">
            /* Have a project in mind? Let's discuss how we can pink-ify your production environment. */
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-gray-800 hover:border-barbie-pink/30 hover:bg-[#202020] transition-all text-center group">
            <div className="w-14 h-14 rounded-2xl bg-[#252525] flex items-center justify-center mx-auto mb-6 text-barbie-pink group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white mb-2 font-mono">[ Email ]</h3>
            <p className="text-gray-500 text-sm mb-3 font-mono">Drop me a line anytime</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-barbie-pink font-bold hover:underline font-mono">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-gray-800 hover:border-barbie-pink/30 hover:bg-[#202020] transition-all text-center group">
            <div className="w-14 h-14 rounded-2xl bg-[#252525] flex items-center justify-center mx-auto mb-6 text-barbie-pink group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white mb-2 font-mono">[ Location ]</h3>
            <p className="text-gray-500 text-sm mb-3 font-mono">Currently based in</p>
            <p className="text-barbie-pink font-bold font-mono">San Francisco, CA</p>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-[2rem] border border-gray-800 hover:border-barbie-pink/30 hover:bg-[#202020] transition-all text-center group">
            <div className="w-14 h-14 rounded-2xl bg-[#252525] flex items-center justify-center mx-auto mb-6 text-barbie-pink group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white mb-2 font-mono">[ Response Time ]</h3>
            <p className="text-gray-500 text-sm mb-3 font-mono">Average reply time</p>
            <p className="text-barbie-pink font-bold font-mono">Within 24 hours</p>
          </div>
        </div>

        {/* Command Center / Terminal Form */}
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

            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
              <div>
                <div className="text-barbie-pink mb-2 font-bold text-xs tracking-wider">==&gt; IDENTITY_STRING (NAME)</div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  required
                  className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barbie-pink transition-colors placeholder-gray-600 font-mono"
                />
              </div>

              <div>
                <div className="text-barbie-pink mb-2 font-bold text-xs tracking-wider">==&gt; SOURCE_ADDRESS (EMAIL)</div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.com"
                  required
                  className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barbie-pink transition-colors placeholder-gray-600 font-mono"
                />
              </div>

              <div>
                <div className="text-barbie-pink mb-2 font-bold text-xs tracking-wider">==&gt; TRANSMISSION_HEADER (SUBJECT)</div>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry"
                  required
                  className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barbie-pink transition-colors placeholder-gray-600 font-mono"
                />
              </div>

              <div>
                <div className="text-barbie-pink mb-2 font-bold text-xs tracking-wider">==&gt; PAYLOAD_DATA (MESSAGE)</div>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message here..."
                  rows={4}
                  required
                  className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-barbie-pink transition-colors resize-none placeholder-gray-600 font-mono"
                />
              </div>

              <div className="text-gray-500 text-xs animate-pulse">
                &gt; _
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSending || !formData.email || !formData.message}
                  className={`bg-barbie-pink text-white px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2 font-sans ${isSending || !formData.email || !formData.message
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
            </form>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-800 text-center text-gray-600 text-xs">
          © 2024 CyberBarbie.sh • Connect on Social
        </div>
      </div>
    </div>
  );
}
