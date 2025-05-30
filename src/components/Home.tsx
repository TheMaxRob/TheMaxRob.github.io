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
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  const [showHeading, setShowHeading] = useState<boolean>(false);
  const [showSubheading, setShowSubheading] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(true); 

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
  
  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMobileMenuOpen(false); 
  };

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
      threshold: 0.1, 
      rootMargin: '0px 0px -60% 0px' 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("set active section", entry);
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
  
  // Initialize animation logic
  useEffect(() => {
    let runAnimation = true;
    
    try {
      // Check hasVisited
      const hasVisitedBefore = localStorage.getItem('hasVisitedPortfolio');
      
      // If they've visited before, check when
      if (hasVisitedBefore) {
        const lastVisit = localStorage.getItem('lastVisit');
        if (lastVisit) {
          const lastVisitDate = new Date(lastVisit);
          const currentDate = new Date();
          const daysSinceLastVisit = (currentDate.getTime() - lastVisitDate.getTime()) / (1000 * 3600 * 24);
          
          // If it's been less than a day, skip animation
          if (daysSinceLastVisit <= 1) {
            runAnimation = false;
          } else {
            // Update last visit time
            localStorage.setItem('lastVisit', currentDate.toISOString());
          }
        }
      } else {
        // First visit - set localStorage values
        localStorage.setItem('hasVisitedPortfolio', 'true');
        localStorage.setItem('lastVisit', new Date().toISOString());
      }
    } catch (error) {
      console.warn('Could not access localStorage:', error);
      // In case of error, we'll still run the animation but log the error
    }
    
    setShouldAnimate(runAnimation);
    
    // If not animating, show everything immediately
    if (!runAnimation) {
      setShowHeading(true);
      setShowSubheading(true);
      setShowContent(true);
    }
    
    // Now we can render the page
    setPageReady(true);
  }, []);
  
  // Fade-in animation sequence
  useEffect(() => {
    if (shouldAnimate && pageReady) {
      // Heading
      setTimeout(() => {
        setShowHeading(true);
      }, 200);
      
      // Subheading
      setTimeout(() => {
        setShowSubheading(true);
      }, 1000);
      
      // All content
      setTimeout(() => {
        setShowContent(true);
      }, 2000);
    }
  }, [shouldAnimate, pageReady]);
  
  // If page isn't ready yet, don't render anything or show a minimal loading state
  if (!pageReady) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]">
        {/* Optional: you could add a loading spinner here if needed */}
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]">
      {/* Global Nav Bar - Desktop and Mobile */}
      <nav className={`fixed top-0 left-0 w-full bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] backdrop-blur-sm shadow-md z-20 transition-opacity duration-700 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between md:justify-center relative">
          {/* Mobile hamburger menu */}
          <button 
            className="md:hidden text-[var(--brand-text)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => handleNavClick('about')}
              className={`px-4 py-2 rounded-full transition-all ${activeSection === 'about' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('experience')}
              className={`px-4 py-2 rounded-full transition-all ${activeSection === 'experience' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              Experience
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className={`px-4 py-2 rounded-full transition-all ${activeSection === 'projects' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('involvement')}
              className={`px-4 py-2 rounded-full transition-all ${activeSection === 'involvement' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              Involvement
            </button>
          </div>
        </div>
        
        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <div className="flex flex-col p-4">
              <button
                onClick={() => handleNavClick('about')}
                className={`px-4 py-2 rounded-md mb-2 ${activeSection === 'about' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('experience')}
                className={`px-4 py-2 rounded-md mb-2 ${activeSection === 'experience' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Experience
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className={`px-4 py-2 rounded-md mb-2 ${activeSection === 'projects' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick('involvement')}
                className={`px-4 py-2 rounded-md ${activeSection === 'involvement' ? 'bg-[var(--brand-accent)] text-[var(--brand-text)]' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Involvement
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Layout Container - Responsive grid */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Col (Header Section) - Full width on mobile, fixed left on desktop */}
        <div className="md:fixed md:top-0 md:left-0 md:w-1/2 md:h-screen flex flex-col gap-2 justify-center items-center p-6 pt-24 md:pt-6">
          <h1 className={`text-2xl md:text-3xl font-bold text-[var(--brand-text)] text-center transition-opacity duration-700 ease-in-out ${showHeading ? 'opacity-100' : 'opacity-0'}`}>
            Hey! I&rsquo;m Max Roberts.
          </h1>
          <h3 className={`text-base md:text-lg font-semibold mb-4 text-[var(--brand-text)] text-center transition-opacity duration-700 ease-in-out ${showSubheading ? 'opacity-100' : 'opacity-0'}`}>
            Welcome to my website :)
          </h3>
          <div className={`flex space-x-8 md:space-x-6 transition-opacity duration-700 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            {/* Email Icon */}
            <a href="mailto:maxroberts2003@gmail.com" className="hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-[var(--brand-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
            </a>
            {/* Resume */}
            <a href="/MaxRobertsResumePDF.pdf" download className="hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-[var(--brand-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8M8 8h4m2-6H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/TheMaxRob" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-[var(--brand-accent)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.012-1.243-.018-2.25-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.605-.015 2.895-.015 3.286 0 .323.216.698.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/maxwroberts" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-[var(--brand-accent)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452H17.36v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.134 1.444-2.134 2.937v5.669H10.27V9h3.114v1.561h.045c.434-.82 1.494-1.683 3.074-1.683 3.289 0 3.895 2.163 3.895 4.977v6.597zM5.337 7.433a1.803 1.803 0 01-1.806-1.806 1.803 1.803 0 011.806-1.806 1.803 1.803 0 011.806 1.806 1.803 1.803 0 01-1.806 1.806zm1.783 13.019H3.554V9h3.566v11.452z" />
              </svg>
            </a>
          </div>
          <div className={`mt-6 transition-opacity duration-700 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={handleResetFilters}
              className="px-8 md:px-16 py-2 rounded-full bg-[var(--brand-accent)] text-[var(--brand-text)] hover:opacity-90 transition delay-75 hover:cursor-pointer"  
            >
              Reset Skill Filters
            </button>
          </div>
        </div>

        {/* Right Col - Full width on mobile, 50% width on desktop */}
        <div className={`w-full md:w-1/2 md:ml-[50%] p-4 md:p-6 pt-[100px] md:pt-24 overflow-y-auto min-h-screen scroll-smooth transition-opacity duration-700 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {/* Content Sections */}
          <section id="about" ref={aboutRef} className="mb-10 scroll-mt-20">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[var(--brand-text)]">About Me</h2>
            <p className="text-sm md:text-base text-[var(--brand-text)]">
              I had no interest in computer science when I was young; the only thing I wanted to do was play video games. Fortunately, a lot of people who knew nothing about computer science kept telling me &quot;you love computer games, you should study computer science!&quot; And so I did; I took an AP Programming course in high school... and I did terribly on the exam.
            </p>
            <br/>
            <p className="text-sm md:text-base text-[var(--brand-text)]">
              I&rsquo;ve come a long way since that AP exam, and I&rsquo;ve fallen in love with software along that path. Forming ideas, designing them, and getting to build things that impact people and make their lives better is one of the most exciting things I can imagine doing with my life.
              I truly believe you can only become the best at what you do if you genuinely love it, and so I try to build things I love. 
              Whether it was a full-stack social platform or a data visualizer, I have started every one of my projects with no idea what I was doing. If you can perservere through something insurmountable to you, then you have become insurmountable to who you were before you began.
            </p>
            <br/>
            <p className="text-sm md:text-base text-[var(--brand-text)]">
              In my free time you can usually find me lifting weights, rock climbing, or learning languages (I speak Spanish and German).
              I also love to travel, and am hoping to crack 30 visited countries before I graduate from Emory.
            </p>
            <br/>
            <p className="text-sm md:text-base text-[var(--brand-text)]">
              Thanks for checking out my website! Feel free to have a look around; you can sort by skills with the little bubbles.
            </p>
          </section>
          
          <section id="experience" ref={experienceRef} className="mb-10 scroll-mt-20">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--brand-text)]">Experience</h2>
            {cardsData
              .filter(card => card.type === CardType.Experience)
              .map(card => (
                <Card key={card.id} {...card} selectedSkills={selectedSkills} onSelectSkill={handleSelectSkill} />
              ))}
          </section>

          <section id="projects" ref={projectsRef} className="mb-10 scroll-mt-20">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--brand-text)]">Projects</h2>
            {cardsData
              .filter(card => card.type === CardType.Project)
              .map(card => (
                <Card key={card.id} {...card} selectedSkills={selectedSkills} onSelectSkill={handleSelectSkill} />
              ))}
          </section>

          <section id="involvement" ref={involvementRef} className="mb-10 scroll-mt-20">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--brand-text)]">Involvement</h2>
            {cardsData
              .filter(card => card.type === CardType.Involvement)
              .map(card => (
                <Card key={card.id} {...card} selectedSkills={selectedSkills} onSelectSkill={handleSelectSkill} />
              ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;