import React, { useState } from 'react';
import { Briefcase, FolderKanban, Heart, MessageCircle, ChevronLeft, ChevronRight, Github, Linkedin, Twitter, Instagram, Facebook, Youtube, Twitch, MessageSquare, Slack, Mail, ExternalLink } from 'lucide-react';
import ProjectShowcase from './components/ProjectShowcase';

const sections = [
  { id: 'portfolio', name: 'Portfolio', icon: FolderKanban },
  { id: 'business', name: 'Business', icon: Briefcase },
  { id: 'life', name: 'Life', icon: Heart },
  { id: 'pr-wall', name: 'PR Wall', icon: MessageCircle },
];

const socialMedia = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/dhruvvaviya' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/dhruvvaviya' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/dhruvvaviya' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/dhruvvaviya' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/dhruvvaviya' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/dhruvvaviya' },
  { name: 'Twitch', icon: Twitch, url: 'https://twitch.tv/dhruvvaviya' },
  { name: 'Discord', icon: MessageSquare, url: 'https://discord.gg/dhruvvaviya' },
  { name: 'Slack', icon: Slack, url: 'https://slack.com/dhruvvaviya' },
  { name: 'Email', icon: Mail, url: 'mailto:dhruv@example.com' },
];

const projectsData = {
  portfolio: [
    { id: 1, name: 'Project 1', icon: '🚀' },
    { id: 2, name: 'Project 2', icon: '💻' },
    { id: 3, name: 'Project 3', icon: '🎨' },
    { id: 4, name: 'Project 4', icon: '📱' },
    { id: 5, name: 'Project 5', icon: '🤖' },
    { id: 6, name: 'Project 6', icon: '🌐' },
    { id: 7, name: 'Project 7', icon: '📊' },
    { id: 8, name: 'Project 8', icon: '🔧' },
  ],
  business: [
    { id: 9, name: 'Business 1', icon: '💼' },
    { id: 10, name: 'Business 2', icon: '📈' },
    { id: 11, name: 'Business 3', icon: '🏢' },
    { id: 12, name: 'Business 4', icon: '🤝' },
    { id: 13, name: 'Business 5', icon: '📊' },
    { id: 14, name: 'Business 6', icon: '💰' },
    { id: 15, name: 'Business 7', icon: '📱' },
    { id: 16, name: 'Business 8', icon: '🌐' },
  ],
  life: [
    { id: 17, name: 'Life 1', icon: '🏋️' },
    { id: 18, name: 'Life 2', icon: '🎨' },
    { id: 19, name: 'Life 3', icon: '✈️' },
    { id: 20, name: 'Life 4', icon: '📚' },
    { id: 21, name: 'Life 5', icon: '🎵' },
    { id: 22, name: 'Life 6', icon: '🍳' },
    { id: 23, name: 'Life 7', icon: '🏞️' },
    { id: 24, name: 'Life 8', icon: '🎮' },
  ],
  'pr-wall': [
    { id: 25, name: 'PR 1', icon: '🏆' },
    { id: 26, name: 'PR 2', icon: '📰' },
    { id: 27, name: 'PR 3', icon: '🎤' },
    { id: 28, name: 'PR 4', icon: '📺' },
    { id: 29, name: 'PR 5', icon: '🏅' },
    { id: 30, name: 'PR 6', icon: '📝' },
    { id: 31, name: 'PR 7', icon: '🎉' },
    { id: 32, name: 'PR 8', icon: '🤝' },
  ],
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-750 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] finder-window">
          {/* Header */}
          <div className="bg-gray-800 p-4 flex items-center finder-header">
            <div className="flex-1">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <h1 className="text-xl font-semibold">Dhruv Vaviya</h1>
          </div>

          {showAllProjects ? (
            <ProjectShowcase 
              projects={projectsData[activeSection as keyof typeof projectsData]} 
              onBack={() => setShowAllProjects(false)}
            />
          ) : (
            <>
              {/* Main Content */}
              <div className="p-6 lg:flex finder-content">
                {/* Left Side - Name and Description */}
                <div className="lg:w-1/2 lg:pr-8 animate-fadeIn">
                  <h2 className="text-4xl font-bold mb-4">DHRUV VAVIYA</h2>
                  <p className="text-gray-300 mb-6">
                    Passionate developer and creative problem-solver. Specializing in web development,
                    UI/UX design, and innovative software solutions.
                  </p>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                    <div className="flex flex-wrap gap-4">
                      {socialMedia.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <social.icon size={24} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Photo */}
                <div className="lg:w-1/2 animate-slideIn">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Dhruv Vaviya"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Project Icons */}
              <div className="px-6 pb-6">
                <h3 className="text-xl font-semibold mb-4">Featured {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Projects</h3>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 mb-4">
                  {projectsData[activeSection as keyof typeof projectsData].map((project) => (
                    <div key={project.id} className="text-center">
                      <div className="text-3xl mb-2">{project.icon}</div>
                      <div className="text-sm">{project.name}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowAllProjects(true)}
                  className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  See More <ExternalLink size={18} className="ml-2" />
                </button>
              </div>
            </>
          )}

          {/* Section Switcher */}
          <div className="bg-gray-800 p-4 finder-footer">
            <div className="flex justify-between items-center">
              <button className="text-gray-400 hover:text-white">
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <section.icon size={18} />
                    <span>{section.name}</span>
                  </button>
                ))}
              </div>
              <button className="text-gray-400 hover:text-white">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;