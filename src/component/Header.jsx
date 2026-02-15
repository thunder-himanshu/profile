import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navLinks = [
  { name: 'Home', href: 'intro' },
  { name: 'About', href: 'about' }, 
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'subscription' } 
];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link 
              to="intro" 
              smooth={true} 
              duration={500}
              className="-m-1.5 p-1.5 cursor-pointer"
            >
              <span className="sr-only">Himanshu</span>
              <h1 className="text-2xl font-extrabold bg-clip-text text-blue-200 font-poppins tracking-tighter drop-shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out select-none">
                {"< "}Himanshu{" />"}
              </h1>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-200 hover:text-[#64ffda] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open main menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className="text-lg font-medium text-blue-200 hover:text-[#64ffda] transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
          {/* Background backdrop */}
          <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link 
                to="intro" 
                smooth={true} 
                duration={500}
                className="-m-1.5 p-1.5 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Himanshu</span>
                <h1 className="text-2xl font-extrabold bg-clip-text text-blue-200 font-poppins tracking-tighter">
                  {"< "}Himanshu{" />"}
                </h1>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-blue-200 hover:text-[#64ffda] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mt-12 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-8 py-6">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-3 text-lg font-medium text-blue-200 hover:bg-gray-800 hover:text-[#64ffda] transition-colors duration-300 cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;