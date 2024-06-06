import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Overview from "./pages/AboutUs/Overview/Overview";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/error";
import MissionAndVision from "./pages/AboutUs/MissionAndVision/MissionAndVision";
import ChairmansMessage from "./pages/AboutUs/ChairmansMessage/ChairmansMessage";
import Leadership from "./pages/AboutUs/Leadership/Leadership";
import PostGraduate from "./pages/Departments/PostGraduate/Postgraduate";
import GovtAffiliation from "./pages/AboutUs/GovtAffiliation/GovtAffiliation";
import Gallery from "./pages/Gallery/Gallery";
import JindGenius from "./pages/JindGenius/JindGenius";
import UnderGraduate from "./pages/Departments/UnderGraduate/Undergraduate";
import Diploma from "./pages/Departments/Diploma/Diploma";
import CseDepartment from "./pages/Branches/Cse";
import EceDepartment from "./pages/Branches/Ece";
import MechDepartment from "./pages/Branches/Mech";
import CivilDepartment from "./pages/Branches/Civil";
import ManagementDepartment from "./pages/Branches/Management";
import Mess from "./pages/Campus/Mess/Mess";
import Sports from "./pages/Campus/Sports/Sports";
// import Thankyou from "./pages/ThankyouPage/Thankyou";
import Thankyou from "./pages/ThankyouPage/Thankyou";
import axios from "axios";
import Applynow from "./pages/ApplyNow/applynow";
import Alumini from "./pages/Alumini/alumini";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus/overview" element={<Overview />} />
        <Route path="/aboutus/cmessage" element={<ChairmansMessage />} />
        <Route path="/aboutus/mission" element={<MissionAndVision />} />
        <Route path="/aboutus/leadership" element={<Leadership />} />
        <Route path="/aboutus/affiliations" element={<GovtAffiliation />} />
        <Route path="/programs/postgraduate" element={<PostGraduate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/jindgenius" element={<JindGenius />} />
        <Route path="/programs/undergraduate" element={<UnderGraduate />} />
        <Route path="/programs/diploma" element={<Diploma />} />
        <Route path="/departments/cse" element={<CseDepartment />} />
        <Route path="/departments/ee" element={<EceDepartment />} />
        <Route path="/departments/me" element={<MechDepartment />} />
        <Route path="/departments/ce" element={<CivilDepartment />} />
        <Route path="/departments/bba" element={<ManagementDepartment />} />
        <Route path="/campus/mess" element={<Mess />} />
        <Route path="/campus/sports" element={<Sports />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/apply" element={<Applynow />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
