import React from 'react'

export default function Superior() {
    return (
        <>
            {/* Arco superior esquerdo */}
            <path
                d="M40 40 A40 40 0 0 1 80 0"
                stroke="#2ecc71"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
            />
            {/* Arco superior direito */}
            <path
                d="M80 0 A40 40 0 0 1 120 40"
                stroke="#00c2cb"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
            />
        </>
    )
}
