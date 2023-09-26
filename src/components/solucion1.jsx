import React, { useState } from "react";

function Solucion1() {
  const [numero, setNumero] = useState(null);
  const [respuesta, setRespuesta] = useState(null);

  const procesarFormulario = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost/ejercicio1.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `numero=${numero}`,
      });
      const respuesta = await response.text();
      setRespuesta(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-full flex flex-col gap-5 lgn:w-full text-white">
      <div className="flex flex-col w-1/3 gap-5">
        <label className="text-2xl">Ingrese un número:</label>
        <input
          type="number"
          min="1"
          required
          className="h-12 bg-[#222334] border px-4"
          onChange={(e) => setNumero(e.target.value)}
        />
        <button
          className="w-1/2 h-12 bg-cyan-400 m-auto text-black font-semibold"
          onClick={procesarFormulario}
        >
          Enviar
        </button>
      </div>
      <h2 className="text-2xl font-semibold text-cyan-400">
        Resultado: {respuesta}
      </h2>
    </form>
  );
}

export default Solucion1;
