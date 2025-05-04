
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from './BookCard';

interface FeaturedBookProps {
  book: Book;
}

const FeaturedBook: React.FC<FeaturedBookProps> = ({ book }) => {
  return (
    <div className="bg-card shadow-xl rounded-lg overflow-hidden grid md:grid-cols-2">
      <div className="h-full">
        <img 
          src={book.coverImage} 
          alt={`${book.title} cover`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <span className="text-sm text-accent font-semibold uppercase tracking-wider">Featured Book</span>
          <h2 className="text-2xl font-bold mt-2 mb-3">{book.title}</h2>
          <p className="text-muted-foreground mb-3">by {book.author}</p>
          <p className="mb-4 line-clamp-4">{book.description}</p>
        </div>
        <Link 
          to={`/book/${book.id}`}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded inline-block text-center transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBook;
