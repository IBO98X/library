
import React from 'react';

const About = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <div className="relative">
        <div className="bg-secondary h-64 md:h-80">
          <div className="absolute inset-0 opacity-30">
            <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80" 
                 alt="Library interior" 
                 className="w-full h-full object-cover" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About Our Library</h1>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 1998, Vibe Library started as a small community book exchange in a single room. 
              Today, we've grown into a vital community resource, housing over 25,000 books, digital 
              resources, and multimedia materials.
            </p>
            <p className="text-lg mb-4">
              Our mission is to foster a love of reading and lifelong learning in our community. We believe 
              that access to information and literature should be available to everyone, regardless of 
              background or circumstance.
            </p>
            <p className="text-lg">
              Over the years, we've expanded our services to include digital resources, community events, 
              reading programs, and educational workshops to better serve our growing community.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80" 
                 alt="Library building" 
                 className="w-full h-auto" />
          </div>
        </div>
        
        {/* Our Vision */}
        <div className="bg-muted py-12 px-6 rounded-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl italic">
              "To be a center for knowledge, inspiration, and community connection. 
              We envision a place where curiosity thrives, ideas flourish, and everyone has the 
              opportunity to grow through access to diverse information and resources."
            </p>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
                   alt="Library Director" 
                   className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">James Wilson</h3>
                <p className="text-muted-foreground mb-3">Library Director</p>
                <p>James has been with us for over 15 years, bringing his passion for literature and community service to everything we do.</p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                   alt="Head Librarian" 
                   className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-muted-foreground mb-3">Head Librarian</p>
                <p>With a Master's in Library Science, Sarah ensures our collection stays current and accessible to all community members.</p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                   alt="Community Outreach Manager" 
                   className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-muted-foreground mb-3">Community Outreach Manager</p>
                <p>Michael works to create engaging programs and partnerships that bring the joy of reading to all corners of our community.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:mx-auto md:max-w-2xl pl-8 pb-8">
            <div className="mb-12 relative">
              <div className="absolute -left-11 w-6 h-6 rounded-full bg-primary"></div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">1998</h3>
                <p>Vibe Library founded as a small community book exchange in a rented storefront with just 500 books.</p>
              </div>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-11 w-6 h-6 rounded-full bg-primary"></div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">2005</h3>
                <p>Moved to our current location, a renovated historic building in the heart of downtown.</p>
              </div>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-11 w-6 h-6 rounded-full bg-primary"></div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">2010</h3>
                <p>Expanded our services to include digital resources, computers, and internet access for the community.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-11 w-6 h-6 rounded-full bg-primary"></div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">2020</h3>
                <p>Celebrated our successful adaptation to pandemic challenges with virtual programming and expanded e-book collection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
