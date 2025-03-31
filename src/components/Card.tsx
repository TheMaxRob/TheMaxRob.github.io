import React from 'react';
import SkillBubble from './SkillBubble';

interface CardProps {
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  description?: string;
  skills: string[];
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
  startDate: Date | null;
  endDate: Date | "Present";
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  link,
  image,
  description,
  skills,
  selectedSkill,
  onSelectSkill,
  startDate,
  endDate
}) => {
  const isFaded = selectedSkill !== null && !skills.includes(selectedSkill);

  const formatDate = (date: Date | "Present" | undefined | null) => {
    if (!date) return '';
    if (typeof date === 'string') return date === 'Present' ? 'In Progress' : date;
    return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  };

  return (
    <div className={`bg-[var(--brand-accent)] rounded-lg shadow-md text-[var(--brand-text)] p-6 pr-20 mb-6 relative transition-opacity duration-300 ${isFaded ? "opacity-30" : "opacity-100"}`}>
      {/* Date timeframe in the top-right corner */}
      {(startDate || endDate) && (
        <div className="absolute top-4 right-4 text-sm text-[var(--brand-text)] whitespace-nowrap">
          {startDate ? `${formatDate(startDate)} – ${formatDate(endDate)}` : `${formatDate(endDate)}`}
        </div>
      )}
      <div className="flex items-center">
        {/* If image exists, display it */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-[var(--brand-text)] hover:underline flex items-center"
            >
              {title}
              {/* External link icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h7m0 0v7m0-7L10 21" />
              </svg>
            </a>
          ) : (
            <span className="text-xl font-bold">{title}</span>
          )}
        </div>
      </div>
      {subtitle && (
        <div>
          <span className="text-lg italic">{subtitle}</span>
        </div>
      )}
      <p className="mt-4 text-[var(--brand-text)]">{description}</p>
      <div className="mt-4 flex flex-wrap">
        {skills.map((skill) => (
          <SkillBubble
            key={skill}
            skill={skill}
            selectedSkill={selectedSkill}
            onSelect={onSelectSkill}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
