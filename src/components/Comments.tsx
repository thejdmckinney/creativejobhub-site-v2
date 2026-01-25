import { useEffect, useRef } from 'react';

interface CommentsProps {
  url: string;
  identifier: string;
  title: string;
}

export default function Comments({ url, identifier, title }: CommentsProps) {
  const disqusLoaded = useRef(false);

  useEffect(() => {
    // Only load Disqus once
    if (disqusLoaded.current) return;
    
    console.log('Loading Disqus with config:', { url, identifier, title });
    disqusLoaded.current = true;

    // Configure Disqus with the recommended variables
    (window as any).disqus_config = function () {
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
      console.log('Disqus config function called with:', this.page);
    };

    // Load the Disqus script
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://creativejobhub-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', String(+new Date()));
    s.onload = () => console.log('Disqus script loaded successfully');
    s.onerror = (e) => console.error('Disqus script failed to load:', e);
    (d.head || d.body).appendChild(s);
  }, []); // Empty dependency array - only run once

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments</h3>
      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </div>
  );
}
