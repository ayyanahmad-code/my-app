// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, ChevronRight, Info } from 'lucide-react';
import logo from "../Images/logo-2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFooterInfo, setShowFooterInfo] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Services Overview', path: '/services' },
        { name: 'Mechanical Analysis', path: '/services/mechanical-analysis' },
        { name: 'Assembly Modeling', path: '/services/assembly-modeling' },
        { name: 'Product Design', path: '/services/product-design' },
        { name: 'Reverse Engineering', path: '/services/reverse-engineering' },
        { name: 'Jigs & Fixtures', path: '/services/jigs' },
        { name: 'CAD Customization', path: '/services/CAD' },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'WorkMethodology', path: '/Work' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Enhanced navigation handler with scroll to top
  const handleNavigation = (path, closeMenu = false) => {
    if (closeMenu) {
      setIsOpen(false);
      setServicesOpen(false);
    }
    
    // If already on the same page, just scroll to top
    if (location.pathname === path) {
      scrollToTop();
    } else {
      // Navigate to new page, then scroll to top after navigation
      navigate(path);
      setTimeout(scrollToTop, 100);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-hide footer info after delay
  useEffect(() => {
    if (showFooterInfo) {
      const timer = setTimeout(() => {
        setShowFooterInfo(false);
      }, 5000); // Hide after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [showFooterInfo]);

  const toggleFooterInfo = () => {
    setShowFooterInfo(!showFooterInfo);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:support@apmsengineering.com" 
              className="flex items-center hover:text-primary transition-colors"
            >
              <Mail size={14} className="mr-2" />
              support@apmsengineering.com
            </a>
          </div>
          <div className="hidden md:block">
            <a 
              href="tel:+917987074614" 
              className="flex items-center hover:text-primary transition-colors"
            >
              <Phone size={14} className="mr-2" />
              +91-7987074614
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div 
                onClick={() => handleNavigation('/')}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <div className="w-52 h-full rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={logo}
                    alt="APMS Engineering Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-500 rounded-lg flex items-center justify-center">
                          <span class="text-white font-bold text-xl">A</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <div 
                      className="relative group"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button 
                        className={`flex items-center space-x-1 py-2 font-medium transition-colors ${
                          isActive(link.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                      </button>
                      <div className={`absolute left-0 mt-2 w-64 bg-white shadow-2xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
                        {link.dropdown.map((item) => (
                          <div
                            key={item.name}
                            onClick={() => handleNavigation(item.path)}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary cursor-pointer transition-colors"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleNavigation(link.path)}
                      className={`py-2 font-medium cursor-pointer transition-colors ${
                        isActive(link.path) ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </div>
                  )}
                </div>
              ))}
              
              {/*  Get Quote Button */}
              <div className="relative group">
              <Link
                to="/contact"
                className="block btn-primary text-center mt-1 py-2"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
                
                {/* Footer Info Dropdown */}
                {showFooterInfo && (
                  <div className="absolute right-0 mt-3 w-80 bg-white shadow-2xl rounded-xl p-6 animate-slideDown z-50 border border-gray-100">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <MapPin size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Address</h4>
                          <p className="text-sm text-gray-600 mt-1">Pune, Maharashtra, India</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Phone size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Phone</h4>
                          <a 
                            href="tel:+917987074614" 
                            className="text-sm text-gray-600 hover:text-primary transition-colors block mt-1"
                          >
                            +91-7987074614
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Mail size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Email</h4>
                          <a 
                            href="mailto:support@apmsengineering.com" 
                            className="text-sm text-gray-600 hover:text-primary transition-colors block mt-1"
                          >
                            support@apmsengineering.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Clock size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Working Hours</h4>
                          <p className="text-sm text-gray-600 mt-1">Mon-Fri: 9:00 AM - 6:00 PM</p>
                          <p className="text-sm text-gray-600">Sat: 10:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button 
                        onClick={() => {
                          handleNavigation('/contact');
                          setShowFooterInfo(false);
                        }}
                        className="w-full flex items-center justify-center space-x-2 bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
                      >
                        <span>Get Quote</span>
                        <ChevronRight size={18} />
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-3">
                        Click above to request a quote or consultation
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 animate-slideDown">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="py-2">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-primary font-medium transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 space-y-2 animate-slideDown">
                          {link.dropdown.map((item) => (
                            <div
                              key={item.name}
                              onClick={() => handleNavigation(item.path, true)}
                              className="block py-2 text-gray-600 hover:text-primary cursor-pointer transition-colors"
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      onClick={() => handleNavigation(link.path, true)}
                      className="block py-3 text-gray-700 hover:text-primary font-medium cursor-pointer transition-colors"
                    >
                      {link.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Scroll to top indicator */}
        {isScrolled && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-black rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 animate-bounce hover:animate-none z-40 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;