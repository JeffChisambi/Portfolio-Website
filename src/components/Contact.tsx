import React, { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Youtube,
  Twitter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jeffchisambi@gmail.com",
      href: "mailto:jeffchisambi@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+265 (990) 342-842",
      href: "tel:+265990342842",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Malawi, Mzuzu",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/jeffchisambi",
      label: "GitHub",
      color: "hover:text-neutral-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jeffchisambi",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@jeffreychisambi",
      label: "YouTube",
      color: "hover:text-red-600",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/jeffreychisambi",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/30 dark:from-neutral-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 dark:border-neutral-700/50 shadow-lg mb-6">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                Contact
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  innovation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className={`flex items-center space-x-6 p-6 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                      isIntersecting
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-lg">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                        {info.label}
                      </div>
                      <a
                        href={info.href}
                        className="text-lg text-neutral-900 dark:text-white font-semibold hover:text-primary-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 text-neutral-600 dark:text-neutral-400 ${social.color} transform hover:scale-110 animate-scale-in`}
                      style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <div
                className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 dark:border-neutral-700/50 shadow-lg animate-fade-in"
                style={{ animationDelay: "1s" }}
              >
                <div className="h-56 bg-gradient-to-br from-primary-100 via-accent-100 to-purple-100 dark:from-primary-900/20 dark:via-accent-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                      Mzuzu Malawi.
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Available for remote work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-neutral-700/50 shadow-lg animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder-neutral-400 dark:placeholder-neutral-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder-neutral-400 dark:placeholder-neutral-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder-neutral-400 dark:placeholder-neutral-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none placeholder-neutral-400 dark:placeholder-neutral-500"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center space-x-3 text-green-600 bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl animate-scale-in">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center space-x-3 text-red-600 bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl animate-scale-in">
                    <AlertCircle className="w-6 h-6" />
                    <span className="font-medium">
                      Failed to send message. Please try again.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full flex items-center justify-center space-x-3 py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    status === "sending"
                      ? "bg-neutral-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  } text-white`}
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
