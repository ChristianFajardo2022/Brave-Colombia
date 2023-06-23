import React, { useRef, useEffect } from "react";
import mouseEffect from "../../common/mouseEffect";

const Cursor = () => {
  const flechaIzquierdaRef = useRef(null);
  const flechaDerechaRef = useRef(null);

  useEffect(() => {
    mouseEffect();
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer" ref={flechaIzquierdaRef}></div>
      <div className="mouse-cursor cursor-inner" ref={flechaDerechaRef}></div>
    </>
  );
};

export default Cursor;
