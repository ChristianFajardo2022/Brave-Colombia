import React from "react";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProject from "../../components/Next-project/next-project";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";

const ProjectDetails2Dark = ({data, dataUno, DataDos, DataTres}) => {

  // const navbarRef = React.useRef(null);
  // const logoRef = React.useRef(null);

  // React.useEffect(() => {
  //   var navbar = navbarRef.current,
  //     logo = logoRef.current;
  //   if (window.pageYOffset > 300) {
  //     navbar.classList.add("nav-scroll");
  //   } else {
  //     navbar.classList.remove("nav-scroll");
  //   }
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 300) {
  //       navbar.classList.add("nav-scroll");
  //     } else {
  //       navbar.classList.remove("nav-scroll");
  //     }
  //   });
  // }, [navbarRef]);
  
  return (
    <DarkTheme>
      
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={data} />
        <ProjectIntroduction projectIntroductionData={dataUno} />
        <ProjectGallery />
        <ProjectDescription projectDescriptionData={DataDos} />
        <ProjectVideo projectVideoDate={data} idvideo={DataTres} />
        <NextProject />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
