import React, { useEffect, useState } from "react";
import {
  chakra,
  Stack,
  Box,
  useColorModeValue,
  Divider,
  Text,
  Image,
} from "@chakra-ui/react";
import "./Leadership.css";
import Siders from "../../../components/Siders/siders";
import TopHeader from "../../../components/TopHeaderAbout/topHeaderAbout";
import ScrollToTopOnMount from "../../../components/ScrollTop/ScrollToTopOnMount";

const ColoredDivider = ({ color, thickness }) => (
  <Divider borderColor={color} borderWidth={thickness} />
);

const Leadership = () => {
  const [institutionText, setInstitutionText] = useState("");
  const [aicteText, setAICTEText] = useState("");
  const [ind, setInd] = useState(0);
  const [toStart, setStart] = useState(false);

  useEffect(() => {
    const institution = "JIET GROUP OF INSTITUTION";
    const insLength = institution.length;

    setTimeout(() => {
      if (ind !== insLength) {
        setInstitutionText(institutionText + institution[ind]);
        setInd(ind + 1);
      }
    }, 100);

    if (institutionText.length === 25) {
      setStart(true);
      setInd(0);
    }
  }, [institutionText]);

  useEffect(() => {
    if (toStart) {
      const aicte = "APPROVED BY AICTE";
      const aicLength = aicte.length;

      setTimeout(() => {
        if (ind !== aicLength) {
          setAICTEText(aicteText + aicte[ind]);
          setInd(ind + 1);
        }
      }, 100);
    }
  }, [aicteText, toStart]);

  const sideData = [
    { head: "Overview", link: "/aboutus/overview" },
    { head: "Mission & Vision", link: "/aboutus/mission" },
    { head: "Leadership", link: "/aboutus/leadership" },
    { head: "Chairman Message", link: "/aboutus/cmessage" },
    { head: "Govt. Affiliation", link: "/aboutus/affiliations" },
  ];

  return (
    <>
      {/* <ScrollToTopOnMount />
      <TopHeader
        className="TopHeader"
        text1={institutionText}
        text2={aicteText}
      /> */}
      <div className="body">
        <div className="leftPart">
          <h1>
            <span>ACADEMIC</span>
            LEADERSHP
          </h1>
          <hr />
          <div className="blueBox">
            <div className="profileHead">
              <div className="head">
                <div className="lHead">
                  <h3>Dr. S.K. Singh</h3>
                  <p>
                    <b>Principal,</b><br /> jind of Engineering & Technology
                  </p>
                </div>
                <div className="rHead">
                  <img
                    src="/assets/images/images/first_img.jpg"
                    alt="Leaders Image"
                  />
                </div>
              </div>
              <p>
                <b>Dear Students,</b><br />
                Decent education is a passport to a good, comfortable,
                      and secured life. It enables youngsters to become
                      contributing members of society through knowledge, skills,
                      and character development. To achieve this, the management
                      has provided all infrastructure facilities required for
                      quality education. The institution has spacious
                      classrooms, fully equipped laboratories, workshops,
                      computer centres, and drawing halls. The institute has a
                      placement cell that interacts with leading industries,
                      arranges campus interviews, and offers ample job
                      opportunities for the students of all disciplines. Besides
                      bestowing engineering knowledge, great emphasis is laid on
                      character building and discipline among the students. Jind
                      Institute of Engineering & Technology is working
                      efficiently to achieve proficiency in technical education.
              </p>
            </div>
          </div>
          <div className="blueBox">
            <div className="profileHead">
              <div className="head">
                <div className="lHead">
                  <h3>Ashish Kumar</h3>
                  <p>
                    <b>Principal,</b><br /> JIND Polytechnic College
                  </p>
                </div>
                <div className="rHead">
                  <img
                    src="/assets/images/images/third_img.png"
                    alt="Leaders Image"
                  />
                </div>
              </div>
              <p>
                The institute encourages students fo organize different
                      adivities independently or with the support and guidance
                      of faculty such as - management conventions, business plan
                      competitions, talks by leading professionals, cultural
                      events, sports acivifies for their holistic development
                      that adds the much needed value by inculcating in them
                      skills - organization, team building, decision making and
                      technical innovations. The institute hos dose
                      collaboration with the corporate world for mutual benefits
                      such as summer placements fostudents, introduction of need
                      based new courses and inputsin the curricula, guest
                      speakers, technical workshops and management development
                      programmes to meet manpower development needs of the
                      corporate sector as also intellectual inputs by way of
                      consulting for solving their live problems by young minds
                      and experienced faculty. It has been especially nurturing
                      relationships with the corporate world fo extend best of
                      placement opportunities toifs graduates. 
              </p>
            </div>
          </div>
        </div>
        <div className="rightPart">
          <h1>
            <span>ADMINISTRATIVE</span>
            LEADERSHP
          </h1>
          <hr />
          <div className="blueBox thirdblueBox">
            <div className="profileHead">
              <div className="head">
                <div className="lHead">
                  <h3>Abhishek Bansal</h3>
                  <p>
                    <b>Managing Director,</b><br /> JIET Group Of Institutions
                  </p>
                </div>
                <div className="rHead">
                  <img
                    src="/assets/images/images/second_img.jpg"
                    alt="Leaders Image"
                  />
                </div>
              </div>
              <p>
                <b>Dear Aspirants,</b><br />
                This is my hearty welcome to you in joining India's
                      fastest-growing Institution and trusting the vision we
                      have been striving for two decades. We are dedicated to
                      achieving students' placement and academic growth with no
                      compromise on the overall development of students.
                      Accomplishing socially and morally dedicated students,
                      transforming young minds of India and abroad into much
                      more stable citizens. Our vision is to transform young
                      buds into glorious flowers by inculcating the seeds of
                      academic and technical proficiency. We disseminate
                      advanced studying techniques and foster industrial
                      training with so much perseverance that the careers of
                      students are always progressing. 
              </p>
            </div>
          </div>
          <div className="blueBox">
            <div className="profileHead">
              <div className="head">
                <div className="lHead">
                  <h3>Somnath Das</h3>
                  <p>
                    <b>Director Development,</b><br /> JIET Group Of Institutions
                  </p>
                </div>
                <div className="rHead">
                  <img
                    src="/assets/images/images/fourth_img.jpg"
                    alt="Leaders Image"
                  />
                </div>
              </div>
              <p>
              The institute fosters close collaborations with
                      corporate partners to offer students valuable
                      opportunities for internships, introduce relevant courses
                      tailored to industry needs, host industry experts for
                      guest lectures, conduct specialized workshops, and
                      facilitate management training programs. These
                      collaborations not only benefit students by providing
                      real-world exposure but also contribute to addressing the
                      evolving needs of the corporate sector. ❞
                      <br />
                      The institute places great emphasis on cultivating strong
                      ties with corporate entities to ensure that its graduates
                      are well-equipped for successful career placements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
