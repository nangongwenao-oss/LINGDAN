import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  accent?: 'purple' | 'gold' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  onClick,
  accent = 'none' 
}) => {
  let accentClass = "";
  if (accent === 'purple') accentClass = "border-l-4 border-lingdan-purple";
  if (accent === 'gold') accentClass = "border-l-4 border-lingdan-gold";

  return (
    <div 
      onClick={onClick}
      className={`glass-card rounded-xl p-4 transition-all duration-300 ${onClick ? 'cursor-pointer hover:bg-white/5 active:scale-95' : ''} ${accentClass} ${className}`}
    >
      {children}
    </div>
  );
};