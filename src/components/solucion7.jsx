import React, { useEffect, useState } from "react";

const meses = [
  { id: 1, nombre: "Enero" },
  { id: 2, nombre: "Febrero" },
  { id: 3, nombre: "Marzo" },
  { id: 4, nombre: "Abril" },
  { id: 5, nombre: "Mayo" },
  { id: 6, nombre: "Junio" },
  { id: 7, nombre: "Julio" },
  { id: 8, nombre: "Agosto" },
  { id: 9, nombre: "Septiembre" },
  { id: 10, nombre: "Octubre" },
  { id: 11, nombre: "Noviembre" },
  { id: 12, nombre: "Diciembre" },
];

function Solucion7() {
  const [viajes, setViajes] = useState([]);
  const [localidad, setLocalidad] = useState();
  const [mes, setMes] = useState(5);
  const [anio, setAnio] = useState(2022);
  const [total, setTotal] = useState(0);
  const [localidades, setLocalidades] = useState([]);
  const [AuxiliarLocalidad, setAuxiliarLocalidad] = useState()

  useEffect(() => {
    fetchLocalidades();
  }, []);

  async function fetchLocalidades() {
    try {
      const response = await fetch("http://localhost/ejercicio7-1.php");
      const respuesta = await response.json();
      console.log(respuesta);
      setLocalidades(respuesta);
      setLocalidad(respuesta[0].codLoc);
      setAuxiliarLocalidad(respuesta[0].codLoc);
    } catch (error) {
      console.log(error);
    }
  }

  const calcular = async () => {
    const info = {
      localidad: localidad,
      mes: mes,
      anio: anio,
    };

    try {
      const response = await fetch("http://localhost/ejercicio7.php", {
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
        setTotal(
          json.reduce((acc, x) =>
            acc + (x.locOrigen === localidad ? -Number(x.cantKg) : Number(x.cantKg)), 0
          )
        );
        setAuxiliarLocalidad(localidad)
        
      } else {
        console.log("Error en la solicitud HTTP:", response.status);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };


  useEffect(() => {
    console.log(localidad)
  }, [localidad])

  return (
    <div>
      {localidades ? (
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
                  <option key={x.codLoc} value={x.codLoc}>
                    {x.nomLoc}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>Mes</label>
              <select
                className="text-black"
                value={mes}
                onChange={(e) => setMes(Number(e.target.value))}
              >
                {meses.map((mes) => (
                  <option key={mes.id} value={mes.id}>
                    {mes.nombre}
                  </option>
                ))}
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
            <button className="text-2xl text-cyan-400" onClick={calcular}>
              Calcular
            </button>
          </div>
          <aside>
            {total ? (
              <div className="mb-8">
                <p>
                  Localidad Origen o destino: {localidades[localidad - 1].nombre}
                </p>
                <p>
                  En el mes de: {meses[mes - 1].nombre} {anio}
                </p>
              </div>
            ) : null}
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
                    <td>{x.fecViaje.split("-")[2]}</td>
                    <td>{x.locOrigen === localidades[AuxiliarLocalidad-1].nomLoc ? " " : x.locOrigen }</td>
                    <td>{x.locDestino === localidades[AuxiliarLocalidad-1].nomLoc ? " " : x.locDestino}</td>
                    <td>
                      {x.locOrigen === localidad ? -x.cantKg : x.cantKg}
                    </td>
                  </tr>
                ))}
                <p className="mt-8">TOTAL: {total} kg</p>
              </tbody>
            </table>
          </aside>
        </main>
      ) : null}
    </div>
  );
}

export default Solucion7;
