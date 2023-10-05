import React from 'react'
import Consigna from '../components/consigna'
import { conbd } from '../services/consignas'
import Solucion7 from '../components/solucion7'

function Ejercicio7() {
    return (
          <main className="w-full min-h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
            <Consigna x={conbd[0]}/>
            <Solucion7/>
        </main>
    )
}

export default Ejercicio7
