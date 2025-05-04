
import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedBook from '../components/FeaturedBook';
import BookCard from '../components/BookCard';
import { Book } from '../components/BookCard';

const Index = () => {
  // Sample books data
  const featuredBook: Book = {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
    description: "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
    genre: "Classic Fiction"
  };

  const recentBooks: Book[] = [
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      coverImage: "https://images.unsplash.com/photo-1495640388908-44d4e49d2afb?auto=format&fit=crop&q=80",
      description: "1984 is a dystopian novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
      genre: "Dystopian Fiction"
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      coverImage: "https://images.unsplash.com/photo-1603162617041-b67d314f956f?auto=format&fit=crop&q=80",
      description: "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
      genre: "Classic Romance"
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?auto=format&fit=crop&q=80",
      description: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.",
      genre: "Classic Fiction"
    }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <div className="library-hero py-24 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Vibe Library</h1>
          <p className="text-xl md:text-2xl mb-8">Discover worlds between the pages.</p>
          <Link to="/catalog" className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md text-lg font-medium transition-colors inline-block">
            Browse Our Collection
          </Link>
        </div>
      </div>

      {/* Featured Book Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Book</h2>
        <FeaturedBook book={featuredBook} />
      </div>

      {/* Recent Additions */}
      <div className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Additions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recentBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/catalog" className="inline-block border-2 border-primary hover:bg-primary hover:text-primary-foreground text-primary px-6 py-2 rounded-md transition-colors">
              View All Books
            </Link>
          </div>
        </div>
      </div>

      {/* Library Info */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Extended Hours</h3>
            <p className="text-muted-foreground">Now open until 8pm on weekdays to serve you better.</p>
          </div>
          <div className="p-6">
            <div className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">New Collections</h3>
            <p className="text-muted-foreground">Fresh titles added weekly to our growing collection.</p>
          </div>
          <div className="p-6">
            <div className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Community Events</h3>
            <p className="text-muted-foreground">Join our reading groups and author meet & greets.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
