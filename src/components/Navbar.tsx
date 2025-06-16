import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Code,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Content", href: "#content" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/jeffchisambi", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jeffreychisambi",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@jeffreychisambi",
      label: "YouTube",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-neutral-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center space-x-3 text-xl font-bold text-neutral-900 dark:text-white hover:text-primary-500 transition-all duration-300 group"
            >
              {/* <div className="relative p-3 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Code className="h-6 w-6 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-accent-400 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div> */}
              <span className="hidden sm:block bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
                Jeffrey C.
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: `${(index + 5) * 100}ms` }}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}

            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-600 mx-2"></div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-neutral-800 dark:to-neutral-700 text-neutral-600 dark:text-neutral-300 hover:from-primary-100 hover:to-accent-100 dark:hover:from-neutral-700 dark:hover:to-neutral-600 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md animate-fade-in"
              style={{ animationDelay: "800ms" }}
            >
              <div className="relative">
                {isDark ? (
                  <Sun className="h-5 w-5 animate-rotate-in" />
                ) : (
                  <Moon className="h-5 w-5 animate-rotate-in" />
                )}
              </div>
            </button>

            {/* Contact Button */}
            <button
              onClick={() => scrollToSection("#contact")}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "900ms" }}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-neutral-800 dark:to-neutral-700 text-neutral-600 dark:text-neutral-300 hover:from-primary-100 hover:to-accent-100 dark:hover:from-neutral-700 dark:hover:to-neutral-600 transition-all duration-300 hover:scale-110 shadow-sm"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-neutral-800 dark:to-neutral-700 text-neutral-600 dark:text-neutral-300 hover:from-primary-100 hover:to-accent-100 dark:hover:from-neutral-700 dark:hover:to-neutral-600 transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    isOpen
                      ? "opacity-0 rotate-180 scale-50"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-180 scale-50"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-t border-white/20 dark:border-neutral-700/50`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 ${
                isOpen ? "animate-menu-slide" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </button>
          ))}

          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-center space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-110 ${
                    isOpen ? "animate-menu-fade" : ""
                  }`}
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("#contact")}
              className={`w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                isOpen ? "animate-menu-fade" : ""
              }`}
              style={{ animationDelay: "800ms" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
