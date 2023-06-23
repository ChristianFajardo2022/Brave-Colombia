import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoHome = ({idVimeo, campaña}) => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section
      className="Customvideo video bg-img parallaxie"
      
    >
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId={idVimeo}
          onClose={() => setOpen(false)}
        />
      )}
      <a
        className="vid valign"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="vid-butn">
          
          <i className="fas fa-play"></i> 
          <span className="reproducir">
            Play {campaña}
            </span> 
          
        </div>
      </a>
      
    </section>
  );
};

export default VideoHome;
