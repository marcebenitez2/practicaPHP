import React from 'react'
import Consigna from '../components/consigna'
import Solucion6 from '../components/solucion6'
import { consignas } from '../services/consignas'

function Ejercicio6() {
    return (
        <main className="w-full min-h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
            <Consigna x={consignas[5]}/>
            <Solucion6/>
        </main>
    )
}

export default Ejercicio6
