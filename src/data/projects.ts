export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "ai" | "cybersecurity";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Captrix",
    description:
      "An AI image caption generator and social content caption generator",
    longDescription:
      "An intelligent web-based tool that automatically generates accurate and creative captions for any uploaded image. Users can upload photos and receive instant captions powered by advanced AI models. The system supports multiple languages and allows users to choose the tone of the caption.",
    image: "/images/captAI.png",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "TensorFlow",
      "Node.js",
      "MongoDB",
    ],
    category: "ai",
    githubUrl: "https://github.com/jeffreyc/ai-task-manager",
    liveUrl: "https://ai-taskmanager.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Tech Club",
    description: "A full-stack wep for University of Livingstonia engineers ",
    longDescription:
      "A secure system for learning, posting, earning with projects in software and electronics",
    image: "/images/gen.png",
    technologies: [
      "React ",
      "Node.js",
      "Socket.io",
      "Cryptography",
      "PostgreSQL",
    ],
    category: "web",
    githubUrl: "https://github.com/jeffreyc/securechat",
    featured: true,
  },
  {
    id: "3",
    title: "Maphunzilo",
    description: "An E learning Dashboard",
    longDescription: "An E learning Dashboard template",
    image: "/images/delearn.png",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Chart.js"],
    category: "web",
    githubUrl: "#",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.jeffreyc.ecotracker",
    featured: false,
  },
  {
    id: "4",
    title: "Neural Network Visualizer",
    description:
      "Interactive web app for visualizing and understanding neural network architectures.",
    longDescription:
      "An educational tool that allows users to build, train, and visualize neural networks in real-time, making machine learning concepts more accessible through interactive 3D visualizations.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Three.js", "D3.js", "WebGL", "Python", "FastAPI"],
    category: "ai",
    githubUrl: "https://github.com/jeffreyc/nn-visualizer",
    liveUrl: "https://nn-visualizer.netlify.app",
    featured: false,
  },
  {
    id: "5",
    title: "Smart Home Dashboard",
    description:
      "IoT dashboard for monitoring and controlling smart home devices with voice commands.",
    longDescription:
      "A comprehensive IoT management platform that integrates various smart home devices, provides real-time monitoring, energy usage analytics, and supports voice control through custom speech recognition.",
    image:
      "https://images.pexels.com/photos/4062275/pexels-photo-4062275.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Arduino", "Raspberry Pi", "MQTT", "InfluxDB"],
    category: "web",
    githubUrl: "https://github.com/jeffreyc/smart-home",
    featured: false,
  },
  {
    id: "6",
    title: "Blockchain Voting System",
    description:
      "Secure, transparent voting platform using blockchain technology for election integrity.",
    longDescription:
      "A decentralized voting application built on Ethereum blockchain, ensuring vote integrity, transparency, and immutability while maintaining voter privacy through zero-knowledge proofs.",
    image:
      "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    category: "cybersecurity",
    githubUrl: "https://github.com/jeffreyc/blockchain-voting",
    featured: true,
  },
];

export const categories = [
  { id: "all", name: "All Projects", count: projects.length },
  {
    id: "web",
    name: "Web Apps",
    count: projects.filter((p) => p.category === "web").length,
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    count: projects.filter((p) => p.category === "mobile").length,
  },
  {
    id: "ai",
    name: "AI/ML",
    count: projects.filter((p) => p.category === "ai").length,
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    count: projects.filter((p) => p.category === "cybersecurity").length,
  },
];
