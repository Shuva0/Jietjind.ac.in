import { React, useEffect, useState } from "react";
import { slides } from "./slider-data";
import "./MainSlider.css";
import CardsVid from "../CardsVid/CardsVid";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import close from "./closeIcon.svg";
import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Image,
  Select,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
// import videoBg from "../";

export default function MainSlider() {
  // const arrowStyles = {
  //   cursor: "pointer",
  //   pos: "absolute",
  //   top: "50%",
  //   w: "auto",
  //   mt: "-22px",
  //   p: "16px",
  //   color: "white",
  //   fontWeight: "bold",
  //   fontSize: "18px",
  //   transition: "0.6s ease",
  //   borderRadius: "0 3px 3px 0",
  //   userSelect: "none",
  //   bg: "black",
  //   _hover: {
  //     bg: "white",
  //     color: "black",
  //     opacity: 0.8,
  //   },
  // };
  // const slides = [
  //   {
  //     img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     label: "First Slide",
  //     description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     label: "Second Slide",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  //     label: "Third Slide",
  //     description:
  //       "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     label: "Fourth Slide",
  //     description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     label: "Fifth Slide",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  // ];
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slidesCount = slides.length;

  // const prevSlide = () => {
  //   setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  // };

  // const nextSlide = () => {
  //   setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  // };

  // const setSlide = (slide) => {
  //   setCurrentSlide(slide);
  // };

  // const carouselStyle = {
  //   transition: "all .5s",
  //   ml: `-${currentSlide * 100}%`,
  // };
  // const SLIDES_INTERVAL_TIME = 5000;
  // const ANIMATION_DIRECTION = "right";
  // useEffect(() => {
  //   const automatedSlide = setInterval(() => {
  //     ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
  //   }, SLIDES_INTERVAL_TIME);
  //   return () => clearInterval(automatedSlide);
  // }, [slidesCount]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayValue, setDisplayValue] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Listen to window resize event and update the state
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [courseState, setCourse] = useState("");
  const programs = ["Post Graduate", "Under Graduate", "Diploma"];
  const course = {
    post: ["CS Eng.", "Electrical Eng."],
    under: ["CS Eng.", "Electrical Eng.", "Mechanical Eng.", "Civil Eng"],
    diploma: ["CS Eng.", "Electrical Eng.", "Mechanical Eng.", "Civil Eng"],
  };
  const dd = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const mm = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const yyyy = [
    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
    2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
  ];

  const [dob, setDob] = useState({ dd: "", mm: "", yyyy: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    Program: "",
    Course: "",
    DOB: "",
  });

  const initialData = {
    name: "",
    email: "",
    mobile: "",
    city: "",
    Program: "",
    Course: "",
    DOB: "",
  };

  const initialP = {
    program: "",
    course: "",
    dd: "",
    mm: "",
    yyyy: "",
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(dob);
    // console.log(formData);

    {
      /* Backend Send data to mongoDB code block
    const response = await axios
      .post("/detailsSubmit", { formData })
      .then((res) => {
        console.log("Success");
      })
      .catch((err) => console.log("Error"));
    */
    }

    if (
      formData.name.length === 0 ||
      formData.email.length === 0 ||
      formData.mobile.length === 0 ||
      formData.city.length === 0 ||
      formData.Program.length === 0 ||
      formData.Course.length === 0 ||
      formData.DOB.length === 0
    ) {
      alert("Please Fill All the Required Fields !!");
    } else {
      setFormData(initialData);
      emailjs
        .send(
          "jietcollege",
          "template_tcuo3mb",
          {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            city: formData.city,
            Program: formData.Program,
            Course: formData.Course,
            DOB: formData.DOB,
          },
          "GrMw4TVBlMjlARQyK"
        )
        .then(
          (res) => {
            console.log(res);
            toast({
              title: "Application Submitted",
              description:
                "Thank you for applying. We will get back to you as soon as possible.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            setFormData(initialData);
            navigate("/thankyou");
          },
          (error) => {
            setFormData(initialData);
            console.error(error);

            toast({
              title: "Error",
              description: "Internal Server Error. Please Try again Later",
              status: "error",
              duration: 5000, // 5 seconds
              isClosable: true,
            });
            // Reset form data to initial values after a short delay
            // setTimeout(() => {
            //   setFormData(initialData);
            // }, 100);
            setFormData({
              name: "",
              email: "",
              mobile: "",
              city: "",
              Program: "",
              Course: "",
              DOB: "",
            });
          }
        );
    }
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      DOB: dob.dd + "-" + dob.mm + "-" + dob.yyyy,
    }));
  }, [dob]);
  return (
    <>
      <div className="main-vid">
        <div class="slider">
          <div class="slide"></div>
          <div class="slide"></div>
          <div class="slide"></div>
          <div class="slide"></div>
          <div class="slide"></div>
        </div>
        {windowWidth < 584 || windowWidth > 1260 ? (
          <div className="left-panel">
            <span className="fancyhead">
              Transforming education through technology and expertise
            </span>
            <br />
            <br />
            <span className="fancyhead2">
              Haryana's one of the oldest Engineering College
            </span>
          </div>
        ) : (
          <></>
        )}
        {windowWidth > 584 && (
          <div class="container-slide" style={{ display: `${displayValue}` }}>
            <div className="close-button">
              <img
                src={close}
                alt="close-button"
                onClick={() => setDisplayValue("none")}
              />
            </div>
            <div class="title-slid">
              <div className="upper">
                <h5>APPLY TODAY FOR</h5>
              </div>

              <div className="lower">
                <h1>JIET COLLEGE PROGRAMS</h1>
              </div>
            </div>
            <div class="content-slide">
              <form action="#" onSubmit={handleFormSubmit}>
                <div class="user-details">
                  <div class="input-box">
                    {/* <span class="details">Full Name</span> */}
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div class="input-box">
                    {/* <span class="details">Username</span> */}
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div class="input-box">
                    {/* <span class="details">Email</span> */}
                    <input
                      type="text"
                      placeholder="Enter Mobile No"
                      required
                      value={formData.mobile}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          mobile: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div class="input-box">
                    {/* <span class="details">Phone Number</span> */}
                    <input
                      type="text"
                      placeholder="Enter City"
                      required
                      value={formData.city}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div class="input-box">
                    <span class="details" style={{ color: "#790a0d" }}>
                      Interested Program
                    </span>
                    <Select
                      placeholder="Select option"
                      onChange={(e) => {
                        if (e.target.value === "Post Graduate")
                          setCourse("post");
                        else if (e.target.value === "Under Graduate")
                          setCourse("under");
                        else if (e.target.value === "Diploma")
                          setCourse("diploma");
                        else setCourse("");

                        setFormData((prev) => ({
                          ...prev,
                          Program: e.target.value,
                        }));
                      }}
                    >
                      {programs.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </Select>
                  </div>
                  <div class="input-box">
                    <span class="details" style={{ color: "#790a0d" }}>
                      Preferred Courses
                    </span>
                    <Select
                      placeholder="Select option"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          Course: e.target.value,
                        }));
                      }}
                    >
                      {courseState === "post" ? (
                        course.post.map((item) => {
                          return <option value={item}>{item}</option>;
                        })
                      ) : courseState === "under" ? (
                        course.under.map((item) => {
                          return <option value={item}>{item}</option>;
                        })
                      ) : courseState === "diploma" ? (
                        course.diploma.map((item) => {
                          return <option value={item}>{item}</option>;
                        })
                      ) : (
                        <option value="Select Option">No Courses</option>
                      )}
                    </Select>
                  </div>
                </div>
                <div class="gender-details">
                  {/* <input type="radio" name="gender" id="dot-1" />
                  <input type="radio" name="gender" id="dot-2" />
                  <input type="radio" name="gender" id="dot-3" /> */}
                  <span class="gender-title" style={{ color: "#790a0d" }}>
                    How Old Are You
                  </span>
                  <div class="category">
                    <Select
                      placeholder="DD"
                      onChange={(e) => {
                        setDob((prev) => ({
                          ...prev,
                          dd: e.target.value,
                        }));
                      }}
                    >
                      {dd.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </Select>
                    <Select
                      placeholder="MM"
                      onChange={(e) => {
                        setDob((prev) => ({
                          ...prev,
                          mm: e.target.value,
                        }));
                      }}
                    >
                      {mm.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </Select>
                    <Select
                      placeholder="YYYY"
                      onChange={(e) => {
                        setDob((prev) => ({
                          ...prev,
                          yyyy: e.target.value,
                        }));
                      }}
                    >
                      {yyyy.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </Select>
                  </div>
                </div>
                <div class="button-slide">
                  <input type="submit" value="Apply Now" />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      {windowWidth <= 584 && (
        <div
          class="container-slide"
          // style={{ display: `${displayValue}` }}
        >
          {/* <div className="close-button">
            <img
              src={close}
              alt="close-button"
              onClick={() => setDisplayValue("none")}
            />
          </div> */}
          <div class="title-slid">
            <div className="upper">
              <h5>APPLY TODAY FOR</h5>
            </div>
            <div className="lower">
              <h1>JIET COLLEGE PROGRAMS</h1>
            </div>
          </div>
          <div class="content-slide">
            <form action="#" onSubmit={handleFormSubmit}>
              <div class="user-details">
                <div class="input-box">
                  {/* <span class="details">Full Name</span> */}
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div class="input-box">
                  {/* <span class="details">Username</span> */}
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div class="input-box">
                  {/* <span class="details">Email</span> */}
                  <input
                    type="text"
                    placeholder="Enter Mobile No"
                    required
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        mobile: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div class="input-box">
                  {/* <span class="details">Phone Number</span> */}
                  <input
                    type="text"
                    placeholder="Enter City"
                    required
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        city: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div class="input-box">
                  <span class="details" style={{ color: "#790a0d" }}>
                    Interested Program
                  </span>
                  <Select
                    placeholder="Select option"
                    onChange={(e) => {
                      if (e.target.value === "Post Graduate") setCourse("post");
                      else if (e.target.value === "Under Graduate")
                        setCourse("under");
                      else if (e.target.value === "Diploma")
                        setCourse("diploma");
                      else setCourse("");
                      setFormData((prev) => ({
                        ...prev,
                        Program: e.target.value,
                      }));
                    }}
                  >
                    {programs.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </Select>
                </div>
                <div class="input-box">
                  <span class="details" style={{ color: "#790a0d" }}>
                    Preferred Courses
                  </span>
                  <Select
                    placeholder="Select option"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        Course: e.target.value,
                      }));
                    }}
                  >
                    {courseState === "post" ? (
                      course.post.map((item) => {
                        return <option value={item}>{item}</option>;
                      })
                    ) : courseState === "under" ? (
                      course.under.map((item) => {
                        return <option value={item}>{item}</option>;
                      })
                    ) : courseState === "diploma" ? (
                      course.diploma.map((item) => {
                        return <option value={item}>{item}</option>;
                      })
                    ) : (
                      <option value="Select Option">No Courses</option>
                    )}
                  </Select>
                </div>
              </div>
              <div class="gender-details">
                {/* <input type="radio" name="gender" id="dot-1" />
                <input type="radio" name="gender" id="dot-2" />
                <input type="radio" name="gender" id="dot-3" /> */}
                <span class="gender-title" style={{ color: "#790a0d" }}>
                  How Old Are You
                </span>
                <div class="category">
                  <Select
                    placeholder="DD"
                    onChange={(e) => {
                      setDob((prev) => ({
                        ...prev,
                        dd: e.target.value,
                      }));
                    }}
                  >
                    {dd.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </Select>
                  <Select
                    placeholder="MM"
                    onChange={(e) => {
                      setDob((prev) => ({
                        ...prev,
                        mm: e.target.value,
                      }));
                    }}
                  >
                    {mm.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </Select>
                  <Select
                    placeholder="YYYY"
                    onChange={(e) => {
                      setDob((prev) => ({
                        ...prev,
                        yyyy: e.target.value,
                      }));
                    }}
                  >
                    {yyyy.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </Select>
                </div>
              </div>
              <div class="button-slide">
                <input type="submit" value="Apply Now" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
