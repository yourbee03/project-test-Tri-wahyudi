import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setHidden(true);  // Hide header on scroll down
      } else {
        setHidden(false); // Show header on scroll up
        setIsSticky(scrollTop > 100); // Make header sticky after scrolling down 100px
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="container">
        <a href="/" className="logo">
          <img
            src="/images/suitmedia.PNG" // Path relatif dari folder public
            alt="SuitMedia Logo"
          />
        </a>
        <nav>
          <ul>
            <li>
              <a href="/work" className={window.location.pathname === '/work' ? 'active' : ''}>Work</a>
            </li>
            <li>
              <a href="/about" className={window.location.pathname === '/about' ? 'active' : ''}>About</a>
            </li>
            <li>
              <a href="/services" className={window.location.pathname === '/services' ? 'active' : ''}>Services</a>
            </li>
            <li>
              <a href="/ideas" className={window.location.pathname === '/ideas' ? 'active' : ''}>Ideas</a>
            </li>
            <li>
              <a href="/careers" className={window.location.pathname === '/careers' ? 'active' : ''}>Careers</a>
            </li>
            <li>
              <a href="/contact" className={window.location.pathname === '/contact' ? 'active' : ''}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
