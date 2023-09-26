import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Solucion3() {
  const [vector1, setVector1] = useState([]);
  const [vector2, setVector2] = useState([]);
  const [auxiliar1, setAuxiliar1] = useState([]);
  const [auxiliar2, setAuxiliar2] = useState([]);
  const [resultado, setresultado] = useState(null);

  const agregarAlVector = (x, y, z, j) => {
    if (y != "") {
      if (z.length === 6) {
        alert("Ya tiene 6 elementos");
      } else {
        x([...z, y]);
        j("");
      }
    } else alert("Debe ingresar algo");
  };

  const procesarFormulario = async () => {
    const data = {
      vector1: JSON.stringify(vector1),
      vector2: JSON.stringify(vector2),
    };

    try {
      const response = await fetch("http://localhost/ejercicio3.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const resultado = await response.json();
        setresultado(resultado);
        console.log(resultado);
      } else {
        console.error("Error en la solicitud");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full flex flex-col text-white gap-10">
      <section className="flex w-full gap-5">
        <div className="flex flex-col">
          <label>
            Vector 1: <span>{6 - vector1.length} restantes</span>
          </label>
          <input
            type="number"
            value={auxiliar1}
            onChange={(e) => setAuxiliar1(e.target.value)}
          />
          <button
            onClick={() =>
              agregarAlVector(setVector1, auxiliar1, vector1, setAuxiliar1)
            }
          >
            Agregar
          </button>
          <ul className="flex gap-3">
            {vector1.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <label>
            Vector 1: <span>{6 - vector2.length} restantes</span>
          </label>
          <input
            type="number"
            value={auxiliar2}
            onChange={(e) => setAuxiliar2(e.target.value)}
          />
          <button
            onClick={() =>
              agregarAlVector(setVector2, auxiliar2, vector2, setAuxiliar2)
            }
          >
            Agregar
          </button>
          <ul className="flex gap-3">
            {vector2.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <button
          className="text-2xl font-semibold text-cyan-400"
          onClick={procesarFormulario}
        >
          Calcular
        </button>
      </section>
      <aside>
        {resultado ? (
          <div>
            <h3 className="text-2xl text-cyan-400">
              Se encontraron {resultado.cantidad} repeticiones:
            </h3>
            <ul>
              {resultado.repetidos.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </aside>
    </main>
  );
}

export default Solucion3;
