import React from "react";

import ProjectDate from "../../data/pagoencasa.json";

import ProjectDetails2Dark from "./project-details2-dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";

const Inter = () => {
  const Project = ProjectDate;
  const ProjectIntro = ProjectDate.intro;
  const ProjectDescription = ProjectDate.description;
  const ProjectVideo = ProjectDate.videoLink;


  return (
  <>
  <NavbarFullMenu />
    <ProjectDetails2Dark 
    data={Project}
    dataUno={ProjectIntro}
    DataDos={ProjectDescription}
    DataTres={ProjectVideo}
     />
  </>
  );
};

export default Inter;