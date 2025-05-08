
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-blue-500 font-heading font-bold text-2xl">
          KB<span className="text-gray-800">.</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 pt-20">
            <ul className="flex flex-col items-center space-y-6">
              {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                <li key={item} className="w-full text-center">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-lg font-medium text-gray-800 hover:text-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
