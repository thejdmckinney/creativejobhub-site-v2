import { useEffect } from 'react';

interface CommentsProps {
  url: string;
  identifier: string;
  title: string;
}

export default function Comments({ url, identifier, title }: CommentsProps) {
  useEffect(() => {
    // Clear any existing Disqus
    const disqusThread = document.getElementById('disqus_thread');
    if (disqusThread) {
      disqusThread.innerHTML = '';
    }

    // Configure Disqus
    (window as any).disqus_config = function() {
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
    };

    // Load Disqus script
    const script = document.createElement('script');
    script.src = 'https://creativejobhub-com.disqus.com/embed.js';
    script.setAttribute('data-timestamp', String(+new Date()));
    script.async = true;
    
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
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
