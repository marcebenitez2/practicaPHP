import React from 'react'
import Consigna from '../components/consigna'
import Solucion11 from '../components/solucion11'
import { conbd } from '../services/consignas'

function Ejercicio11() {
    return (
        <main className="w-full min-h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
            <Consigna x={conbd[4]}/>
            <Solucion11/>
        </main>
    )
}

export default Ejercicio11
