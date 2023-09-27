import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Solucion5() {
  const [resultado, setResultado] = useState(null);
  const realizarPeticion = async () => {
    try {
      const response = await fetch("http://localhost/ejercicio5.php");
      const respuesta = await response.json();
      setResultado(respuesta);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    realizarPeticion();
  }, []);

  return (
    <main className="w-full text-white pt-10 pb-10">
      {resultado ? (
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-between">
            <span className="w-full text-center text-2xl font-semibold text-cyan-400">
              Numero
            </span>
            <span className="w-full text-center text-2xl font-semibold text-cyan-400">
              Seno
            </span>
            <span className="w-full text-center text-2xl font-semibold text-cyan-400">
              Coceno
            </span>
          </div>
          {resultado.map((decimal) => (
            <div className="flex w-full justify-around" key={decimal.x}>
              <span className="w-full text-center text-red-600">
                {decimal.x}
              </span>
              <span
                className="w-full text-center"
                style={{ color: `${decimal.color_sin}` }}
              >
                {decimal.sin}
              </span>
              <span
                className="w-full text-center"
                style={{ color: `${decimal.color_cos}` }}
              >
                {decimal.cos}
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}

export default Solucion5;
