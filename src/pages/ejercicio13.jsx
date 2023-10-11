import React from 'react'
import Consigna from '../components/consigna'
import { conbd } from '../services/consignas'
import Solucion13 from '../components/solucion13'

function Ejercicio13() {
    return (
        <main className="w-full min-h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
            <Consigna x={conbd[6]}/>
            <Solucion13/>
        </main>
    )
}

export default Ejercicio13
