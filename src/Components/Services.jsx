import axios from "axios";
import { useEffect, useState } from "react";

const Services = (props) => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get("http://gutendex.com/books/?mime_type=text%2F")
      .then((response) => {
        response.data.results.map((book, index) => {
          console.log(book.formats["image/jpeg"]);

          setImage(...image, book.formats["image/jpeg"]);
        });
      })
      .catch((err) => {
        console.log("image over");
      });
  });

  return (
    <div>
      Hello:{image}
      <img src={image} alt="" />
    </div>
  );
};

export default Services;
