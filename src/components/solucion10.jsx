import React from 'react'
import { useState } from 'react'

function Solucion10() {
    const [respuesta, setRespuesta] = useState([])
    const [empleado, setEmpleado] = useState(null)


    return (
        <main className='flex flex-col w-1/2 text-white mt-8 gap-8'>
            <div className='flex flex-col gap-1 items-center'>
                <label>Ingrese el numero de empleado:</label>
                <input onChange={(e)=>setEmpleado(e.target.value)} type='number' className='bg-transparent border text-white px-4'/>
                <button className='text-cyan-400 font-semibold'>Procesar</button>
            </div>
            <table className='w-full text-center'>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Nombre</th>
                        <th>Horas</th>
                        <th>Importe</th>
                        <th>Actualizado</th>
                    </tr>
                </thead>
               
               <tbody>
                {   }
               </tbody>
            </table>
        </main>
    )
}

export default Solucion10
