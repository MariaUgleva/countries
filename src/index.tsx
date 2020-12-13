import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Redux/Reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { watchReguestAll } from "./Redux/Sagas/AllCountriesSaga";
import App from "./App";
import './global.scss';
import './mode.scss';
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export const history = createBrowserHistory();
const persistConfig = {
  key: "allCountries",
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const initStore = (): { store: Store; persistor: Persistor } => {
  const initialStore = {};
  const store = createStore(
    persistReducer(persistConfig, rootReducer(history)),
    initialStore,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );
  const persistor: Persistor = persistStore(store);
  return { store, persistor };
};
const { store, persistor } = initStore();
sagaMiddleware.run(watchReguestAll);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
