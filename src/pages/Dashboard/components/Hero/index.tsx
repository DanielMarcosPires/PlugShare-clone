import "./css/styles.css";

interface HeroProps {
  urlImage: string;
  children?: React.ReactNode;
}
export function index({children}: HeroProps) {
  

  return (
    <div className="heroMap">
      <header className="heroMap-header">
        {children}
      </header>
    </div>
  );
}
