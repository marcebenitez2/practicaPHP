import React from "react";
import { useState } from "react";

function Solucion7() {
  const [viajes, setViajes] = useState([]);
  const [localidad, setLocalidad] = useState("Rafaela");
  const [mes, setMes] = useState(5);
  const [anio, setAnio] = useState(2022);

    const calcular = async () => {
        try{
            const res = await fetch()
            const data = await res.json()
            setViajes(data)
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <main className="w-2/5 flex flex-col text-white gap-10 pt-6">
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <label>Localidad</label>
          <select
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
            className="text-black"
          >
            <option value="Rafaela">Rafaela</option>
            <option value="Rosario">Rosario</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Cordoba">Cordoba</option>
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
        <button className=" text-2xl text-cyan-400" onClick={calcular}>Calcular</button>
      </div>
      <aside>
        <table className="w-full">
            <thead>
                <tr>
                <th>Localidad</th>
                <th>Kilos</th>
                </tr>
            </thead>
            <tbody>
                {viajes.map((x) => (
                <tr>
                    <td>{x.localidad}</td>
                    <td>{x.kilos}</td>
                </tr>
                ))}
            </tbody>
        </table>
      </aside>
    </main>
  );
}

export default Solucion7;

/**
 * Una empresa tiene una sucursal en cada localidad diferente.
No en todas las localidades tiene sucursal, pero en las que
tiene, hay sólo una. Se dedica a realizar viajes periódicos
entre cada sucursal llevando materiales. Para ello, cuenta
con una base de datos donde asienta datos de los viajes
realizados.
Base: TRAFICO.MDB
Tablas:
Ciudades contiene un registro por cada localidad en que la
empresa realiza envíos.
CodLoc (entero): código de la localidad.
NomLoc (texto 30): nombre de la localidad.
Viajes contiene un registro por cada viaje realizado.
LocOrigen (entero): código de localidad origen del viaje.
LocDestino (entero): código de localidad destino del viaje.
Cantkg (simple): cantidad de kilos transportados en el
viaje.
FecViaje (dd/mm/aaaa): Fecha del viaje.
Realizar una aplicación que solicite una localidad, un mes
y un año y liste todos los viajes que tuvieron como origen
o destino esa localidad, acumulando la cantidad de kilos
transportados, en el mes y año ingresados cuando la
localidad sea destino y descuente los kilos cuando la
localidad es origen.

 */
