import axios from "axios";
import { useEffect, useState } from "react";
import "./Cards.css";
const PAGE_NUMBER = 1;
const Cards = (props) => {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  useEffect(() => {
    axios
      .get(
        `http://gutendex.com/books/?mime_type=text%2F&page=${page}&topic=${props.topic}&search=dickens`,
        {}
      )
      .then((res) => {
        setImage([...image, ...res.data.results]);
      })
      .catch((err) => {
        console.log(err, "💥");
      });
  }, [page]);

  const scrollToEnd = () => {
    setPage(page + 1);
  };
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <div className="book-cards">
      {image.map((da, index) => (
        <div
          onClick={(e) => {
            e.preventDefault();
            window.location.href = da.formats["text/html; charset=utf-8"];
          }}
          key={index}
          className="book-cover"
        >
          <img className="book-image" src={da.formats["image/jpeg"]} alt="" />
          <div className="book-title">{da.title}</div>
          {da.authors[0] ? (
            <div className="book-author">{da.authors[0].name}</div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;
