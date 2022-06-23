import { useId } from "react";

import Icon from "../../../../components/icons/index.jsx";
import { useBooks } from "../../../../cache/books.jsx";
import { useSearch } from "../../../../cache/search.jsx";

import {
  cBlock,
  cTitle,
  cSubtitle,
  cSearchForm,
  cSearchInput,
  cSearchButton,
  cWithBackground,
} from "./index.module.css";

export default () => {
  const searchIdList = useId();
  const [books] = useBooks();
  const [search, setSearch] = useSearch();

  return (
    <section
      className={`${cBlock} ${
        search.length === 0 ? cWithBackground : ""
      } maximum-width`}
    >
      <h1 className={cTitle}>Middlemarch</h1>
      <p className={cSubtitle}>Your nightly bookstore</p>

      <form
        className={cSearchForm}
        onSubmit={(event) => {
          event.preventDefault();

          setSearch(event.currentTarget.search.value);
        }}
      >
        <input
          list={searchIdList}
          type="search"
          autoFocus
          name="search"
          placeholder="Search books..."
          aria-label="Search"
          className={cSearchInput}
          defaultValue={search}
          onInput={({ currentTarget }) =>
            currentTarget.value.length === 0 && setSearch("")
          }
        />
        <datalist id={searchIdList}>
          {books.map(({ id, title }) => (
            <option key={id} value={title} />
          ))}
        </datalist>
        <button className={cSearchButton} type="submit">
          <Icon name="search" />
        </button>
      </form>
    </section>
  );
};
