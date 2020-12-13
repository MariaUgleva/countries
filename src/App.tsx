import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./index";
import AllCountries from "./Components/AllCountries";
import { requestFetchAllCountriesAction } from "./Redux/Actions/AllCountriesActions";
import SearchResult from "./Components/SearchResult";
import { AppState } from "./Redux/Reducers/rootReducer";
import OneCountry from "./Components/OneCountry";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestFetchAllCountriesAction());
  }, [dispatch]);
  const mode = useSelector((state: AppState) => state.mode);
  return (
    <ConnectedRouter history={history}>
      <div className={mode.toLocaleLowerCase()}>
        <Header />        
        <Switch>
          <Route exact path="/" component={AllCountries} />
          <Route exact path="/:id" component={SearchResult} />
          <Route exact path="/:id/extra" component={OneCountry} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default App;
