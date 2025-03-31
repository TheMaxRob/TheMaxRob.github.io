import React from 'react';

interface SkillBubbleProps {
  skill: string;
  selectedSkill: string | null;
  onSelect: (skill: string | null) => void;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ skill, selectedSkill, onSelect }) => {
  const isSelected = selectedSkill === skill;
  return (
    <span
      onClick={() => onSelect(isSelected ? null : skill)}
      className={`cursor-pointer inline-block m-1 px-3 py-1 rounded-full transition-colors duration-300
        ${isSelected ? "bg-[var(--brand-tertiary)] text-white" : "bg-gray-400 text-gray-800 hover:bg-gray-500"}`}
    >
      {skill}
    </span>
  );
};

export default SkillBubble;
