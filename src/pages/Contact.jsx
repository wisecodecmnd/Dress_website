import { useState } from 'react';
import { Mail, Instagram, MessageCircle, Send } from 'lucide-react';
import { useToast } from '../hooks/useToast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      showToast("Message sent! We'll be in touch soon.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="pt-32 md:pt-48 pb-20 md:pb-32 section-padding min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h1 className="text-editorial text-5xl md:text-7xl lg:text-8xl mb-8">
              LET'S<br />TALK.
            </h1>
            <p className="text-body text-lg mb-12 max-w-md">
              Questions about sizing, shipping, or just want to say hello? We're here.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@noiranddenim.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-secondary">EMAIL</p>
                  <p className="text-sm font-medium">hello@noiranddenim.com</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-secondary">INSTAGRAM</p>
                  <p className="text-sm font-medium">@noiranddenim</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-secondary">WHATSAPP</p>
                  <p className="text-sm font-medium">+91 98765 43210</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs font-semibold tracking-widest text-secondary block mb-2">NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-widest text-secondary block mb-2">EMAIL</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-widest text-secondary block mb-2">PHONE</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold tracking-widest text-secondary block mb-2">MESSAGE</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={16} />
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
