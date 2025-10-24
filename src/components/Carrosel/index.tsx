/* eslint-disable react-refresh/only-export-components */
import "./css/styles.css";

import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { WebContext } from "../../context/Slide";


function Carrosel() {
  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  const {image} = useContext(WebContext);
  
  useEffect(() => {
    console.log(carousel.current?.scrollWidth);
    // set width to total scrollable width minus visible width (or 0 if ref is null)
    setWidth(
      carousel.current
        ? carousel.current.scrollWidth - carousel.current.offsetWidth
        : 0
    );
  }, []);



  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="inner"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {image.map((img, index) => (
          <motion.div className="item" key={index}>
            <img src={img.src} alt={img.title} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function index() {
  return <Carrosel/>;
}
