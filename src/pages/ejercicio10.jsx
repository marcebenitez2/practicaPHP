import React from 'react'
import Consigna from '../components/consigna'
import { conbd } from '../services/consignas'
import Solucion10 from '../components/solucion10'

function Ejercicio10() {
    return (
        <main className="w-full min-h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
            <Consigna x={conbd[3]}/>
            <Solucion10/>
        </main>
    )
}

export default Ejercicio10
