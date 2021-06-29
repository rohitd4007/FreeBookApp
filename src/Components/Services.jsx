import axios from "axios";
import { useEffect, useState } from "react";
import "./Book.css";
const Services = (props) => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get("http://gutendex.com/books/?mime_type=text%2F", {})
      .then((res) => {
        setImage(res.data.results);
      })
      .catch((err) => {
        console.log(err, "💥");
      });
  });

  return (
    <div className="da">
      {image.map((da, index) => (
        // <div>{da.formats["image/jpeg"]}</div>
        <img
          key={index}
          className="book-cover"
          src={da.formats["image/jpeg"]}
          alt=""
        />
      ))}
    </div>
  );
};

export default Services;
