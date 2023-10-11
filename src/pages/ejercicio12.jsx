import React from "react";
import Consigna from "../components/consigna";
import { conbd } from "../services/consignas";
import Solucion12 from "../components/solucion12";

function Ejercicio12() {
  return (
    <main className="w-full min-h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
        <Consigna x={conbd[5]}/>
        <Solucion12/>
    </main>
  );
}

export default Ejercicio12;
