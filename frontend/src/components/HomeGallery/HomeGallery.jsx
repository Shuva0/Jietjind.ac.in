import React from "react";
import "./HomeGallery.css";
import { Stack, Heading } from "@chakra-ui/react";

const photos = [
  "./assets/images/gallery/g8.jpg",
  "./assets/images/gallery/g2.jpg",
  "./assets/images/gallery/g3.jpg",
  "./assets/images/gallery/g4.jpg",
  "./assets/images/gallery/g6.jpg",
  "./assets/images/gallery/g7.jpg",
  "./assets/images/gallery/g1.jpg",
];

export default function HomeGallery() {
  return (
    <>
      {/* <Stack spacing={0} align={"center"}>
        <Heading>Student Reviews</Heading>
      </Stack> */}
      <div className="main-wrapper-main">
        <section class="wrapper">
          <div class="top">Gallery</div>
          <div class="bottom" aria-hidden="true">
            Gallery
          </div>
        </section>
      </div>
      <div className="container">
        <ul className="cards">
          {photos.map((item) => {
            return (
              <li className="card">
                <div>
                  <img
                    src={item}
                    alt="error"
                    style={{ height: "200px", width: "500px" }}
                  />
                  {/* <div className="card-content">{item.title}</div> */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
