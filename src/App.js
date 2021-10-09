import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";
import NotFound from "./components/NotFound/NotFound";
import Favorites from "./components/Favorites/Favorites";
import History from "./components/History/History";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SignUpForm from "./components/Forms/SignUpForm";
import SignInForm from "./components/Forms/SignInForm";
import SearchPage from "./components/SearchPage/SearchPage";

// Hooks
import useInitFetch from "./hooks/useInitFetch";

const App = () => {
  useInitFetch();

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/signin" component={SignInForm} />
        <Route path="/search" component={SearchPage} />
        <ProtectedRoute path="/favorites" component={Favorites} />
        <ProtectedRoute path="/history" component={History} />
        <Route path="/movie/:movieId" component={Movie} />
        <Route path="*" component={NotFound} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
