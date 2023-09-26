import React from "react";
import { useState } from "react";

function Solucion3() {

    const [vector1, setVector1] = useState([])
    const [vector2, setVector2] = useState([])
    const [auxiliar1, setAuxiliar1] = useState([])
    const [auxiliar2, setAuxiliar2] = useState([])


    const agregarAlVector = (a) =>{
        console.log(a)
    }

  return (
    <main className="w-full flex flex-col text-white">
      <section className="flex w-full gap-5">
        <div className="flex flex-col">
          <label>
            Vector 1: <span>restantes</span>
          </label>
          <input onChange={(e)=>setAuxiliar1(e.target.value)}/>
          <button onClick={()=>agregarAlVector(setVector1,auxiliar1)}>Agregar</button>
        </div>
        <div className="flex flex-col">
          <label>
            Vector 1: <span>restantes</span>
          </label>
          <input onChange={(e)=>setAuxiliar2(e.target.value)}/>
          <button onClick={()=>agregarAlVector(setVector2,auxiliar2)}>Agregar</button>
        </div>
        <button className="text-2xl font-semibold text-cyan-400">
          Calcular
        </button>
      </section>
      <aside></aside>
    </main>
  );
}

export default Solucion3;
