import React from 'react';
import SkillBubble from './SkillBubble';

interface CardProps {
  name: string;
  link?: string;
  image?: string;
  description: string;
  skills: string[];
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}

const Card: React.FC<CardProps> = ({ name, link, image, description, skills, selectedSkill, onSelectSkill }) => {
  const isFaded = selectedSkill !== null && !skills.includes(selectedSkill);
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 mb-6 transition-opacity duration-300 ${isFaded ? "opacity-30" : "opacity-100"}`}>
      <div className="flex items-center">
        {/* If image exists, display it */}
        {image && (
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          {/* If link is provided, render the name as a clickable link; otherwise, plain text */}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-blue-500 hover:underline"
            >
              {name}
            </a>
          ) : (
            <span className="text-xl font-bold">{name}</span>
          )}
        </div>
      </div>
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
