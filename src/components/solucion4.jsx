import React from "react";
import { useState } from "react";

function Solucion4() {
  const [resultado, setResultado] = useState(null);

  const generarNotas = async () => {
    try {
      const response = await fetch("http://localhost/ejercicio4.php");
      const respuesta = await response.json();
      console.log(respuesta);
      setResultado(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full flex text-white pt-6">
      <section className="w-full flex flex-col gap-12 items-center">
        <h3 className="text-xl">Presione para generar las notas random:</h3>
        <button
          className="h-10 text-black bg-cyan-500 w-1/2"
          onClick={generarNotas}
        >
          Generar
        </button>
      </section>
      {resultado ? (
        <aside className="flex flex-col w-full gap-6">
          <h3 className="text-xl font-semibold text-cyan-400">Notas:</h3>
          <ul className="flex gap-2">
            {resultado.notas.map((x)=>(
                <li>{x}</li>
            ))}
          </ul>
          <h4 className="text-xl font-semibold text-cyan-400">Los abanderados son:</h4>
          {resultado.mejores.map((x)=>(
            <ul>
                {x.nota} que se encuentra en la posicion: {x.posicion}
            </ul>
          ))}
        </aside>
      ) : <div className="w-full"></div>}
    </main>
  );
}

export default Solucion4;
