import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    // 1. Debounced URL Updater
    let timeoutId: number | null = null;

    const updateUrl = (id: string) => {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        // Only update if it's actually different to avoid history spam
        const currentPath = window.location.pathname.replace(/\/+$/, '');
        const newPath = `/${id === 'hero' ? '' : id}`;
        
        // Don't update if we are on the special links page
        if (currentPath.endsWith('/links')) return;

        // Construct full path including base URL if needed
        const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
        const targetPath = `${baseUrl}${newPath}`;

        if (window.location.pathname !== targetPath) {
           window.history.replaceState(null, '', targetPath);
        }
      }, 500); // Debounce by 500ms
    };

    // 2. Observer setup
    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -${offset}px 0px`,
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newId = entry.target.id;
          setActiveSection(newId);
          updateUrl(newId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback: check scroll position on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const newId = sectionIds[i];
            if (activeSection !== newId) {
               setActiveSection(newId);
               updateUrl(newId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [sectionIds, offset, activeSection]);

  return activeSection;
}
