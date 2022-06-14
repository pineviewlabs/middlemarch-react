import { useEffect, useReducer, useContext, createContext } from "react";

const refreshActionType = "salesRefreshed";

const refreshAction = (dispatch) =>
  fetch("/api/sales")
    .then((response) => response.json())
    .then((payload) => dispatch({ type: refreshActionType, payload }));

const SalesContext = createContext([]);

export default ({ children }) => {
  const [sales, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case refreshActionType:
        return action.payload;

      default:
        return state;
    }
  }, []);

  useEffect(() => void refreshAction(dispatch), []);

  return (
    <SalesContext.Provider value={[sales, dispatch]}>
      {children}
    </SalesContext.Provider>
  );
};

export const useSales = () => {
  const [sales, dispatch] = useContext(SalesContext);

  return [sales, { refresh: () => refreshAction(dispatch) }];
};
