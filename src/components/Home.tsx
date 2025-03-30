import React, { useState } from 'react';
import Card from './Card';

interface CardData {
  id: number;
  name: string;
  link: string;
  image?: string;
  description: string;
  skills: string[];
}

const App: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const cardsData: CardData[] = [
    // Personal Projects
    {
      id: 1,
      name: "geoChat",
      link: "https://github.com/ShaneBerhoff/geoChat",
      image: "https://via.placeholder.com/150",
      description: "Built a full-stack, anonymous live chat app using React, NodeJS, MongoDB, Docker, AWS, and Socket.io. Achieved 99 unique users, 1000+ messages, and 600+ sessions using OSM geofencing data (87 zones).",
      skills: ["React", "NodeJS", "MongoDB", "Docker", "AWS", "Socket.io"]
    },
    {
      id: 2,
      name: "Solo",
      link: "https://github.com/TheMaxRob/Solo",
      image: "https://via.placeholder.com/150",
      description: "Implemented a globe-based navigation system with SwiftUI and MapKit to display events. Utilized Firebase for real-time data syncing, authentication, and caching.",
      skills: ["SwiftUI", "MapKit", "Firebase"]
    },
    {
      id: 3,
      name: "Worldline",
      link: "https://github.com/emory-worldline/worldline",
      image: "https://via.placeholder.com/150",
      description: "Developed a data visualizer for photo library metadata using React Native, Expo, and Mapbox. Created custom animations and managed dynamic data clusters.",
      skills: ["React Native", "Expo", "Mapbox"]
    },
    {
      id: 4,
      name: "Venmo-Receipt-Scanner",
      link: "https://github.com/TheMaxRob/Venmo-Receipt-Scanner",
      image: "https://via.placeholder.com/150",
      description: "A full-stack app that parses receipt items using React Native, Python/Flask, Pytesseract, and OpenCV. Integrates with the Venmo API for automated transactions.",
      skills: ["React Native", "Python", "Flask", "Pytesseract", "OpenCV"]
    },
    {
      id: 5,
      name: "Raspberry Pi Friend Recognizer",
      link: "https://github.com/TheMaxRob/RpiFaceDetector",
      image: "https://via.placeholder.com/150",
      description: "An in-progress facial recognition system using C++ and OpenCV on a Raspberry Pi. Designed to differentiate friends in real time with a Pi Camera.",
      skills: ["C++", "OpenCV", "Raspberry Pi"]
    },
    // Professional Experience
    {
      id: 6,
      name: "nCent Holdings - Full-Stack Engineer Intern",
      link: "https://example.com/ncent-holdings",
      image: "https://via.placeholder.com/150",
      description: "Serving as a Full-Stack Engineer Intern since 10/2024, developing the nCent platform with React and Node.js. Built the database system to enable users to monetize their personal data using Agile workflows and Jira.",
      skills: ["React", "Node.js", "Agile", "Jira"]
    },
    {
      id: 7,
      name: "Emory Computer Research Lab - Undergraduate Researcher",
      link: "https://www.emory.edu",
      image: "https://via.placeholder.com/150",
      description: "Conducting research on creating programmable IoT ecosystems with simultaneous RFID Tag Readers. Based in Atlanta, GA since 09/2024.",
      skills: ["IoT", "RFID", "Research"]
    },
    {
      id: 8,
      name: "Guardian Owl Digital - Development Intern",
      link: "https://example.com/guardian-owl-digital",
      image: "https://via.placeholder.com/150",
      description: "Worked as a Development Intern from 06/2024 to 08/2024, managing blog content, optimizing SEO, and creating a GPT model for advertising and website audits while collaborating with clients on marketing strategies.",
      skills: ["SEO", "GPT", "Marketing"]
    },
    // Community Involvement
    {
      id: 9,
      name: "Emory Impact Investing Group - Senior Analyst",
      link: "https://example.com/emory-impact-investing",
      image: "https://via.placeholder.com/150",
      description: "Managed a $250,000 investment fund to provide microloans and pro-bono consulting to entrepreneurs in Atlanta. Served from 01/2023 to 09/2024.",
      skills: ["Investment", "Consulting", "Finance"]
    },
    {
      id: 10,
      name: "Emory Rock Climbing Team - Member",
      link: "https://example.com/emory-rock-climbing",
      image: "https://via.placeholder.com/150",
      description: "Active member of the Emory Rock Climbing Team from 08/2023 to 12/2024, promoting teamwork, physical endurance, and outdoor activity.",
      skills: ["Teamwork", "Fitness", "Climbing"]
    },
    {
      id: 11,
      name: "Kappa Alpha Epsilon - Philanthropy and Fundraising Chair",
      link: "https://example.com/kae",
      image: "https://via.placeholder.com/150",
      description: "Leading philanthropy and fundraising efforts since 10/2024, organizing community service and charity events for Kappa Alpha Epsilon.",
      skills: ["Philanthropy", "Fundraising", "Leadership"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Left Column */}
      <div className="fixed top-0 left-0 w-1/2 h-screen flex flex-col justify-center items-center border-r border-gray-300 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Max Roberts</h1>
        <div className="flex space-x-6">
          {/* Email Icon */}
          <a href="mailto:maxroberts2003@gmail.com" className="hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m8 0l-8 8m8-8l-8-8"
              />
            </svg>
          </a>
          {/* Resume Icon */}
          <a href="/MaxRobertsResume.pdf" download className="hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h10M7 11h10m-7 4h7"
              />
            </svg>
          </a>
          {/* GitHub Icon */}
          <a
            href="https://github.com/TheMaxRob"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.012-1.243-.018-2.25-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.605-.015 2.895-.015 3.286 0 .323.216.698.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/maxwroberts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-700"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452H17.36v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.134 1.444-2.134 2.937v5.669H10.27V9h3.114v1.561h.045c.434-.82 1.494-1.683 3.074-1.683 3.289 0 3.895 2.163 3.895 4.977v6.597zM5.337 7.433a1.803 1.803 0 01-1.806-1.806 1.803 1.803 0 011.806-1.806 1.803 1.803 0 011.806 1.806 1.803 1.803 0 01-1.806 1.806zm1.783 13.019H3.554V9h3.566v11.452zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.451C0 23.207.792 24 1.771 24h20.451C23.207 24 24 23.207 24 22.225V1.771C24 .792 23.207 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Column: Cards & Nav */}
      <div className="ml-[50%] w-1/2 p-6 overflow-y-auto h-screen scroll-smooth">
  {/* Navigation Bar */}
  <nav className="mb-6 flex justify-center">
    <div className="flex space-x-4">
      <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="px-3 py-1 hover:bg-gray-200 rounded">
        About
      </button>
      <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="px-3 py-1 hover:bg-gray-200 rounded">
        Experience
      </button>
      <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-3 py-1 hover:bg-gray-200 rounded">
        Projects
      </button>
      <button onClick={() => document.getElementById('involvement')?.scrollIntoView({ behavior: 'smooth' })} className="px-3 py-1 hover:bg-gray-200 rounded">
        Involvement
      </button>
    </div>
  </nav>

  {/* About Section */}
  <section id="about" className="mb-10">
    <h2 className="text-2xl font-semibold mb-2">About Me</h2>
    <p className="text-gray-700">
      I'm Max Roberts, a computer science student at Emory University passionate about building full-stack software that blends engaging user experiences with powerful backend infrastructure. From geofenced chat apps to interactive map visualizations and embedded systems, I love bringing ideas to life across platforms.
    </p>
  </section>

  {/* Experience Section */}
  <section id="experience" className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
    {cardsData
      .filter(card => card.name.includes("Intern") || card.name.includes("Research"))
      .map(card => (
        <Card key={card.id} {...card} selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />
      ))}
  </section>

  {/* Projects Section */}
  <section id="projects" className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    {cardsData
      .filter(card => card.name !== undefined && !card.name.includes("Intern") && !card.name.includes("Research") && !card.name.includes("Emory"))
      .map(card => (
        <Card key={card.id} {...card} selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />
      ))}
  </section>

  {/* Involvement Section */}
  <section id="involvement" className="mb-10">
    <h2 className="text-2xl font-semibold mb-4">Involvement</h2>
    {cardsData
      .filter(card => card.name.includes("Emory"))
      .map(card => (
        <Card key={card.id} {...card} selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />
      ))}
  </section>
</div>

    </div>
  );
};

export default App;