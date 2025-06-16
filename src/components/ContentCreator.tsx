import React, { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  Youtube,
  Play,
  Users,
  Eye,
  ThumbsUp,
  Bell,
  ExternalLink,
  Star,
} from "lucide-react";

const ContentCreator: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [email, setEmail] = useState("");

  const channelStats = [
    { icon: Users, value: "12.5K", label: "Subscribers" },
    { icon: Eye, value: "500K+", label: "Total Views" },
    { icon: ThumbsUp, value: "15K+", label: "Likes" },
    { icon: Play, value: "85", label: "Videos" },
  ];

  const videos = [
    {
      id: "1",
      title: "Complete React TypeScript Tutorial - Build a Modern Web App",
      thumbnail: "/images/youtubeCo.png",
      duration: "45:32",
      views: "25K",
      uploadDate: "2 weeks ago",
      category: "Web Development",
    },
    {
      id: "2",
      title: "Machine Learning with Python - Complete Beginner Course",
      thumbnail: "/images/youtubeCo.png",
      duration: "1:15:22",
      views: "42K",
      uploadDate: "1 month ago",
      category: "AI/ML",
    },
    {
      id: "3",
      title: "Cybersecurity Fundamentals - Ethical Hacking Basics",
      thumbnail: "/images/youtubeCo.png",
      duration: "38:15",
      views: "18K",
      uploadDate: "3 weeks ago",
      category: "Cybersecurity",
    },
    {
      id: "4",
      title: "Building Mobile Apps with React Native - Step by Step",
      thumbnail: "/images/youtubeCo.png",
      duration: "52:48",
      views: "33K",
      uploadDate: "2 months ago",
      category: "Mobile Development",
    },
    {
      id: "5",
      title: "Node.js Backend Development - REST API Tutorial",
      thumbnail: "/images/youtubeCo.png",
      duration: "41:20",
      views: "28K",
      uploadDate: "1 month ago",
      category: "Backend",
    },
    {
      id: "6",
      title: "Blockchain Development - Smart Contracts with Solidity",
      thumbnail: "/images/youtubeCo.png",
      duration: "56:12",
      views: "35K",
      uploadDate: "2 weeks ago",
      category: "Blockchain",
    },
  ];

  const categories = [
    { name: "Web Development", icon: "🌐", count: 25 },
    { name: "AI/Machine Learning", icon: "🤖", count: 18 },
    { name: "Cybersecurity", icon: "🔒", count: 15 },
    { name: "Mobile Development", icon: "📱", count: 12 },
    { name: "Backend Development", icon: "⚙️", count: 10 },
    { name: "Blockchain", icon: "⛓️", count: 5 },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
    alert("Thank you for subscribing to my newsletter!");
  };

  return (
    <section
      id="content"
      className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-neutral-900 dark:via-purple-900/10 dark:to-pink-900/10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-accent-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
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
            <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 dark:border-neutral-700/50 shadow-lg mb-6">
              <Youtube className="w-6 h-6 text-red-500" />
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                Content Creator
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Educational{" "}
              <span className="bg-gradient-to-r from-red-500 to-accent-500 bg-clip-text text-transparent">
                Content
              </span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              Sharing knowledge through educational programming tutorials and
              tech insights
            </p>
          </div>

          {/* Channel Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {channelStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  isIntersecting
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-accent-500 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tutorial Categories */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-12">
              Tutorial Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <div
                  key={category.name}
                  className={`bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 dark:border-neutral-700/50 shadow-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/20 dark:hover:to-primary-800/20 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    isIntersecting
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    {category.name}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    {category.count} videos
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Videos */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
                Latest Videos
              </h3>
              <a
                href="https://youtube.com/@jeffreychisambi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors font-semibold"
              >
                <span>View All</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`group bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 dark:border-neutral-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                    isIntersecting
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      {video.duration}
                    </div>
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-semibold">
                      {video.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-neutral-900 dark:text-white mb-3 line-clamp-2 group-hover:text-red-500 transition-colors leading-tight">
                      {video.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="font-medium">{video.views} views</span>
                      <span>{video.uploadDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-br from-primary-50 via-accent-50 to-purple-50 dark:from-primary-900/20 dark:via-accent-900/20 dark:to-purple-900/20 rounded-3xl p-12 md:p-16 text-center border border-white/20 dark:border-neutral-700/50 shadow-lg">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl mb-8">
              <Bell className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Stay Updated with Latest Tutorials
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Subscribe to my newsletter and never miss new programming
              tutorials, tech insights, and exclusive content delivered straight
              to your inbox.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-lg mx-auto mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-neutral-400 dark:placeholder-neutral-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center space-x-8">
              <a
                href="https://youtube.com/@jeffreychisambi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-red-500 hover:text-red-600 transition-colors font-semibold"
              >
                <Youtube className="w-6 h-6" />
                <span>Subscribe on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreator;
