import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  icon: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
  onBack: () => void;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects, onBack }) => {
  return (
    <div className="p-6">
      <button
        onClick={onBack}
        className="flex items-center text-blue-400 hover:text-blue-300 mb-4"
      >
        <ArrowLeft size={20} className="mr-2" /> Back to main page
      </button>
      <h2 className="text-2xl font-bold mb-6">All Projects</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-2">{project.icon}</div>
            <div className="text-lg font-semibold">{project.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;