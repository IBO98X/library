
import React, { useState } from 'react';
import BookCard, { Book } from '../components/BookCard';

const Catalog = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  // Sample books data
  const allBooks: Book[] = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
      description: "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and has become a classic of modern American literature.",
      genre: "Classic Fiction"
    },
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
      description: "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet.",
      genre: "Classic Romance"
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?auto=format&fit=crop&q=80",
      description: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg.",
      genre: "Classic Fiction"
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      coverImage: "https://images.unsplash.com/photo-1580933385364-8e9688932c72?auto=format&fit=crop&q=80",
      description: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab.",
      genre: "Adventure"
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      coverImage: "https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?auto=format&fit=crop&q=80",
      description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim.",
      genre: "Fantasy"
    },
    {
      id: 7,
      title: "Brave New World",
      author: "Aldous Huxley",
      coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80",
      description: "Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State.",
      genre: "Dystopian Fiction"
    },
    {
      id: 8,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      coverImage: "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?auto=format&fit=crop&q=80",
      description: "Jane Eyre is a novel by English writer Charlotte Brontë, published under the pen name 'Currer Bell', on 16 October 1847, by Smith, Elder & Co. of London.",
      genre: "Classic Romance"
    }
  ];

  // Get unique genres for filters
  const genres = ["All", ...Array.from(new Set(allBooks.map(book => book.genre)))];

  // Filter books by genre
  const filteredBooks = activeFilter === "All" 
    ? allBooks 
    : allBooks.filter(book => book.genre === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 page-transition">
      <h1 className="text-4xl font-bold mb-4 text-center">Book Catalog</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Explore our extensive collection of books across various genres. From timeless classics to modern masterpieces, find your next great read.
      </p>

      {/* Genre Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => setActiveFilter(genre)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === genre
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 hover:bg-secondary/80 text-foreground"
            } transition-colors`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      
      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No books found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Catalog;
