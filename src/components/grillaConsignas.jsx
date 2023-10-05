import React from "react";
import { consignas } from "../services/consignas";
import { Link } from "wouter";

function GrillaConsignas({consignas}) {
  return (
    <main className="grid w-full  py-10 grid-cols-6 2xln:grid-cols-3 mdn:grid-cols-2 gap-y-6 gap-x-6 text-white font-semibold">
      {consignas.map((x) => (
        <Link href={`/ejercicio${x.id}`} key={x.id}>
          <div className="card" >
            <div className="card__content">
                <h1>{x.titulo}</h1>
                <p className="text-center">{x.resumen}</p>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default GrillaConsignas;
