import { Mail, MessageSquare, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            LET'S CONNECT
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can pink-ify your production environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-pink-300 transition-all hover:shadow-xl text-center">
            <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm mb-3">Drop me a line anytime</p>
            <a href="mailto:hello@cyberbarbie.sh" className="text-pink-500 font-medium hover:underline">
              hello@cyberbarbie.sh
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-pink-300 transition-all hover:shadow-xl text-center">
            <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600 text-sm mb-3">Currently based in</p>
            <p className="text-pink-500 font-medium">San Francisco, CA</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-pink-300 transition-all hover:shadow-xl text-center">
            <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
            <p className="text-gray-600 text-sm mb-3">Average reply time</p>
            <p className="text-pink-500 font-medium">Within 24 hours</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-6 h-6 text-pink-500" />
            <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-medium transition-all inline-flex items-center gap-2 ${
                isSending
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105'
              }`}
            >
              {isSending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prefer Social Media?</h2>
          <p className="text-gray-700 mb-8">Connect with me on your favorite platform</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-white text-gray-700 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              GitHub
            </a>
            <a
              href="#"
              className="bg-white text-gray-700 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="bg-white text-gray-700 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
