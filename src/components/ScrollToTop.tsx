import { useState, useEffect } from 'react';

/**
 * ScrollToTop Component
 * A floating action button that appears when the user scrolls down
 * and smoothly scrolls the page back to the top when clicked.
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check in case the page is loaded already scrolled
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-40 group transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-8 invisible'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className="flex size-14 md:size-16 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-[0_0_20px_var(--color-primary)] hover:shadow-[0_0_30px_var(--color-primary)] hover:scale-110 transition-all duration-300"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="group-hover:-translate-y-1 transition-transform duration-300"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
