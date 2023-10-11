import React, { useEffect, useState } from "react";

function Solucion12() {
  const [respuesta, setRespuesta] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost/ejercicio12.php");
      const data = await response.json();
      setRespuesta(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Calcular totales
  const totalStkActual = respuesta.reduce(
    (total, item) => total + parseInt(item.HerSto),
    0
  );
  const totalCantPrestada = respuesta.reduce(
    (total, item) => total + parseInt(item.CantPrestadas),
    0
  );
  const totalCantDevueltas = respuesta.reduce(
    (total, item) => total + parseInt(item.CantDevueltas),
    0
  );

  return (
    <main className="w-1/2 mt-6 flex flex-col gap-4">
      <button className="text-center w-fit m-auto text-cyan-400" onClick={fetchData}>
        Sacar Calculos
      </button>
      <table className="w-full text-center">
        <thead className="bg-slate-600">
          <tr>
            <th>cod.Herramienta</th>
            <th>Descripción</th>
            <th>stk.Actual</th>
            <th>cant.Prestada</th>
            <th>cant.Devueltas</th>
          </tr>
        </thead>
        {respuesta ? (
          <tbody className="bg-black text-white">
            {respuesta.map((item, index) => (
              <tr key={index}>
                <td>{item.HerCod}</td>
                <td>{item.HerDes}</td>
                <td>{item.HerSto}</td>
                <td>{item.CantPrestadas}</td>
                <td>{item.CantDevueltas}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>Total:</td>
              <td>{totalStkActual}</td>
              <td>{totalCantPrestada}</td>
              <td>{totalCantDevueltas}</td>
            </tr>
          </tbody>
        ) : null}
      </table>
    </main>
  );
}

export default Solucion12;
