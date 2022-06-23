import Grid from "../../../../components/Grid/index.jsx";
import BookCard from "../../../../components/BookCard/index.jsx";
import { useBooks } from "../../../../cache/books.jsx";

import { cBlock, cArrivalsTitle } from "./index.module.css";

export default () => {
  const [books] = useBooks();

  return (
    <section className={cBlock}>
      <h2 className={cArrivalsTitle}>New arrivals</h2>
      <Grid className="maximum-width">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Grid>
    </section>
  );
};
