import react from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import "./StudentLife.css";
import { Link } from "react-router-dom";

export default function StudentLife() {
  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="main-stud">
      <div className="stud1">
        <h1>STUDENT LIFE</h1>
      </div>
      <Grid
        h="500px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2} bg="tomato">
          <div className="img-stud-1">
            <div className="text-img-stud">
              <p>ELECTRICAL LAB</p>
            </div>
          </div>
        </GridItem>
        <GridItem colSpan={4} bg="papayawhip">
          <div className="img-stud-2">
            <div className="text-img-stud">
              <p>Project Based Learning</p>
            </div>
          </div>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2} bg="tomato">
          <div className="img-stud-3" onClick={() => scrollToDiv("gallery")}>
            <div className="text-img-stud">
              <p>GALLERY</p>
            </div>
          </div>
        </GridItem>
        <GridItem colSpan={2} bg="tomato">
          <div className="img-stud-4">
            <div className="text-img-stud">
              <p>LIBRARY</p>
            </div>
          </div>
        </GridItem>
        <GridItem colSpan={2} bg="tomato">
          <div className="img-stud-5">
            <div className="text-img-stud">
              <p>Value Added Courses</p>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}
