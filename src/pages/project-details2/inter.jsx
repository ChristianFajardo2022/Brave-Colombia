import React from "react";

import ProjectDate from "../../data/inter.json";

import ProjectDetails2Dark from "./project-details2-dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import NavbarFullMenuDark from "../../components/Navbar-full-menu/navbar.full-menu-dark";


const Inter = () => {
  const Project = ProjectDate;
  const ProjectIntro = ProjectDate.intro;
  const ProjectDescription = ProjectDate.description;
  const ProjectVideo = ProjectDate.videoLink;


  return (
  <>
  <NavbarFullMenuDark />
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