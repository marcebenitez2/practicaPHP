import React from "react";
import Consigna from "../components/consigna";
import { consignas } from "../services/consignas";
import Solucion1 from "../components/solucion1";


function Ejercicio1() {
  return (
    <main class="w-full min-h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
        <Consigna x={consignas[0]}/>
        <Solucion1/>
    </main>
  );
}

export default Ejercicio1;
