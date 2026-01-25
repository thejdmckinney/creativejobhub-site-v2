import { useEffect } from 'react';

interface CommentsProps {
  url: string;
  identifier: string;
  title: string;
}

export default function Comments({ url, identifier, title }: CommentsProps) {
  useEffect(() => {
    // Configure Disqus with the recommended variables
    (window as any).disqus_config = function () {
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
    };

    // Load the Disqus script (DON'T EDIT BELOW THIS LINE)
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://creativejobhub-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', String(+new Date()));
    (d.head || d.body).appendChild(s);

    // Cleanup function
    return () => {
      const disqusThread = document.getElementById('disqus_thread');
      if (disqusThread) {
        disqusThread.innerHTML = '';
      }
      // Remove all Disqus-related scripts on unmount
      const scripts = document.querySelectorAll('script[src*="disqus"]');
      scripts.forEach(script => script.remove());
      
      delete (window as any).disqus_config;
      delete (window as any).DISQUS;
    };
  }, [url, identifier, title]);

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
