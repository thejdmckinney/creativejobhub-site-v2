import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 border-b border-gray-700">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-brand">Creative Job Hub</h1>
            <div className="flex gap-6">
              <a href="/" className="hover:text-brand transition-colors">Home</a>
              <a href="/pricing" className="hover:text-brand transition-colors">Pricing</a>
              <a href="/contact" className="hover:text-brand transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer className="bg-gray-800 border-t border-gray-700 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>&copy; 2026 Creative Job Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
