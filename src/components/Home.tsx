import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import rawCards from '../cards.json';

export enum CardType {
  Project = 'Project',
  Experience = 'Experience',
  Involvement = 'Involvement'
}

interface rawCardData {
  id: number;
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  description?: string;
  skills: string[];
  type: string;
  startDate?: string;
  endDate?: string;
}

interface CardData {
  id: number;
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  description?: string;
  skills: string[];
  type: CardType;
  startDate: Date | null;
  endDate: Date | "Present";
}

const App: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>('about');

  const handleSelectSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };
  
  const handleResetFilters = () => {
    setSelectedSkills([]);
  };

  // Section Refs
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const involvementRef = useRef<HTMLElement>(null);




  const cardsData: CardData[] = (rawCards as rawCardData[]).map((card) => ({
    ...card,
    type: card.type as CardType,
    startDate: card.startDate ? new Date(card.startDate) : null,
    endDate:
    card.endDate === 'Present'
      ? 'Present'
      : card.endDate
        ? new Date(card.endDate)
        : new Date()
  }));
  

  // IntersectionObserver - section tracking
  useEffect(() => {
    const sections = [
      { id: 'about', ref: aboutRef },
      { id: 'experience', ref: experienceRef },
      { id: 'projects', ref: projectsRef },
      { id: 'involvement', ref: involvementRef }
    ];

    const observerOptions = {
      root: null,
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]">
      {/* Global Nav Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] backdrop-blur-sm shadow-md z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center space-x-4">
          <button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              setActiveSection("about");
            }}
            className={`px-4 py-2 rounded-full transition-all ${activeSection === 'about' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            About
          </button>
          <button
            onClick={() => {
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              setActiveSection("experience");
            }}
            className={`px-4 py-2 rounded-full transition-all ${activeSection === 'experience' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            Experience
          </button>
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              setActiveSection("projects");
            }}
            className={`px-4 py-2 rounded-full transition-all ${activeSection === 'projects' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            Projects
          </button>
          <button
            onClick={() => {
              document.getElementById('involvement')?.scrollIntoView({ behavior: 'smooth' });
              setActiveSection("involvement");
            }}
            className={`px-4 py-2 rounded-full transition-all ${activeSection === 'involvement' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-500 hover:bg-gray-200'}`}
          >
            Involvement
          </button>
        </div>
      </nav>

      {/* Left Col */}
      <div className="fixed top-0 left-0 w-1/2 h-screen flex flex-col gap-2 justify-center items-center border-r">
        <h1 className="text-3xl font-bold text-[var(--brand-text)]">Hey! I&rsquo;m Max Roberts.</h1>
        <h3 className='text-lg font-semibold mb-4 text-[var(--brand-text)]'>Welcome to my website :)</h3>
        <div className="flex space-x-18">
          {/* Email Icon */}
          <a href="mailto:maxroberts2003@gmail.com" className="hover:opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline ml-1 text-[var(--brand-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
          </svg>

          </a>
          {/* Resume */}
          <a href="/MaxRobertsResumePDF.pdf" download className="hover:opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline ml-1 text-[var(--brand-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8M8 8h4m2-6H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
          </svg>
          </a>
          {/* GitHub */}
          <a href="https://github.com/TheMaxRob" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[var(--brand-accent)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.012-1.243-.018-2.25-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.605-.015 2.895-.015 3.286 0 .323.216.698.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/maxwroberts" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[var(--brand-accent)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452H17.36v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.134 1.444-2.134 2.937v5.669H10.27V9h3.114v1.561h.045c.434-.82 1.494-1.683 3.074-1.683 3.289 0 3.895 2.163 3.895 4.977v6.597zM5.337 7.433a1.803 1.803 0 01-1.806-1.806 1.803 1.803 0 011.806-1.806 1.803 1.803 0 011.806 1.806 1.803 1.803 0 01-1.806 1.806zm1.783 13.019H3.554V9h3.566v11.452z" />
            </svg>
          </a>
        </div>
        <div>
            <button 
              onClick={handleResetFilters}
              className="mt-8 px-16 py-2 rounded-full bg-[var(--brand-accent)] text-[var(--brand-text)] hover:opacity-90 transition delay-75 hover: cursor-pointer"  
            >
              Reset Skill Filters
            </button>
          </div>
      </div>

      {/* Right Col */}
      <div className="ml-[50%] w-1/2 pt-24 p-6 overflow-y-auto h-screen scroll-smooth">
        {/* Content Sections */}
        <section id="about" ref={aboutRef} className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-[var(--brand-text)]">About Me</h2>
          <p className="text-[var(--brand-text)]">
            I had no interest in computer science when I was young; the only thing I wanted to do was play video games. Fortunately, a lot of people who knew nothing about computer science kept telling me &quot;you love computer games, you should study computer science!&quot; And so I did; I took an AP Programming course in high school... and I did terribly on the exam.
          </p>
          <br/>
          <p className='text-[var(--brand-text)]'>
            I&rsquo;ve come a long way since that AP exam, and I&rsquo;ve fallen in love with software along that path. Forming ideas, designing them, and getting to build things that impact people and make their lives better is one of the most exciting things I can imagine doing with my life.
            I truly believe you can only become the best at what you do if you genuinely love it, and so I try to build things I love. 
            Whether full-stack social platforms or data visualizers, I&rsquo;ve started every one of my projects with no idea what I was doing. If you can perservere through something insurmountable to you, then you have become insurmountable to who you were before you began.
          </p>
          <br/>
          <p className='text-[var(--brand-text)]'>
            In my free time you can usually find me lifting weights, rock climbing, or learning languages (I speak Spanish and German).
            I also love to travel, and am hoping to crack 30 visited countries before I graduate from Emory.
          </p>

          <br/>
          <p className='text-[var(--brand-text)]'>

          </p>
        </section>
        <section id="experience" ref={experienceRef} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-text)]">Experience</h2>
          {cardsData
            .filter(card => card.type === CardType.Experience)
            .map(card => (
              <Card key={card.id} {...card} selectedSkills={selectedSkills} onSelectSkill={handleSelectSkill} />
            ))}
        </section>

        <section id="projects" ref={projectsRef} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-text)]">Projects</h2>
          {cardsData
            .filter(card => card.type === CardType.Project)
            .map(card => (
              <Card key={card.id} {...card} selectedSkills={selectedSkills} onSelectSkill={handleSelectSkill} />

            ))}
        </section>

        <section id="involvement" ref={involvementRef} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--brand-text)]">Involvement</h2>
          {cardsData
            .filter(card => card.type === CardType.Involvement)
            .map(card => (
              <Card key={card.id} {...card} selectedSkills={selectedSkills} onSelectSkill={handleSelectSkill} />
            ))}
        </section>
      </div>
    </div>
  );
};

export default App;