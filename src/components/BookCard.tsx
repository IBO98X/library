
import React from 'react';
import { Link } from 'react-router-dom';

export interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  genre: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`} className="block">
      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="h-64 overflow-hidden">
          <img 
            src={book.coverImage} 
            alt={`${book.title} cover`} 
            className="w-full h-full object-cover book-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-1 line-clamp-1">{book.title}</h3>
          <p className="text-muted-foreground text-sm mb-2">by {book.author}</p>
          <span className="inline-block bg-muted px-2 py-1 rounded text-xs text-muted-foreground">
            {book.genre}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
