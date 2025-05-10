
  import { useState, useEffect, useRef } from 'react';

  const useScrollSpy = (selectors, options) => {
    const [activeId, setActiveId] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
      const elements = selectors.map(selector => document.querySelector(selector));
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(entries => {
        let currentActiveId = null;
        // Find the first entry that is intersecting or the topmost one if multiple are intersecting
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);

        if (intersectingEntries.length > 0) {
           // Sort by position on screen (topmost first)
           intersectingEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
           currentActiveId = intersectingEntries[0].target.id;
        } else {
           // If nothing is intersecting, find the last element that was fully above the viewport center
           let lastAboveCenter = null;
           for (let i = entries.length - 1; i >= 0; i--) {
               if (entries[i].boundingClientRect.bottom < window.innerHeight / 2) {
                   lastAboveCenter = entries[i].target.id;
                   break;
               }
           }
           currentActiveId = lastAboveCenter;
        }

        // Only update if the active ID has changed
        if (currentActiveId !== activeId) {
           setActiveId(currentActiveId);
        }

      }, {
        rootMargin: options?.rootMargin ?? '-20% 0px -80% 0px', // Adjust margins to activate when element is near center
        threshold: options?.threshold ?? 0, // Trigger as soon as element enters margin area
        ...options
      });

      elements.forEach(el => {
        if (el) {
          observer.current.observe(el);
        }
      });

      return () => observer.current?.disconnect();
    }, [selectors.join(','), options, activeId]); // Re-run effect if selectors or options change

    return activeId;
  };

  export default useScrollSpy;
  