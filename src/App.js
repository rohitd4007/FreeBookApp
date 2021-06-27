import "./App.css";
import Category from "./Components/Category";
import Cards from "./Components/Cards";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Book from "./Components/Book";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => <Redirect to="/category" />} />

        <Route exact path="/book" component={Book} />
        <Route path="/category" component={Category} />
      </Router>
    </div>
  );
}

export default App;
