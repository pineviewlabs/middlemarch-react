import BookCard from "../BookCard/index.jsx";
import { useBooks } from "../../../../cache/books.jsx";

import { cArrivalsTitle, cArrivalsContainer } from "./index.module.css";

export default () => {
  const [books] = useBooks();

  return (
    <section>
      <h2 className={cArrivalsTitle}>New arrivals</h2>
      <div className={cArrivalsContainer}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};
