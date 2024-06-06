import React from "react";
import Siders from "../../components/Siders/siders";
import ScrollToTopOnMount from "../../components/ScrollTop/ScrollToTopOnMount";

export default function BranchSider() {
  const sideData = [
    { head: "Computer Science & Engineering", link: "/departments/cse" },
    { head: "Electrical Engineering", link: "/departments/ee" },
    { head: "Mechanical Engineering", link: "/departments/me" },
    { head: "Civil Engineering", link: "/departments/ce" },
    { head: "Management Studies (BBA)", link: "/departments/bba" },
  ];
  return (
    <>
      <Siders sideData={sideData} />
      <ScrollToTopOnMount />
    </>
  );
}
