import Grid from "../../../../components/Grid/index.jsx";
import BookCard from "../../../../components/BookCard/index.jsx";
import { useBooks } from "../../../../cache/books.jsx";
import { useSearch } from "../../../../cache/search.jsx";

import { cNotFoundMessage } from "./index.module.css";

export default () => {
  const [books] = useBooks();
  const [search] = useSearch();

  const matchedBooks = books.filter(({ title }) => title.includes(search));

  return matchedBooks.length > 0 ? (
    <Grid>
      {matchedBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </Grid>
  ) : (
    <p className={cNotFoundMessage}>
      The book for a <strong>{search}</strong> request is not found.
    </p>
  );
};
