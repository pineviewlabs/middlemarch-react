import { useEffect, useReducer, useContext, createContext } from "react";

const refreshActionType = "booksRefreshed";

const refreshAction = (dispatch) =>
  fetch("/api/books")
    .then((response) => response.json())
    .then((payload) => dispatch({ type: refreshActionType, payload }));

const BooksContext = createContext([]);

export default ({ children }) => {
  const [books, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case refreshActionType:
        return action.payload;

      default:
        return state;
    }
  }, []);

  useEffect(() => void refreshAction(dispatch), []);

  return (
    <BooksContext.Provider value={[books, dispatch]}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  const [books, dispatch] = useContext(BooksContext);

  return [books, { refresh: () => refreshAction(dispatch) }];
};
