import { GalleryDataMess } from "./GalleryDataMess";
import { useEffect, useState } from "react";
import "./GalleryMess.css";

function GalleryMess() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryDataMess);
    setCollection([...new Set(GalleryDataMess.map((item) => item.title))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryDataMess.filter((item) => item.title == itemData);
    setData(filterData);
  };

  return (
    <div className="galleryWrapper">
      <div className="filterItem">
        <div className="heading-css-1">
          {/* <h1>Amaya Mess</h1> */}
          <br />
          <br />
        </div>
        {/* <ul>
          <li>
            <button onClick={() => setData(GalleryDataMess)}>Mess</button>
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
        </ul> */}
      </div>
      <div className="galleryContainer">
        {data.map((item) => (
          <div key={item.id} className="galleryItem">
            <img src={item.image} alt="image error" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryMess;
