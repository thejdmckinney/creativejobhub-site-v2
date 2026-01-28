import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import NewsletterSignup from '../components/NewsletterSignup';
import { getAllPosts, type BlogPost } from '../utils/blog';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <SEO 
        title="Blog - Tips, Updates & Stories from Creative Job Hub"
        description="Expert tips for field service contractors, product updates, customer success stories, and insights on saving money with BYOT integrations."
        keywords="field service blog, contractor tips, fsm software updates, integration guides, byot philosophy, customer stories"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Creative Job Hub Blog</h1>
            <p className="text-xl text-blue-100">
              Tips, updates, and stories to help you grow your business
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  {post.featuredImage && (
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <NewsletterSignup />
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Try Creative Job Hub?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your 14-day free trial. No credit card required.
            </p>
            <Link
              to="/signup"
              className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
