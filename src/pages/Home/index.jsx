import { Fragment } from "react";

import Sales from "./components/Sales/index.jsx";
import Arrivals from "./components/Arrivals/index.jsx";
import FirstView from "./components/FirstView/index.jsx";
import SearchResults from "./components/SearchResults/index.jsx";
import { useSearch } from "../../cache/search.jsx";

export default () => {
  const [search] = useSearch();

  return (
    <Fragment>
      <FirstView />

      {search.length > 0 ? (
        <SearchResults />
      ) : (
        <Fragment>
          <Arrivals />
          <Sales />
        </Fragment>
      )}
    </Fragment>
  );
};
