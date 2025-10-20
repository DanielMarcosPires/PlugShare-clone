import { Arco } from "../../components/Arco";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="flex flex-col items-center text-center relative">
                {/* SVG com os arcos e o ponto */}atus
                <Arco.Description>
                    <Arco.SVG>
                        <Arco.Superior />
                    </Arco.SVG>
                    <div>
                        <h1 className="text-5xl font-extrabold tracking-[0.1em] text-black">
                            G&P
                        </h1>

                        <p className="mt-2 text-xs tracking-[0.35em] text-black">
                            Garagem & Pilotagem
                        </p>
                    </div>
                    <Arco.SVG>
                        <Arco.Inferior />
                    </Arco.SVG>
                </Arco.Description>
                {/* Texto principal */}

            </div>
        </div>
    );
}
export { Page as page };