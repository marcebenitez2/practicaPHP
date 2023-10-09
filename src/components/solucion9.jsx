import React from "react";
import { useState } from "react";

function Solucion9() {
  const [alumnos, setAlumnos] = useState();

  const procesar = async () => {
    try {
      const response = await fetch("http://localhost/ejercicio9.php");
      const respuesta = await response.json();
      console.log(respuesta.alumnos);
      setAlumnos(respuesta.alumnos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="text-white w-1/2 flex flex-col mt-6 items-center gap-8">
      <button onClick={procesar} className="bg-cyan-400 w-1/6 h-8">
        Procesar
      </button>
      <table className="text-center w-full">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Veces rendidas</th>
            <th>Veces aprobados</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          {alumnos ? (
            alumnos.map((x) => (
              <tr>
                <td>{x.AluNombre}</td>
                <td>{x.CantidadExamenes}</td>
                <td>{x.Aprobados}</td>
                <td>{x.Promedio}</td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <div>
        <p>Total Alumnos: { alumnos ? alumnos.length : "-"}</p>
        <p>
          Promedio general:{" "}
          {alumnos
            ? (
                alumnos.reduce(
                  (total, alumno) => total + parseFloat(alumno.Promedio),
                  0
                ) / alumnos.length
              ).toFixed(2)
            : "-"}
        </p>
      </div>
    </main>
  );
}

export default Solucion9;
