import type { Component, ComponentProps } from "react";
import Inferior from "./Inferior";
import Superior from "./Superior";

export const Arco = {
    Superior: Superior,
    Inferior: Inferior,
    SVG: ({ children }: ComponentProps<"svg">) => (
        <svg
            width="180"
            height="180"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-70px]"
        >
            {children}
        </svg>
    ),
    Description: ({ children }: ComponentProps<"div">) => <>{children}</>
}