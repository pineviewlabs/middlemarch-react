import Grid from "../../../../components/Grid/index.jsx";
import BookCard from "../../../../components/BookCard/index.jsx";
import { useBooks } from "../../../../cache/books.jsx";

import { cArrivalsTitle } from "./index.module.css";

export default () => {
  const [books] = useBooks();

  return (
    <section>
      <h2 className={cArrivalsTitle}>New arrivals</h2>
      <Grid>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Grid>
    </section>
  );
};
