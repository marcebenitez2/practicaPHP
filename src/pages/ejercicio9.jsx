import React from 'react'
import Consigna from '../components/consigna'
import { conbd } from '../services/consignas'
import Solucion9 from '../components/solucion9'

function Ejercicio9() {
    return (
        <main className="w-full min-h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
            <Consigna x={conbd[2]}/>
            <Solucion9/>
        </main>
    )
}

export default Ejercicio9
