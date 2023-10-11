import React, { useEffect, useState } from "react";

function Solucion11() {
  const [data, setData] = useState({
    titularDatos: "",
    consumoDatos: 0,
    titularTelefonia: "",
    consumoTelefonia: 0,
    titularGeneral: "",
    consumoGeneral: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/ejercicio11.php");
        const result = await response.json();
        console.log(result);
        setData({
          titularDatos: result.titular_datos,
          consumoDatos: result.total_consumo_datos,
          titularTelefonia: result.titular_telefonia,
          consumoTelefonia: result.total_consumo_telefonia,
          titularGeneral: result.titular_general,
          consumoGeneral: result.total_consumo_general,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="w-1/2 mt-6 text-center">
      <table className="w-full text-white">
        <thead className="text-cyan-400 font-semibold">
          <tr>
            <th>Concepto</th>
            <th>Nombre</th>
            <th>Consumo</th>
          </tr>
        </thead>
        {data ? (
          <tbody>
            <tr>
              <td>Datos</td>
              <td>{data.titularDatos}</td>
              <td>{data.consumoDatos}</td>
            </tr>
            <tr>
              <td>Telefonia</td>
              <td>{data.titularTelefonia}</td>
              <td>{data.consumoTelefonia}</td>
            </tr>
            <tr>
              <td>General</td>
              <td>{data.titularGeneral}</td>
              <td>{data.consumoGeneral}</td>
            </tr>
          </tbody>
        ) : null}
      </table>
    </main>
  );
}

export default Solucion11;
