import React from "react";
import mercurio from "../assets/mercurio.svg";
import venus from "../assets/venus.svg";
import tierra from "../assets/tierra.svg";
import marte from "../assets/marte.svg";
import jupiter from "../assets/jupiter.svg";
import saturno from "../assets/saturno.svg";
import urano from "../assets/urano.svg";
import neptuno from "../assets/neptuno.svg";
import pluton from "../assets/pluton.svg";
import "../App.css";
import { useState } from "react";

function Solucion2() {
  const [valores, setValores] = useState([]);
  const [mayor, setmayor] = useState("-")
  const [menor, setmenor] = useState("-")
  const [promedio, setpromedio] = useState("-")


  const agarrarValores = (planeta, valor) => {
    const indiceExistente = valores.findIndex(
      (item) => item.planeta === planeta
    );

    if (indiceExistente !== -1) {
      const nuevosValores = [...valores];
      nuevosValores[indiceExistente].valor = valor;
      setValores(nuevosValores);
    } else {
      setValores([...valores, { planeta, valor }]);
    }
  };

  const procesarFormulario = async () => {
    try {
      const response = await fetch("http://localhost/ejercicio2.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify({ valores: valores }),
      });
      console.log(response)
      const respuesta = await response.json();
      console.log(respuesta);
      setmayor(respuesta.mas_particulas)
      setmenor(respuesta.menos_particulas)
      setpromedio(respuesta.promedio)
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <main className="w-full flex flex-col gap-10 text-white pb-12">
      <aside className="w-full flex justify-around">
        <article className="flex flex-col">
          <label>Planeta con mas particulas H:</label>
          <span>{mayor.valor}({mayor.nombre})</span>
        </article>
        <article className="flex flex-col">
          <label>Planeta con menos particulas H:</label>
          <span>{menor.valor}({menor.nombre})</span>
        </article>
        <article className="flex flex-col">
          <label>Promedio particulas H:</label>
          <span>{promedio}</span>
        </article>
      </aside>
      <button
        className="text-cyan-400 text-2xl font-semibold"
        onClick={procesarFormulario}
      >
        Calcular
      </button>
      <form className="w-full grid grid-cols-3 place-items-center gap-y-10">
        <article className="flex flex-col items-center gap-1">
          <img src={mercurio} alt="Mercurio" />
          <label data-planet="Mercurio">Mercurio</label>
          <input
            className="bg-[#222334] border h-8 px"
            type="number"
            required
            onChange={(e) => agarrarValores("Mercurio", e.target.value)}
          />
        </article>
        <article className="flex flex-col items-center gap-1">
          <img src={venus} alt="Venus" />
          <label data-planet="Venus">Venus</label>
          <input
            className="bg-[#222334] border h-8 px"
            type="number"
            required
            onChange={(e) => agarrarValores("Venus", e.target.value)}
          />
        </article>
        <article className="flex flex-col items-center gap-1">
          <img src={tierra} alt="Tierra" />
          <label data-planet="Tierra">Tierra</label>
          <input
            className="bg-[#222334] border h-8 px"
            type="number"
            required
            onChange={(e) => agarrarValores("Tierra", e.target.value)}
          />
        </article>
        <article className="flex flex-col items-center gap-1">
          <img src={marte} alt="Marte" />
          <label data-planet="Marte">Marte</label>
          <input
            className="bg-[#222334] border h-8 px"
            type="number"
            required
            onChange={(e) => agarrarValores("Marte", e.target.value)}
          />
        </article>
        <article className="flex flex-col items-center gap-1">
          <img src={jupiter} alt="Jupiter" />
          <label data-planet="Jupiter">Jupiter</label>
          <input
            className="bg-[#222334] border h-8 px"
            type="number"
            required
            onChange={(e) => agarrarValores("Jupiter", e.target.value)}
          />
        </article>
        <article className="flex flex-col items-center gap-1">
          <img src={saturno} alt="Saturno" />
          <label data-planet="Saturno">Saturno</label>
          <input
            className="bg-[#222334] border h-8 px"
            type="number"
            required
            onChange={(e) => agarrarValores("Saturno", e.target.value)}
          />
        </article>
        <article className="flex flex-col items-center gap-1">
          <img src={urano} alt="Urano" />
          <label data-planet="Urano">Urano</label>
          <input
            className="bg-[#222334] border h-8 px"
            type="number"
            required
            onChange={(e) => agarrarValores("Urano", e.target.value)}
          />
        </article>
        <article className="flex flex-col items-center gap-1">
          <img src={neptuno} alt="Neptuno" />
          <label data-planet="Neptuno">Neptuno</label>
          <input
            className="bg-[#222334] border h-8 px"
            type="number"
            required
            onChange={(e) => agarrarValores("Neptuno", e.target.value)}
          />
        </article>
        <article className="flex flex-col items-center gap-1">
          <img src={pluton} alt="Pluton" />
          <label data-planet="Pluton">Pluton</label>
          <input
            className="bg-[#222334] border h-8 px"
            type="number"
            required
            onChange={(e) => agarrarValores("Pluton", e.target.value)}
          />
        </article>
      </form>
    </main>
  );
}

export default Solucion2;
