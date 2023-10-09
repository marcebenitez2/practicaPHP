import React from 'react'
import Consigna from '../components/consigna'
import Solucion8 from '../components/solucion8'
import { conbd } from '../services/consignas'

function Ejercicio8() {
    return (
        <main className="w-full min-h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
            <Consigna x={conbd[1]}/>
            <Solucion8/>
        </main>
    )
}

export default Ejercicio8
