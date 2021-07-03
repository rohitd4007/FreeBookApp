import axios from "axios";
import { useEffect, useState } from "react";
import "./Book.css";
const PAGE_NO = 1;
const Services = (props) => {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(PAGE_NO);

  useEffect(() => {
    axios
      .get(`http://gutendex.com/books/?mime_type=text%2F&page=${page}`)
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
    <div className="da">
      {image.map((da, index) => (
        <div key={index}>{da.title}</div>
        // <img
        //   key={index}
        //   className="book-cover"
        //   src={da.formats["image/jpeg"]}
        //   alt=""
        // />
      ))}
    </div>
  );
};

export default Services;
