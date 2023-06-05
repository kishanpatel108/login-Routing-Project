import React, { useEffect, useState } from "react";
import "./home.css"

function Home() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data) => {
        return data.json();
      })
      .then((RightData) => {
          setImage(RightData);
      });
  }, []);
  return (
    <div className="image_box">
    <h1>this is home page </h1>
        {
        image.map((elem) => {    
            return <img className="per_image" src={elem.url}/>
        
        })
      }
    </div>
  );
}

export default Home;
