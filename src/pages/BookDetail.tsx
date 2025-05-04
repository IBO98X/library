
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Book } from '../components/BookCard';

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Sample books data - in a real app this would come from an API
  const books: Book[] = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
      description: "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten. The story takes place during three years of the Great Depression in the fictional town of Maycomb, Alabama. The novel is known for its warmth and humor, despite dealing with serious issues of rape and racial inequality. It has been translated into more than 40 languages with more than a million copies sold annually.",
      genre: "Classic Fiction"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      coverImage: "https://images.unsplash.com/photo-1495640388908-44d4e49d2afb?auto=format&fit=crop&q=80",
      description: "1984 is a dystopian novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. The story takes place in an imagined future when most of the world has fallen victim to perpetual war, omnipresent government surveillance, historical negationism, and propaganda. Great Britain, known as Airstrip One, has become a province of a totalitarian superstate named Oceania that is ruled by the Party who employ the Thought Police to persecute individuality and independent thinking.",
      genre: "Dystopian Fiction"
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      coverImage: "https://images.unsplash.com/photo-1603162617041-b67d314f956f?auto=format&fit=crop&q=80",
      description: "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness. Its humor lies in its honest depiction of manners, education, marriage, and money during the Regency era in Great Britain.",
      genre: "Classic Romance"
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?auto=format&fit=crop&q=80",
      description: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan. The Great Gatsby explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age or the Roaring Twenties that has been described as a cautionary tale regarding the American Dream.",
      genre: "Classic Fiction"
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      coverImage: "https://images.unsplash.com/photo-1580933385364-8e9688932c72?auto=format&fit=crop&q=80",
      description: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee. A commercial failure and out of print at the time of the author's death in 1891, its reputation as a Great American Novel was established only in the 20th century.",
      genre: "Adventure"
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      coverImage: "https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?auto=format&fit=crop&q=80",
      description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim. The book remains popular and is recognized as a classic in children's literature. The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory.",
      genre: "Fantasy"
    },
    {
      id: 7,
      title: "Brave New World",
      author: "Aldous Huxley",
      coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80",
      description: "Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State, inhabited by genetically modified citizens and an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by only a single individual: the story's protagonist.",
      genre: "Dystopian Fiction"
    },
    {
      id: 8,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      coverImage: "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?auto=format&fit=crop&q=80",
      description: "Jane Eyre is a novel by English writer Charlotte Brontë, published under the pen name 'Currer Bell', on 16 October 1847, by Smith, Elder & Co. of London. The first American edition was published the following year by Harper & Brothers of New York. Jane Eyre follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall.",
      genre: "Classic Romance"
    }
  ];
  
  const book = books.find(b => b.id === Number(id));
  
  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Book Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, we couldn't find the book you're looking for.</p>
        <Link to="/catalog" className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Return to Catalog
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 page-transition">
      <div className="md:flex gap-12">
        {/* Book Cover */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="rounded-lg overflow-hidden shadow-lg book-cover">
            <img 
              src={book.coverImage} 
              alt={`${book.title} cover`} 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Book Details */}
        <div className="md:w-2/3">
          <Link 
            to="/catalog" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Catalog
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">by {book.author}</p>
          
          <div className="flex items-center mb-6">
            <span className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">
              {book.genre}
            </span>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-lg leading-relaxed mb-8">{book.description}</p>
          
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Library Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground">Status</p>
                <p className="font-medium">Available</p>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="font-medium">Section B, Shelf 24</p>
              </div>
              <div>
                <p className="text-muted-foreground">Publication Year</p>
                <p className="font-medium">1960</p>
              </div>
              <div>
                <p className="text-muted-foreground">ISBN</p>
                <p className="font-medium">978-0-06-112008-4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
