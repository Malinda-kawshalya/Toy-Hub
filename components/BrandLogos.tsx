// BrandLogos SVG Components
import React from 'react';

interface LogoProps {
  className?: string;
}

export const FrogLeafLogo: React.FC<LogoProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Leaf */}
    <path d="M 30 40 Q 30 20 50 15 Q 70 20 70 40 Q 70 60 50 65 Q 30 60 30 40 Z" fill="#86C232" />
    <path d="M 50 15 L 50 65" stroke="#6A9A2A" strokeWidth="2" />
    <path d="M 50 30 Q 60 35 65 45" stroke="#6A9A2A" strokeWidth="1.5" fill="none" />
    <path d="M 50 30 Q 40 35 35 45" stroke="#6A9A2A" strokeWidth="1.5" fill="none" />
    {/* Frog */}
    <ellipse cx="85" cy="35" rx="12" ry="15" fill="#86C232" />
    <circle cx="82" cy="32" r="4" fill="white" />
    <circle cx="83" cy="32" r="2" fill="#333" />
    <ellipse cx="75" cy="45" rx="8" ry="6" fill="#6A9A2A" />
    <ellipse cx="95" cy="45" rx="8" ry="6" fill="#6A9A2A" />
    <path d="M 80 40 Q 85 43 90 40" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Text */}
    <text x="15" y="75" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" fill="#6A9A2A">Frog Leaf</text>
  </svg>
);

export const DinoRexLogo: React.FC<LogoProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dino Head */}
    <ellipse cx="60" cy="35" rx="25" ry="20" fill="#4CAF50" />
    <ellipse cx="60" cy="38" rx="22" ry="17" fill="#66BB6A" />
    {/* Eyes */}
    <circle cx="52" cy="30" r="5" fill="white" />
    <circle cx="68" cy="30" r="5" fill="white" />
    <circle cx="53" cy="30" r="3" fill="#333" />
    <circle cx="69" cy="30" r="3" fill="#333" />
    {/* Mouth */}
    <path d="M 45 42 Q 60 50 75 42" stroke="#2E7D32" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Teeth */}
    <path d="M 48 42 L 48 48 M 55 42 L 55 48 M 65 42 L 65 48 M 72 42 L 72 48" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    {/* Spikes */}
    <path d="M 40 25 L 35 15 L 38 25" fill="#4CAF50" />
    <path d="M 50 20 L 48 10 L 52 20" fill="#4CAF50" />
    <path d="M 60 18 L 60 8 L 62 18" fill="#4CAF50" />
    <path d="M 70 20 L 72 10 L 72 20" fill="#4CAF50" />
    <path d="M 80 25 L 85 15 L 82 25" fill="#4CAF50" />
    {/* Text */}
    <text x="35" y="72" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#2E7D32">Dino Rex</text>
  </svg>
);

export const CloudFrogLogo: React.FC<LogoProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cloud */}
    <circle cx="45" cy="28" r="10" fill="#06B6D4" />
    <circle cx="60" cy="25" r="12" fill="#06B6D4" />
    <circle cx="75" cy="28" r="10" fill="#06B6D4" />
    <rect x="35" y="28" width="50" height="10" fill="#06B6D4" />
    {/* Frog in Cloud */}
    <circle cx="55" cy="35" r="8" fill="#0E7490" />
    <circle cx="60" cy="35" r="8" fill="#0E7490" />
    <ellipse cx="57.5" cy="40" rx="10" ry="8" fill="#0891B2" />
    {/* Frog Eyes */}
    <circle cx="54" cy="33" r="2.5" fill="white" />
    <circle cx="61" cy="33" r="2.5" fill="white" />
    <circle cx="54.5" cy="33" r="1.5" fill="#333" />
    <circle cx="61.5" cy="33" r="1.5" fill="#333" />
    {/* Smile */}
    <path d="M 52 42 Q 57.5 45 63 42" stroke="#0E7490" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Legs */}
    <ellipse cx="50" cy="48" rx="5" ry="3" fill="#0891B2" />
    <ellipse cx="65" cy="48" rx="5" ry="3" fill="#0891B2" />
    {/* Text */}
    <text x="28" y="72" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" fill="#0891B2">Cloud Frog</text>
  </svg>
);

