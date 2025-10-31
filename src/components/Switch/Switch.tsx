import React, { useContext } from "react";
import * as motion from "motion/react-client";
import { WebContext } from "../../context/webContext";
import { Moon, Sun } from "lucide-react";
export default function Switch() {
  const {darkMode,isOn} = useContext(WebContext);
  
  const switchControl = isOn
  

  const container = {
  width: 120,
  height: 50,
  backgroundColor: switchControl? "#fff":"#ffbf00ff",
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  overflow:"hidden",
  alignItems:"center",
  padding: 15,
  boxShadow:"inset 0 0 2px 2px #000"
} as React.CSSProperties;
const handle = {
  width: 35,
  height: 35,
  backgroundColor: switchControl? "#fff":"#ffbf00ff",
  boxShadow:"0 0 8px 2px #00000050",
  borderRadius: "50%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
} as React.CSSProperties;


  return (
    <button
      className="toggle-container"
      style={{
        ...container,
        justifyContent: "flex-" + (switchControl ? "start" : "end"),
      }}
      onClick={darkMode}
    >
      <motion.div className="toggle-handle" style={handle} layout transition={{
        type:"spring",
        visualDuration:0.2,
        bounce:0.2
      }}>
        {switchControl? <Sun color="#ffbf00ff"/>: <Moon color="#fff"/>}
      </motion.div>
    </button>
  );
}


