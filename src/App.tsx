import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Users, 
  Briefcase, 
  Target, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center">
              <Target className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">CoralSearch</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">About</a>
            <a href="#process" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Process</a>
            <a href="#contact" className="px-5 py-2.5 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm">
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-zinc-100 px-4 pt-2 pb-6 space-y-4"
          >
            <a href="#services" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-zinc-900">Services</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-zinc-900">About</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-zinc-900">Process</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center px-5 py-3 bg-zinc-900 text-white rounded-xl font-medium">
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold uppercase tracking-wider mb-6">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              Trusted by Fortune 500 Companies
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-8">
              Finding the <span className="text-zinc-400">Right Talent</span> for Your Next Big Move.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-2xl">
              We bridge the gap between world-class organizations and exceptional leaders. 
              Our data-driven approach ensures you find the perfect fit, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group">
                Start Your Search
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-full font-semibold hover:bg-zinc-50 transition-all">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-zinc-50 rounded-full -z-10 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-emerald-50 rounded-full -z-10 blur-3xl opacity-30" />
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Executive Search",
      description: "Identifying and attracting top-tier leadership talent for C-suite and senior management roles."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Strategic Recruitment",
      description: "End-to-end recruitment solutions for specialized technical and professional positions."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "RPO Services",
      description: "Scaling your internal recruitment capabilities through our dedicated process outsourcing."
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">Our Expertise</h2>
          <p className="text-zinc-600">Comprehensive talent solutions tailored to your organization's unique needs and growth stage.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{service.description}</p>
              <button className="mt-6 text-sm font-semibold text-zinc-900 flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Successful Placements", value: "2,500+" },
    { label: "Client Retention", value: "98%" },
    { label: "Average Time to Fill", value: "24 Days" },
    { label: "Global Network", value: "50k+" }
  ];

  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-zinc-400 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to find your next star?</h2>
              <p className="text-zinc-400 text-lg mb-12">
                Let's discuss how we can help you build a world-class team. 
                Our experts are ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hello@coralsearch.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+1 (555) 000-0000</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>123 Talent Way, San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all" placeholder="Tell us about your hiring needs..." />
                </div>
                <button className="w-full py-4 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all shadow-lg">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
                <Target className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900">CoralSearch</span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-8">
              Strategic talent acquisition for the world's most innovative organizations. 
              We help you build teams that change the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Executive Search</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Tech Recruitment</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">RPO Solutions</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Consulting</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© 2026 Coral Search. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        
        {/* About Section */}
        <section id="about" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/recruitment/800/1000" 
                  alt="Team working" 
                  className="rounded-[3rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-zinc-900">Expert Consultants</span>
                  </div>
                  <p className="text-xs text-zinc-500">Ready to help you scale your team.</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold text-zinc-900 mb-6">Why Organizations Choose Coral Search</h2>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  We don't just fill seats; we build legacies. Our methodology combines deep industry insights with advanced behavioral assessment tools to ensure long-term cultural and strategic alignment.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Deep Industry Specialization",
                    "Proprietary Talent Assessment Framework",
                    "Global Reach with Local Expertise",
                    "Commitment to Diversity & Inclusion"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="text-zinc-900 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-12 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
