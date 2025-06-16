import React from "react";
import { ChevronDown, Play, Eye, ArrowRight, Star } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";

const Hero: React.FC = () => {
  const titles = [
    "Full-Stack Developer",
    "AI Enthusiast",
    "Graphic Designer",
    "Content Creator",
  ];

  const currentTitle = useTypewriter(titles, 100, 50, 2000);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContent = () => {
    document.querySelector("#content")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 via-blue-50 to-cyan-100 dark:from-neutral-900 dark:via-purple-900/20 dark:to-blue-900/20">
        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-2xl animate-pulse-slow"></div>

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent dark:via-black/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 dark:border-neutral-700/50 shadow-lg animate-scale-in">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                Available for projects
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-blur-in">
                <span className="block text-neutral-900 dark:text-white">
                  Computer Engineering
                </span>
                <span className="block bg-gradient-to-r from-primary-600 via-accent-500 to-purple-600 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                  Student & Developer
                </span>
              </h1>
            </div>

            {/* Typewriter Subtitle */}
            <div
              className="h-16 flex items-center animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-300 font-medium">
                  <span className="inline-block min-w-0">
                    {currentTitle}
                    <span className="animate-pulse text-primary-500 ml-1">
                      |
                    </span>
                  </span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              Specialized in UI/UX Design, Front-End Development (HTML, CSS,
              Tailwind CSS, JavaScript, TypeScript, React), and Back-End
              Technologies (Node.js, PHP, MySQL, MongoDB). Passionate about
              integrating AI APIs to build intelligent web applications. Also
              experienced in Networking and Electronics, with a drive to create
              innovative digital solutions and share knowledge through impactful
              educational content.
            </p>

            {/* Stats */}
            <div
              className="flex items-center space-x-8 animate-slide-up"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                  10+
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Projects
                </div>
              </div>
              <div className="w-px h-12 bg-neutral-300 dark:bg-neutral-600"></div>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-lg font-semibold text-neutral-900 dark:text-white">
                  0
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  from 0+ reviews
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up"
              style={{ animationDelay: "0.9s" }}
            >
              <button
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Eye className="w-5 h-5" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToContent}
                className="group bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/50 text-neutral-900 dark:text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Tutorials</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* About Me Button */}
            <div
              className="pt-4 animate-slide-up"
              style={{ animationDelay: "1.1s" }}
            >
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 group"
              >
                <span className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-full text-sm font-medium group-hover:border-primary-500 transition-colors duration-300">
                  About Me
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Stats & Visual Elements */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Creative masterpieces text */}
            <div className="text-right space-y-2 animate-slide-down">
              <p className="text-neutral-400 dark:text-neutral-500 text-sm">
                Creative masterpieces
              </p>
              <p className="text-neutral-400 dark:text-neutral-500 text-sm">
                delivered in the last 3 years
              </p>
            </div>

            {/* Large Number Display */}
            <div
              className="text-right animate-scale-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-8xl sm:text-9xl font-bold text-neutral-900 dark:text-white leading-none">
                10+
              </div>
            </div>

            {/* Social Icons */}
            <div
              className="flex justify-end space-x-4 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              {[
                { icon: "🌐", label: "Website" },
                { icon: "🎨", label: "Behance" },
                { icon: "💼", label: "LinkedIn" },
                { icon: "📱", label: "Medium" },
              ].map((social, index) => (
                <div
                  key={social.label}
                  className="w-12 h-12 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/50 rounded-xl flex items-center justify-center text-xl hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {social.icon}
                </div>
              ))}
            </div>

            {/* Trustpilot-style rating */}
            <div
              className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/50 rounded-2xl p-6 shadow-lg animate-rotate-in"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-green-500 fill-current"
                    />
                  ))}
                </div>
                <span className="font-semibold text-neutral-900 dark:text-white">
                  Trustpilot
                </span>
              </div>
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                0
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                from 0+ Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-neutral-400 hover:text-primary-500 transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