export const FriendsDimensionsLogo: React.FC<LogoProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Character 1 - Red */}
    <circle cx="30" cy="30" r="10" fill="#EF4444" />
    <circle cx="27" cy="28" r="2" fill="white" />
    <circle cx="33" cy="28" r="2" fill="white" />
    <path d="M 26 34 Q 30 36 34 34" stroke="#B91C1C" strokeWidth="1.5" fill="none" />
    <rect x="25" y="40" width="10" height="12" rx="2" fill="#DC2626" />
    
    {/* Character 2 - Yellow */}
    <circle cx="50" cy="28" r="11" fill="#FBBF24" />
    <circle cx="47" cy="26" r="2" fill="#333" />
    <circle cx="53" cy="26" r="2" fill="#333" />
    <path d="M 46 32 Q 50 34 54 32" stroke="#D97706" strokeWidth="1.5" fill="none" />
    <rect x="45" y="39" width="10" height="13" rx="2" fill="#F59E0B" />
    
    {/* Character 3 - Blue */}
    <circle cx="70" cy="30" r="10" fill="#3B82F6" />
    <circle cx="67" cy="28" r="2" fill="white" />
    <circle cx="73" cy="28" r="2" fill="white" />
    <path d="M 66 34 Q 70 36 74 34" stroke="#1D4ED8" strokeWidth="1.5" fill="none" />
    <rect x="65" y="40" width="10" height="12" rx="2" fill="#2563EB" />
    
    {/* Character 4 - Green */}
    <circle cx="90" cy="30" r="9" fill="#10B981" />
    <circle cx="87" cy="28" r="1.5" fill="white" />
    <circle cx="93" cy="28" r="1.5" fill="white" />
    <path d="M 86 33 Q 90 35 94 33" stroke="#059669" strokeWidth="1.5" fill="none" />
    <rect x="86" y="39" width="8" height="11" rx="2" fill="#059669" />
    
    {/* Text */}
    <text x="10" y="68" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="600" fill="#374151">friends dimensions</text>
  </svg>
);

export const BabyLogoLogo: React.FC<LogoProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Baby Face */}
    <circle cx="60" cy="32" r="18" fill="#FDE68A" />
    <circle cx="60" cy="34" r="16" fill="#FEF3C7" />
    {/* Hair */}
    <path d="M 45 20 Q 50 12 60 12 Q 70 12 75 20" fill="#8B4513" />
    <circle cx="48" cy="22" r="3" fill="#8B4513" />
    <circle cx="55" cy="18" r="3" fill="#8B4513" />
    <circle cx="65" cy="18" r="3" fill="#8B4513" />
    <circle cx="72" cy="22" r="3" fill="#8B4513" />
    {/* Eyes */}
    <circle cx="52" cy="30" r="3" fill="#333" />
    <circle cx="68" cy="30" r="3" fill="#333" />
    <circle cx="53" cy="29" r="1" fill="white" />
    <circle cx="69" cy="29" r="1" fill="white" />
    {/* Cheeks */}
    <ellipse cx="47" cy="35" rx="4" ry="3" fill="#FCA5A5" opacity="0.6" />
    <ellipse cx="73" cy="35" rx="4" ry="3" fill="#FCA5A5" opacity="0.6" />
    {/* Smile */}
    <path d="M 52 38 Q 60 42 68 38" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Pacifier */}
    <circle cx="60" cy="45" r="6" fill="#EC4899" opacity="0.8" />
    <circle cx="60" cy="45" r="3" fill="#DB2777" />
    <rect x="58" y="51" width="4" height="3" rx="1" fill="#9CA3AF" />
    {/* Text */}
    <text x="25" y="70" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="600" fill="#6B7280">BABYLOGO</text>
    <text x="32" y="78" fontFamily="Arial, sans-serif" fontSize="7" fill="#9CA3AF">TAGLINE</text>
  </svg>
);
