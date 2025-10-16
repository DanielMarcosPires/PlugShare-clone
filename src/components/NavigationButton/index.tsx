import { Link } from "react-router-dom";

interface NavigationButtonProps {
    children?: React.ReactNode;
    to: string;
}

export function index({children, to}: NavigationButtonProps) {
  return (
    <Link to={to}>{children}</Link>
  )
}
