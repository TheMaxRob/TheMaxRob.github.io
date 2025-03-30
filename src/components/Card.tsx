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
  startDate?: Date | null;
  endDate?: Date | "Present" | "In Progress";
}


const Card: React.FC<CardProps> = ({ title, subtitle, link, image, description, skills, selectedSkill, onSelectSkill, startDate, endDate }) => {
  const isFaded = selectedSkill !== null && !skills.includes(selectedSkill);

  // Format dates as MM/YYYY (you can customize the format)
  const formatDate = (date: Date | "Present" | "In Progress" | undefined | null) => {
    if (!date) return '';
    if (typeof date === 'string') {
      return date === 'Present' ? 'In Progress' : date;
    }
    return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  };
  
  
  

    return (
      <div className={`bg-white shadow-md rounded-lg p-6 pr-20 mb-6 relative transition-opacity duration-300 ${isFaded ? "opacity-30" : "opacity-100"}`}>
        {/* Date timeframe in the top-right corner */}
        {(startDate || endDate) && (
          <div className="absolute top-4 right-4 text-sm text-gray-600 whitespace-nowrap">
            {startDate ? `${formatDate(startDate)} – ${formatDate(endDate)}` : `${formatDate(endDate)}`}
          </div>
        )}
        
        <div className="flex items-center">
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
                className="text-xl font-bold text-blue-500 hover:underline"
              >
                {title}
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
      <p className="mt-4 text-gray-700">{description}</p>
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