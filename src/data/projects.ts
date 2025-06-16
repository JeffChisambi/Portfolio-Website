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
    githubUrl: "#",
    liveUrl: "#",
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
    githubUrl: "#",
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
      "#",
    featured: false,
  },

  {
    id: "4",
    title: "AI Resume Builder",
    description:
      "Free AI powered Resume Builder.",
    longDescription:
      "An Advanced Ai powered resume builder",
    image:
      "/images/resume.png",
    technologies: ["Three.js", "D3.js", "WebGL", "Python", "FastAPI"],
    category: "ai",
    githubUrl: "#
    featured: false,
  },
  {
    id: "5",
    title: "Blockchain Voting System",
    description:
      "Secure, transparent voting platform using blockchain technology for election integrity.",
    longDescription:
      "A decentralized voting application built on Ethereum blockchain, ensuring vote integrity, transparency, and immutability while maintaining voter privacy through zero-knowledge proofs.",
    image:
      "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    category: "cybersecurity",
    githubUrl: "#",
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
