import { Link } from 'react-router-dom';

interface RelatedPage {
  title: string;
  description: string;
  path: string;
  icon?: string;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
  title?: string;
}

export default function RelatedPages({ pages, title = "Related Pages" }: RelatedPagesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
            >
              {page.icon && (
                <div className="text-4xl mb-4">{page.icon}</div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {page.title}
              </h3>
              <p className="text-gray-600">
                {page.description}
              </p>
              <div className="mt-4 text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-block">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
