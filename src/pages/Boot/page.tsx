import { Arco } from "../../components/Arco";
import './css/styles.css';

export default function Page() {
    return (
        <div className="capa">
                {/* SVG com os arcos e o ponto */}
                <img src="/capa.png" alt="logo" className="w-1/2" />
                {/* Texto principal */}
        </div>
    );
}
export { Page as page };