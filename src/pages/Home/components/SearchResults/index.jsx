import BookCard from "../BookCard/index.jsx";
import { useBooks } from "../../../../cache/books.jsx";
import { useSearch } from "../../../../cache/search.jsx";

import { cNotFoundMessage, cSearchResultsContainer } from "./index.module.css";

export default () => {
  const [books] = useBooks();
  const [search] = useSearch();

  const cards = books
    .filter(({ title }) => title.includes(search))
    .map((book) => <BookCard key={book.id} book={book} />);

  return (
    <div className={cSearchResultsContainer}>
      {cards.length > 0 ? (
        cards
      ) : (
        <p className={cNotFoundMessage}>
          The book for a <strong>{search}</strong> request is not found.
        </p>
      )}
    </div>
  );
};
