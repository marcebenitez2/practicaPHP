import React, { useState } from "react";
import { useEffect } from "react";

function Solucion6() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const procesarFormulario = async () => {
    if (numero2 < 1 || numero2 > 9) {
      alert("La base debe ser un número entero entre 1 y 9");
      return;
    }
    try {
      const response = await fetch("http://localhost/ejercicio6.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numero: numero1, base: numero2 }),
      });
      if (!response.ok) {
        throw new Error(
          "Error en la respuesta del servidor: " + response.statusText
        );
      }
      const respuesta = await response.text();
      setResultado(respuesta);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(resultado);
  }, [resultado]);

  return (
    <main className="w-full text-white flex flex-col gap-8 pt-6">
      <div className="flex gap-2">
        <div className="flex flex-col">
          <label>Primer numero</label>
          <input
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Base</label>
          <input
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>
        <button
          onClick={procesarFormulario}
          className="font-semibold text-xl text-cyan-400"
        >
          Calcular
        </button>
      </div>
      <aside className="flex flex-col">
        <label>
          Resultado: <span>{resultado}</span>
        </label>
      </aside>
    </main>
  );
}

export default Solucion6;
