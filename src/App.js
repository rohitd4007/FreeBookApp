import "./App.css";
import Category from "./Components/Category";
import Cards from "./Components/Cards";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Book from "./Components/Book";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <Category />
      <Router>
        <Route exact path="/" render={() => <Redirect to="/category" />} />

        <Route exact path="/book" component={Book} />
        <Route path="/category" component={Category} />
        <Route
          exact
          path="/book/:genre"
          render={(props) => <Book genre={props.match.params.genre} />}
          //
        />
      </Router>
    </div>
  );
}

export default App;
