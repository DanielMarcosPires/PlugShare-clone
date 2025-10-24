import { Link } from "react-router-dom";
import "./css/styles.css";
import type { ComponentProps } from "react";

export default function Button({children,href,title, ...props}:ComponentProps<"a">) {
  return (
    <div className="profile-button_div">
      <Link to={`${href}`} className='profile-button' {...props}>{children}</Link>
      <p>{title}</p>
    </div>
  )
}
