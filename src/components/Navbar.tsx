
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-secondary px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <NavLink to="/" className="text-primary-foreground text-2xl font-bold font-playfair flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Vibe Library
          </NavLink>
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items-center">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive ? "text-accent font-semibold" : "text-primary-foreground hover:text-accent transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/catalog" 
            className={({isActive}) => 
              isActive ? "text-accent font-semibold" : "text-primary-foreground hover:text-accent transition-colors"
            }
          >
            Catalog
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              isActive ? "text-accent font-semibold" : "text-primary-foreground hover:text-accent transition-colors"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              isActive ? "text-accent font-semibold" : "text-primary-foreground hover:text-accent transition-colors"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
