import React from 'react'
import { consignas } from '../services/consignas'
import Consigna from '../components/consigna'
import Solucion4 from '../components/solucion4'

function Ejercicio4() {
    return (
        <main className="w-full min-h-screen bg-[#222334] flex flex-col gap-5 px-40 xln:px-20 mdn:px-5">
              <Consigna x={consignas[3]}/>
              <Solucion4/>
        </main>
    )
}

export default Ejercicio4
