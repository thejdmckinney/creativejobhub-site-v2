import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import Comments from '../components/Comments';
import { getPostBySlug, type BlogPost } from '../utils/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (slug) {
        const fetchedPost = await getPostBySlug(slug);
        setPost(fetchedPost);
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.description}
        keywords={`${post.category}, field service, contractor tips, ${post.title}`}
      />

      <article className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition"
            >
              ← Back to Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-4">
              {post.description}
            </p>
            
            <div className="flex items-center gap-4 text-gray-500">
              <span>{post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="max-w-4xl mx-auto px-6 py-8">
            <img 
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg prose-blue max-w-none">
            <PortableText 
              value={post.content}
              components={{
                types: {
                  image: ({ value }) => {
                    const imageUrl = value.asset?.url;
                    if (!imageUrl) return null;
                    
                    return (
                      <div className="my-8">
                        <img 
                          src={imageUrl}
                          alt={value.alt || ''}
                          className="w-full rounded-lg"
                        />
                        {value.alt && (
                          <p className="text-sm text-gray-500 text-center mt-2">
                            {value.alt}
                          </p>
                        )}
                      </div>
                    );
                  },
                  callToAction: ({ value }) => (
                    <CTAButton 
                      text={value.text}
                      url={value.url}
                      style={value.style}
                    />
                  ),
                },
                marks: {
                  link: ({ value, children }) => {
                    const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
                    return (
                      <a 
                        href={value?.href}
                        target={target}
                        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        {children}
                      </a>
                    );
                  },
                },
                block: {
                  h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 my-6">
                      {children}
                    </blockquote>
                  ),
                },
              }}
            />
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to streamline your field service business?
            </h3>
            <p className="text-blue-100 mb-6">
              Creative Job Hub is built by contractors, for contractors. Start your free trial today.
            </p>
            <Link 
              to="/signup"
              className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Start Free Trial →
            </Link>
          </div>

          {/* Comments Section */}
          <Comments 
            url={`https://creativejobhub.com/blog/${post.slug}`}
            identifier={`blog-${post.slug}`}
            title={post.title}
          />
        </div>
      </article>
    </>
  );
}
