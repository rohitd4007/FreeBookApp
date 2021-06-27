import React, { useState } from "react";
import pattern from "../icons/Pattern.svg";
// import "./Cards.css";

const Cards = (props) => {
  const Team = ["Team 1", "Team 2", "Team 3", "Team 4"];
  const [response, setResponse] = useState([
    ["Team 1", "Team 2", "Team 3", "Team 4"],
  ]);

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => {
    setShowResults(true);
  };
  return (
    <div>
      <div className="team-container">
        {response.map((data, index) => (
          <div key={index}>{data}</div>
        ))}
      </div>
      <button onClick={onClick}>show</button>
      {showResults ? (
        <div id="results" className="search-results">
          <input value type="text" placeholder="enter new team name" />
          <button
            onClick={() => {
              setResponse([...response, "new"]);
            }}
          >
            Add
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

// const Results = (team) => (

// );

export default Cards;
