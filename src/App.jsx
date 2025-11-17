import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-500">
          © {new Date().getFullYear()} Flux Wallet. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
