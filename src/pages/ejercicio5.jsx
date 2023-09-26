import React from 'react'
import { consignas } from '../services/consignas'
import Consigna from '../components/consigna'
import Solucion5 from '../components/solucion5'


function Ejercicio5() {
    return (
        <main class="w-full min-h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
            <Consigna x={consignas[4]}/>
            <Solucion5/>
        </main>
    )
}

export default Ejercicio5
