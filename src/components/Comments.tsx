import { DiscussionEmbed } from 'disqus-react';

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

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments</h3>
      <DiscussionEmbed
        shortname="creativejobhub-com"
        config={disqusConfig}
      />
    </div>
  );
}
