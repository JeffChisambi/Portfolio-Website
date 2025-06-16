import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { skills, skillCategories } from "../data/skills";
import { Award, BookOpen, Code2, Users, ArrowRight } from "lucide-react";

const About: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const stats = [
    { icon: Code2, value: "50+", label: "Projects Completed" },
    { icon: BookOpen, value: "100K+", label: "Tutorial Views" },
    { icon: Users, value: "5K+", label: "Students Helped" },
    { icon: Award, value: "3.8", label: "GPA Maintained" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/30 dark:from-neutral-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
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
                About Me
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Driven - And{" "}
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Adaptable
              </span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              Passionate about crafting seamless user experiences with expertise
              in UI design and front-end development. Over 3 years of experience
              building modern web applications using HTML, CSS, Tailwind,
              JavaScript, TypeScript, React, and PHP.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: Story Content */}
            <div className="space-y-8">
              <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <p className="animate-fade-in">
                  I'm a Computer Engineering student passionate about full-stack
                  development, AI, and cybersecurity. I explore technologies
                  through hands-on projects, blending HTML, CSS, JavaScript,
                  React, Node.js, PHP, AI APIs, and databases like MySQL and
                  MongoDB. I create educational content to make complex concepts
                  practical and accessible.
                </p>
                <p
                  className="animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Through my studies and personal projects, I've developed
                  expertise in full-stack development, machine learning, and
                  security research. I believe in learning by doing and sharing
                  knowledge with others.
                </p>
                <p
                  className="animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  When I'm not coding, you'll find me creating educational
                  content, exploring new technologies, or contributing to
                  open-source projects. My goal is to bridge the gap between
                  complex technical concepts and practical applications.
                </p>
              </div>

              {/* CTA Button */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <button
                  onClick={() =>
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Image with Stats */}
            <div className="relative">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-white/80 to-white/40 dark:from-neutral-800/80 dark:to-neutral-800/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-neutral-700/50 shadow-2xl">
                  <img
                    src="/images/myimg.jpg"
                    alt="Jeffrey working"
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -right-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 dark:border-neutral-700/50 animate-float">
                    <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                      3.8
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      GPA
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 dark:border-neutral-700/50 animate-bounce-slow">
                    <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                      50+
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      Projects
                    </div>
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  isIntersecting
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                Technical Expertise
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Technologies and tools I work with to bring ideas to life
              </p>
            </div>

            {/* Skills by Category */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.id}
                  className={`bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isIntersecting
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                >
                  <h4
                    className={`text-xl font-bold ${category.color} mb-6 flex items-center space-x-2`}
                  >
                    <div className="w-3 h-3 bg-current rounded-full"></div>
                    <span>{category.name}</span>
                  </h4>
                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category.id)
                      .slice(0, 4)
                      .map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="text-xl">{skill.icon}</span>
                              <span className="font-medium text-neutral-900 dark:text-white text-sm">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${
                                category.id === "frontend"
                                  ? "from-blue-400 to-blue-600"
                                  : category.id === "backend"
                                  ? "from-green-400 to-green-600"
                                  : category.id === "ai"
                                  ? "from-purple-400 to-purple-600"
                                  : category.id === "cybersecurity"
                                  ? "from-red-400 to-red-600"
                                  : "from-orange-400 to-orange-600"
                              } transition-all duration-1000 ease-out`}
                              style={{
                                width: `${isIntersecting ? skill.level : 0}%`,
                                transitionDelay: `${
                                  categoryIndex * 200 + skillIndex * 100
                                }ms`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
