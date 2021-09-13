import "./App.css";
import Category from "./Components/Category";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  HashRouter,
} from "react-router-dom";
import Book from "./Components/Book";
import Servcies from "./Components/Services";

function App() {
  return (
    <div className="App">
      <HashRouter>
        {" "}
        <Route exact path="/" render={() => <Redirect to="/category" />} />
        <Route exact path="/book" component={Book} />{" "}
        <Route path="/category" component={Category} />{" "}
        <Route
          exact
          path="/book/:genre"
          render={(props) => <Book genre={props.match.params.genre} />}
          //
        />
      </HashRouter>{" "}
    </div>
  );
}

export default App;
