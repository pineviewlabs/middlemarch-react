import Icon from "../../../../components/icons/index.jsx";
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
  const [search, setSearch] = useSearch();

  return (
    <section
      className={`${cBlock} ${search.length === 0 ? cWithBackground : ""}`}
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
        <button className={cSearchButton} type="submit">
          <Icon name="search" />
        </button>
      </form>
    </section>
  );
};
