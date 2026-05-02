import { useEffect, useRef } from 'react';
import { db } from 'Assets/database';

const Ghost = () => {
  const containerRef = useRef(null);
  const blogDomain = db.env.domain.blog;

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/ghost/signup-form@~0.3/umd/signup-form.min.js';
    script.setAttribute('data-background-color', '#00000000');
    script.setAttribute('data-text-color', '#FFFFFF');
    script.setAttribute('data-button-color', '#4673e4');
    script.setAttribute('data-button-text-color', '#FFFFFF');
    script.setAttribute('data-title', blogDomain);
    script.setAttribute(
      'data-description',
      'My blog and newsletter about the Fediverse, self-hosting, and more.',
    );
    script.setAttribute(
      'data-icon',
      `https://${blogDomain}/content/images/size/w192h192/size/w256h256/2025/01/favicon-1.webp`,
    );
    script.setAttribute('data-site', `https://${blogDomain}/`);
    script.setAttribute('data-locale', 'en');
    script.setAttribute('data-label-1', 'signup_form');
    script.async = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);

      return () => {
        if (containerRef.current && containerRef.current.contains(script)) {
          containerRef.current.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <section
      id="ghost"
      className="xl:max-w-[1200px] lg:max-w-[1100px] max-w-[1040px] md:m-auto mr-6 md:px-20 p-4 py-16 dark:bg-gray-900"
    >
      <div
        ref={containerRef}
        style={{ height: '40vmin', minHeight: '360px' }}
      ></div>
    </section>
  );
};

export default Ghost;
