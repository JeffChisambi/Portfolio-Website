export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'cybersecurity' | 'tools';
  icon: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React/Next.js', level: 95, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 90, category: 'frontend', icon: '🔷' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend', icon: '🎨' },
  { name: 'Vue.js', level: 85, category: 'frontend', icon: '💚' },
  { name: 'Three.js', level: 75, category: 'frontend', icon: '🎲' },
  
  // Backend
  { name: 'Node.js', level: 92, category: 'backend', icon: '🟢' },
  { name: 'Python', level: 90, category: 'backend', icon: '🐍' },
  { name: 'PostgreSQL', level: 85, category: 'backend', icon: '🐘' },
  { name: 'MongoDB', level: 82, category: 'backend', icon: '🍃' },
  { name: 'GraphQL', level: 80, category: 'backend', icon: '📊' },
  
  // AI/ML
  { name: 'TensorFlow', level: 85, category: 'ai', icon: '🤖' },
  { name: 'PyTorch', level: 82, category: 'ai', icon: '🔥' },
  { name: 'OpenAI API', level: 88, category: 'ai', icon: '🧠' },
  { name: 'Computer Vision', level: 78, category: 'ai', icon: '👁️' },
  { name: 'NLP', level: 80, category: 'ai', icon: '💬' },
  
  // Cybersecurity
  { name: 'Ethical Hacking', level: 82, category: 'cybersecurity', icon: '🔒' },
  { name: 'Cryptography', level: 85, category: 'cybersecurity', icon: '🔐' },
  { name: 'Network Security', level: 80, category: 'cybersecurity', icon: '🛡️' },
  { name: 'Blockchain', level: 75, category: 'cybersecurity', icon: '⛓️' },
  
  // Tools
  { name: 'Git/GitHub', level: 95, category: 'tools', icon: '📚' },
  { name: 'Docker', level: 88, category: 'tools', icon: '🐳' },
  { name: 'AWS', level: 85, category: 'tools', icon: '☁️' },
  { name: 'Linux', level: 90, category: 'tools', icon: '🐧' },
  { name: 'CI/CD', level: 82, category: 'tools', icon: '🔄' },
];

export const skillCategories = [
  { id: 'frontend', name: 'Frontend', color: 'text-blue-500' },
  { id: 'backend', name: 'Backend', color: 'text-green-500' },
  { id: 'ai', name: 'AI/ML', color: 'text-purple-500' },
  { id: 'cybersecurity', name: 'Security', color: 'text-red-500' },
  { id: 'tools', name: 'Tools', color: 'text-orange-500' },
];