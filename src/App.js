import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import BrowsePage from "./pages/BrowsePage";
import Page404 from "./pages/Page404";
import AddPage from "./pages/AddPage";
import axios from 'axios';
import SearchPage from "./pages/SearchPage";
import BookmarkPage from "./pages/BookmarkPage";
import CommentPage from "./pages/CommentPage";


function App() {
  // const getDataFromOriginalBackend = async ()=> {
  //   const data = await axios.get("http://localhost:8000/movies");
  //   console.log(data);
  // }

  // getDataFromOriginalBackend()
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/signin">
          <SigninPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/browse">
          <BrowsePage />
        </Route>
        <Route path="/add">
          <AddPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/bookmarks">
          <BookmarkPage />
        </Route>
        <Route path="/comments">
          <CommentPage />
        </Route>
        <Route path = "/*">
          <Page404/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
