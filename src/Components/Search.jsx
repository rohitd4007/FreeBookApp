import "./Search.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Search = (props) => {
  const [text, setText] = useState("");
  const newText = useRef("");
  const getSerachData = (e) => {
    if (e.key === "Enter") {
      axios
        .get(`http://gutendex.com/books/?search=${text}%20great`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(" 🔺", err));
    }
  };

  const searchInput = (e) => {
    setText(e.target.value);
    // console.log(newText.current.value);
  };

  return (
    <div className="search-container">
      <input
        onKeyUp={(e) => {
          getSerachData(e);
        }}
        onChange={searchInput}
        className="search"
        ref={newText}
        value={text}
        type="search"
        placeholder="Search"
      ></input>
    </div>
  );
};

export default Search;
