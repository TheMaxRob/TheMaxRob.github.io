import React from 'react';

interface SkillBubbleProps {
  skill: string;
  selectedSkills: string[];
  onSelect: (skill: string) => void;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ skill, selectedSkills, onSelect }) => {
  const isSelected = selectedSkills.includes(skill);
  return (
    <span
      onClick={() => onSelect(skill)}
      className={`cursor-pointer inline-block m-1 px-3 py-1 rounded-full transition-colors duration-300
        ${isSelected ? "bg-[var(--brand-tertiary)] text-white" : "bg-gray-300 text-gray-800 hover:bg-gray-500"}`}
    >
      {skill}
    </span>
  );
};

export default SkillBubble;
