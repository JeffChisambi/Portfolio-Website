import React from "react";
import { Code, Heart, Coffee, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                Jeffrey C.
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Computer Engineering student passionate about creating innovative
              solutions and sharing knowledge through educational content.
            </p>
            <div className="flex items-center space-x-2 text-sm text-neutral-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {["Home", "About", "Projects", "Content", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      document
                        .querySelector(`#${item.toLowerCase()}`)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-left text-neutral-400 hover:text-white transition-colors text-sm py-1 hover:translate-x-1 transform transition-transform duration-200"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Get In Touch</h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <p className="hover:text-white transition-colors cursor-pointer">
                jeffchisambi@gmail.com
              </p>
              <p>Mzuzu Malawi</p>
              <p className="text-green-400 font-medium">
                Available for freelance projects
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: "🌐", label: "Website" },
                { icon: "💼", label: "LinkedIn" },
                { icon: "📺", label: "YouTube" },
                { icon: "🐙", label: "GitHub" },
              ].map((social, index) => (
                <div
                  key={social.label}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-lg hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110"
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3 text-sm text-neutral-400">
              <span>© {currentYear} Jeffrey C. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-sm text-neutral-400">
                Built with React, TypeScript & Tailwind CSS
              </span>

              <button
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
