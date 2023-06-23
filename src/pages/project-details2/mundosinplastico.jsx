import React from "react";

import ProjectDate from "../../data/mundosinplastico.json";

import ProjectDetails2Dark from "./project-details2-dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";

const Inter = () => {
  const Project = ProjectDate;
  const ProjectIntro = ProjectDate.intro;
  const ProjectDescription = ProjectDate.description;


  return (
  <>
  <NavbarFullMenu />
    <ProjectDetails2Dark 
    data={Project}
    dataUno={ProjectIntro}
    DataDos={ProjectDescription}
     />
  </>
  );
};

export default Inter;