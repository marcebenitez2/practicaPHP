import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Solucion10() {
    const [respuesta, setRespuesta] = useState([])
    const [empleado, setEmpleado] = useState(null)

    const procesar = async () => {

        setRespuesta([])
        try {
            const response = await fetch('http://localhost/ejercicio10.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ empleado: parseInt(empleado) }) // Enviar el número de empleado como un objeto con la clave "empleado"
            })
            const data = await response.json()
            console.log(data)
            if (data.length === 0) {
                alert("El empleado seleccionado no tiene registros")
            } else if (data === "Trabajador ya actualizado") {
                alert(data)
            } else {
                setRespuesta(data)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <main className='flex flex-col w-1/2 text-white mt-8 gap-8'>
            <div className='flex flex-col gap-1 items-center'>
                <label>Ingrese el numero de empleado:</label>
                <input onChange={(e)=>setEmpleado(e.target.value)} type='number' className='bg-transparent border text-white px-4'/>
                <button className='text-cyan-400 font-semibold' onClick={procesar}>Procesar</button>
            </div>
            <p className='text-center'><span className='text-cyan-400 font-semibold'>IMPORTANTE:</span> Estan registrados los trabajadores desde el 101 hasta el 106</p>

            
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
                    {respuesta.map((x)=>(
                        <tr key={x.numero}>
                            <td>{x.Numero}</td>
                            <td>{x.Nombre}</td>
                            <td>{x.Horas}</td>
                            <td>{x.Importe.toFixed(2)}</td>
                            <td>{x.Actualizado}</td>
                        </tr>
                    ))}
               </tbody>
            </table>
           
        </main>
    )
}

export default Solucion10
