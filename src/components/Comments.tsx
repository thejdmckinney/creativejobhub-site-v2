import { DiscussionEmbed } from 'disqus-react';
import { useEffect } from 'react';

interface CommentsProps {
  url: string;
  identifier: string;
  title: string;
}

export default function Comments({ url, identifier, title }: CommentsProps) {
  const disqusConfig = {
    url,
    identifier,
    title,
  };

  // Reset any problematic CSS variables that might interfere with Disqus
  useEffect(() => {
    // Ensure Disqus container has a clean styling context
    const style = document.createElement('style');
    style.textContent = `
      #disqus_thread {
        color-scheme: light;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments</h3>
      <div id="disqus_thread_wrapper" style={{ colorScheme: 'light' }}>
        <DiscussionEmbed
          shortname="creativejobhub-com"
          config={disqusConfig}
        />
      </div>
    </div>
  );
}
