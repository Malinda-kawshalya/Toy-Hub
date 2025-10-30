// CategoryIcons.tsx - SVG Icons for Categories
import React from 'react';

interface IconProps {
  className?: string;
}

export const BabyToysIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="50" r="25" fill="#FFB3BA" />
    <circle cx="70" cy="50" r="18" fill="#FFF" opacity="0.5" />
    <circle cx="65" cy="48" r="3" fill="#333" />
    <circle cx="75" cy="48" r="3" fill="#333" />
    <path d="M 62 56 Q 70 60 78 56" stroke="#FF8B94" strokeWidth="2" fill="none" strokeLinecap="round" />
    <ellipse cx="55" cy="48" rx="8" ry="10" fill="#FFB3BA" />
    <ellipse cx="85" cy="48" rx="8" ry="10" fill="#FFB3BA" />
    <rect x="50" y="80" width="40" height="35" rx="5" fill="#FFD4D4" />
    <rect x="55" y="85" width="30" height="25" rx="3" fill="#FFF" opacity="0.3" />
    <circle cx="65" cy="98" r="4" fill="#FFB3BA" />
    <circle cx="75" cy="98" r="4" fill="#FFB3BA" />
  </svg>
);

export const EducationalToysIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="35" r="12" fill="#FF6B6B" />
    <circle cx="70" cy="35" r="8" fill="#FFF" opacity="0.4" />
    <rect x="68" y="47" width="4" height="20" fill="#8B4513" />
    <ellipse cx="70" cy="70" rx="22" ry="8" fill="#FF9999" />
    <ellipse cx="70" cy="80" rx="20" ry="7" fill="#FFB366" />
    <ellipse cx="70" cy="89" rx="18" ry="6" fill="#FFEB3B" />
    <ellipse cx="70" cy="97" rx="16" ry="6" fill="#4CAF50" />
    <ellipse cx="70" cy="104" rx="14" ry="5" fill="#2196F3" />
    <ellipse cx="70" cy="110" rx="12" ry="5" fill="#9C27B0" />
    <path d="M 40 115 L 50 120 L 60 115" stroke="#FF9999" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M 80 115 L 90 120 L 100 115" stroke="#FFB366" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

export const ModelCarsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="65" width="80" height="25" rx="3" fill="#4A90E2" />
    <rect x="35" y="70" width="70" height="15" rx="2" fill="#6BB6FF" opacity="0.7" />
    <path d="M 45 65 L 50 50 L 90 50 L 95 65 Z" fill="#5BA3E8" />
    <rect x="52" y="53" width="36" height="10" rx="1" fill="#87CEEB" opacity="0.6" />
    <circle cx="48" cy="92" r="10" fill="#333" />
    <circle cx="48" cy="92" r="6" fill="#666" />
    <circle cx="92" cy="92" r="10" fill="#333" />
    <circle cx="92" cy="92" r="6" fill="#666" />
    <rect x="65" y="72" width="3" height="8" fill="#FFF" opacity="0.3" />
    <circle cx="40" cy="75" r="2" fill="#FFD700" />
    <circle cx="100" cy="75" r="2" fill="#FF4444" />
    <path d="M 30 65 L 25 68 L 25 82 L 30 85" fill="#3A7BC8" />
    <path d="M 110 65 L 115 68 L 115 82 L 110 85" fill="#3A7BC8" />
  </svg>
);

export const OutdoorToysIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="70" cy="100" rx="18" ry="8" fill="#8B4513" opacity="0.3" />
    <circle cx="70" cy="85" r="25" fill="#87CEEB" />
    <circle cx="70" cy="85" r="20" fill="#B3E5FC" opacity="0.6" />
    <path d="M 50 85 Q 55 75 60 85" fill="#4FC3F7" />
    <path d="M 70 70 Q 75 60 80 70" fill="#4FC3F7" />
    <path d="M 85 85 Q 90 75 95 85" fill="#4FC3F7" />
    <rect x="67" y="100" width="6" height="25" fill="#FF6B6B" />
    <rect x="50" y="110" width="40" height="4" rx="2" fill="#FFB74D" />
    <path d="M 70 45 L 75 55 L 80 45 L 75 48 L 70 45 Z" fill="#FFD700" />
    <circle cx="45" cy="60" r="3" fill="#FFF" opacity="0.8" />
    <circle cx="55" cy="50" r="2" fill="#FFF" opacity="0.8" />
    <circle cx="90" cy="55" r="3" fill="#FFF" opacity="0.8" />
  </svg>
);

