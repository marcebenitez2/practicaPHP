import React from "react";

function Consigna({ x }) {
  console.log(x);
  return (
    <section className="pt-20 text-white flex flex-col gap-20">
      <div className="flex mdn:flex-col mdn:gap-5">
        <div className="w-full">
          <h1 className="text-6xl font-semibold lgn:text-4xl">{x.titulo}</h1>
          <p className="text-lg">
            <span className="text-cyan-400">Consigna:</span> {x.consigna}
          </p>
        </div>
        <div className="w-full pl-40 lgn:pl-10">
          <h2 className="text-xl text-cyan-400">Resolucion</h2>
          <ul>{x.resolucion.map((x)=>(
            <li>{x}</li>
          ))}</ul>
        </div>
      </div>
    </section>
  );
}

export default Consigna;
