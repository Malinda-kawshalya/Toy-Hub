import { useState, useEffect } from 'react';

// Custom hook to handle responsive behavior
export default function useResponsiveLayout() {
  // Initialize with default values
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Function to update layout state
    const updateLayout = () => {
      const width = window.innerWidth;
      setIsMobile(width < 576);
      setIsTablet(width >= 576 && width <= 1024);
      setIsDesktop(width > 1024);
    };

    // Run once on mount
    updateLayout();

    // Add event listener
    window.addEventListener('resize', updateLayout);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return { isMobile, isTablet, isDesktop };
}