export const PuzzlesIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M 40 50 L 40 90 L 60 90 L 60 95 Q 65 100 70 95 L 70 90 L 80 90 L 80 50 L 70 50 L 70 45 Q 65 40 60 45 L 60 50 Z" fill="#FF6B9D" />
      <rect x="42" y="52" width="16" height="16" fill="#FFF" opacity="0.3" />
    </g>
    <g>
      <path d="M 60 90 L 60 100 L 100 100 L 100 90 L 95 90 Q 90 85 95 80 L 100 80 L 100 70 L 80 70 L 80 90 Z" fill="#4FC3F7" />
      <rect x="82" y="72" width="16" height="16" fill="#FFF" opacity="0.3" />
    </g>
    <g>
      <path d="M 40 50 L 40 40 L 80 40 L 80 50 L 70 50 L 70 45 Q 65 40 60 45 L 60 50 Z" fill="#FFD740" />
      <rect x="42" y="42" width="16" height="6" fill="#FFF" opacity="0.3" />
    </g>
    <g>
      <path d="M 80 40 L 100 40 L 100 70 L 80 70 L 80 60 L 85 60 Q 90 55 85 50 L 80 50 Z" fill="#66BB6A" />
      <rect x="82" y="52" width="16" height="16" fill="#FFF" opacity="0.3" />
    </g>
  </svg>
);

export const RCItemsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="70" cy="110" rx="25" ry="5" fill="#000" opacity="0.2" />
    <rect x="45" y="70" width="50" height="30" rx="5" fill="#E74C3C" />
    <rect x="50" y="75" width="40" height="20" rx="3" fill="#C0392B" />
    <circle cx="70" cy="85" r="8" fill="#34495E" />
    <circle cx="70" cy="85" r="5" fill="#95A5A6" />
    <path d="M 70 60 L 75 50 L 80 45 L 80 40 L 75 35 L 65 35 L 60 40 L 60 45 L 65 50 Z" fill="#E74C3C" />
    <ellipse cx="70" cy="43" rx="8" ry="12" fill="#3498DB" opacity="0.6" />
    <path d="M 95 85 L 105 80 L 110 82 L 108 88 L 98 90 Z" fill="#34495E" />
    <path d="M 45 85 L 35 80 L 30 82 L 32 88 L 42 90 Z" fill="#34495E" />
    <rect x="68" y="50" width="4" height="20" fill="#BDC3C7" />
    <circle cx="60" cy="82" r="2" fill="#F39C12" />
    <circle cx="80" cy="82" r="2" fill="#F39C12" />
    <path d="M 65 95 L 70 105 L 75 95" stroke="#E74C3C" strokeWidth="2" fill="none" />
  </svg>
);

export const TeddysIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="28" fill="#D4A574" />
    <circle cx="70" cy="72" r="22" fill="#E8C9A0" opacity="0.7" />
    <circle cx="45" cy="60" r="12" fill="#D4A574" />
    <circle cx="45" cy="60" r="8" fill="#E8C9A0" opacity="0.6" />
    <circle cx="95" cy="60" r="12" fill="#D4A574" />
    <circle cx="95" cy="60" r="8" fill="#E8C9A0" opacity="0.6" />
    <circle cx="63" cy="65" r="4" fill="#333" />
    <circle cx="77" cy="65" r="4" fill="#333" />
    <circle cx="63" cy="65" r="1.5" fill="#FFF" />
    <circle cx="77" cy="65" r="1.5" fill="#FFF" />
    <ellipse cx="70" cy="75" rx="6" ry="8" fill="#C89968" />
    <circle cx="70" cy="77" r="3" fill="#333" />
    <path d="M 63 78 Q 70 82 77 78" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <ellipse cx="55" cy="68" rx="3" ry="4" fill="#FFB3BA" opacity="0.6" />
    <ellipse cx="85" cy="68" rx="3" ry="4" fill="#FFB3BA" opacity="0.6" />
    <path d="M 70 95 L 65 110 M 70 95 L 75 110" stroke="#D4A574" strokeWidth="6" strokeLinecap="round" />
    <path d="M 50 80 L 45 95 M 90 80 L 95 95" stroke="#D4A574" strokeWidth="6" strokeLinecap="round" />
    <circle cx="65" cy="110" r="5" fill="#8B6F47" />
    <circle cx="75" cy="110" r="5" fill="#8B6F47" />
  </svg>
);

export const categoryIcons = {
  'baby-toys': BabyToysIcon,
  'educational-toys': EducationalToysIcon,
  'model-cars': ModelCarsIcon,
  'outdoor-toys': OutdoorToysIcon,
  'puzzles': PuzzlesIcon,
  'rc-items': RCItemsIcon,
  'teddys': TeddysIcon,
};
