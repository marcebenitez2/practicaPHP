import React, { useEffect, useState } from "react";

function Solucion11() {
  const [resultado, setResultado] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost/ejercicio11.php");
      const result = await response.json();
      console.log(result);
      setResultado(result)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-1/2 mt-6 text-center">
      <button className="text-cyan-400 font-semibold text-xl" onClick={fetchData}>Solicitar informe</button>
      {resultado ? (
        <div className="text-white">
         {resultado.map((item,index) => (
          <p key={index}>{item}</p>
         ))}
        </div>
      ) : null}
    </main>
  );
}

export default Solucion11;
