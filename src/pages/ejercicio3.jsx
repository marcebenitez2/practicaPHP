import React from 'react'
import { consignas } from '../services/consignas'
import Consigna from '../components/consigna'
import Solucion3 from '../components/solucion3'

function Ejercicio3() {

    return (
    <main className="w-full min-h-screen bg-[#222334] flex flex-col gap-5 px-40 xln:px-20 mdn:px-5">
        <Consigna x={consignas[2]}/>
        <Solucion3/>
    </main>
    )
}

export default Ejercicio3
