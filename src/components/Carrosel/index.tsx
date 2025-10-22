/* eslint-disable react-refresh/only-export-components */
import "./css/styles.css";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CarroselProps {
  children?: React.ReactNode;
}

function Carrosel({ children }: CarroselProps) {
  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

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
        {children}
      </motion.div>
    </motion.div>
  );
}

export function index({ children }: CarroselProps) {
  return <Carrosel>{children}</Carrosel>;
}
