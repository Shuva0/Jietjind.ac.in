import { GalleryData } from "./GalleryData.js";
import { useEffect, useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.title == itemData);
    setData(filterData);
  };

  return (
    <div className="galleryWrapper">
      <div className="filterItem">
        <div className="heading-css-1">
          <h1>Gallery of Jiet</h1>
          <br />
          <br />
        </div>
        <ul>
          <li>
            <button onClick={() => setData(GalleryData)}>All</button>
          </li>
          {collection.map((item) => (
            <li>
              <button
                onClick={() => {
                  gallery_filter(item);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="galleryContainer">
        {data.map((item) => (
          <div key={item.id} className="galleryItem">
            <img src={item.image} alt={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
