import React, { useContext } from "react";
import * as motion from "motion/react-client";
import { WebContext } from "../../context/Slide";
import { Moon, Sun } from "lucide-react";
export default function Switch() {
  const {darkMode,isOn} = useContext(WebContext);
  return (
    <button
      className="toggle-container"
      style={{
        ...container,
        justifyContent: "flex-" + (isOn ? "start" : "end"),
      }}
      onClick={darkMode}
    >
      <motion.div className="toggle-handle" style={handle} layout transition={{
        type:"spring",
        visualDuration:0.2,
        bounce:0.2
      }}>
        {isOn? <Sun color="#ffbf00ff"/>: <Moon color="#fff"/>}
      </motion.div>
    </button>
  );
}

const container = {
  width: 120,
  height: 50,
  backgroundColor: "#01c09a",
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  alignItems:"center",
  padding: 15,
  border:"solid 2px #000",
  boxShadow:"0 0 10px 5px #00000075, inset 0 0 2px 8px #005b49ff"
} as React.CSSProperties;
const handle = {
  width: 40,
  height: 40,
  backgroundColor: "#005b49ff",
  boxShadow:"0 0 4px #00000050",
  borderRadius: "50%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
} as React.CSSProperties;
