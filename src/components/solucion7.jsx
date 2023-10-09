import React from "react";
import { useState } from "react";

const localidades = [
  { id: 1, nombre: "Rafaela" },
  { id: 2, nombre: "Rosario" },
  { id: 3, nombre: "Ramallo" },
  { id: 4, nombre: "Chascomus" },
  { id: 5, nombre: "Bigand" },
  { id: 6, nombre: "San Nicolas" },
  { id: 7, nombre: "Buenos Aires" },
];

function Solucion7() {
  const [viajes, setViajes] = useState([]);
  const [localidad, setLocalidad] = useState(1);
  const [mes, setMes] = useState(5);
  const [anio, setAnio] = useState(2022);
  const [total, setTotal] = useState(0)

  const calcular = async () => {
    const info = {
      localidad: localidad,
      mes: mes,
      anio: anio
    };
  
    try {
      const response = await fetch('http://localhost/ejercicio7.php', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
  
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        setViajes(json);
        setTotal(json.reduce((acc, x) => acc + parseInt(x.cantKg), 0))
      } else {
        console.log("Error en la solicitud HTTP:", response.status);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };
  

  return (
    <main className="w-2/5 flex flex-col text-white gap-10 pt-6">
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <label>Localidad</label>
          <select
            value={localidad}
            onChange={(e) => setLocalidad(Number(e.target.value))}
            className="text-black"
          >
            {localidades.map((x) => (
              <option value={x.id}>{x.nombre}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Mes</label>
          <select
            className="text-black"
            value={mes}
            onChange={(e) => setMes(e.target.value)}
          >
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Año</label>
          <input
            className="text-black"
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
          />
        </div>
        <button className=" text-2xl text-cyan-400" onClick={calcular}>
          Calcular
        </button>
      </div>
      <aside>
  <table className="w-full text-center">
    <thead>
      <tr className="text-cyan-400">
        <th>Dia</th>
        <th>Origen</th>
        <th>Destino</th>
        <th>Kilos</th>
      </tr>
    </thead>
    <tbody>
      {viajes.map((x, index) => (
        <tr key={index}>
          <td>{x.fecViaje}</td>
          <td>{localidades[parseInt(x.locOrigen) - 1].nombre}</td>
          <td>{localidades[parseInt(x.locDestino) - 1].nombre}</td>
          <td>{x.cantKg}</td>
        </tr>
      ))}
    </tbody>
    <p className="mt-8">TOTAL: {total}</p>
  </table>
</aside>
    </main>
  );
}

export default Solucion7;

