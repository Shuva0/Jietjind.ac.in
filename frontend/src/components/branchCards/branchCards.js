import React from "react";
import "./BranchCards.css";
export default function BranchCards() {
  const imageData = [
    {
      id: 1,
      img: "/assets/images/cse.jpg",
      label: "Computer Science & Engineering",
    },
    {
      id: 2,
      img: "/assets/images/ee.png",
      label: "Electrical Engineering",
    },
    {
      id: 3,
      img: "/assets/images/me.jpg",
      label: "Mechanical Engineering",
    },
    {
      id: 4,
      img: "/assets/images/ci.jpg",
      label: "Civil Engineering",
    },
    {
      id: 5,
      img: "/assets/images/bb.jpg",
      label: "Management Studies (BBA)",
    },
    {
      id: 6,
      img: "/assets/images/bca.jpeg",
      label: "Bachelors' in Computer Application",
    },
  ];
  return (
    <div className="speaker-section-grid">
      {imageData.map((item) => {
        return (
          <div
            class="first hero "
            data-toggle="modal"
            data-target="#speaker-modal-6"
          >
            <img src={item.img} alt="tedxsitb" class="image " width="100%" />
            <div class="text"></div>
            <div class="logo">
              <img src="/assets/images/logopng.png" alt="tedxsitb" />
            </div>
            <div class="main-text">
              <p
                style={{
                  fontSize: "large",
                  color: "#fff",
                  fontFamily: "cursive",
                }}
              >
                {item.label}
              </p>
            </div>

            <div
              class="hero-btn"
              style={{ fontWeight: 300, color: "#ffffffbc" }}
            >
              <a>Know More</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
