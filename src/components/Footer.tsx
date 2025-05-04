
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-primary-foreground py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Vibe Library</h3>
            <p className="text-sm opacity-80">
              Providing knowledge and inspiration through our extensive collection of books and resources.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link to="/catalog" className="text-sm opacity-80 hover:opacity-100">Catalog</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100">About Us</Link></li>
              <li><Link to="/contact" className="text-sm opacity-80 hover:opacity-100">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <ul className="text-sm opacity-80">
              <li>Monday - Friday: 9am - 8pm</li>
              <li>Saturday: 10am - 6pm</li>
              <li>Sunday: 12pm - 5pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Vibe Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
