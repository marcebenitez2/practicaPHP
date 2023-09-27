import React from "react";
import javascript from './assets/javascript.svg'
import tailwind from './assets/tailwind.svg'
import sql from './assets/sql.svg'
import php from './assets/php.svg'
import xampp from './assets/xampp.svg'
import phpGrande from './assets/PHP-logo.png'
import sqlgrande from './assets/mysql.png'
import arrow from './assets/btn-arrow.png'
import GrillaConsignas from "./components/grillaConsignas";

function home() {
  return (
    <main className="w-full min-h-screen h-full bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5 gap-56 ">
      <section className="w-full h-screen flex flex-col pt-40 2xln:pt-20 lgn:gap-0 mdn:pt-5 ">
        <div className="flex gap-40 lgn:gap-10 mdn:flex-col">
          <div className="text-white w-full flex flex-col gap-10 mdn:items-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-7xl font-semibold mdn:text-center">Practica</h1>
              <div className="text-xl mdn:text-base mdn:text-center">
                <p>
                  Esta práctica consta de 11 ejercicios dictados por el Prof.
                  Dante Rosselli. Exploraremos los fundamentos de la
                  programación web y la integración de tecnologías como
                  JavaScript y PHP para crear aplicaciones web dinámicas y
                  eficientes.
                </p>
                <p>
                  Mezclaremos conceptos de JavaScript y PHP logrando peticiones
                  exitosas a base de datos. A lo largo de esta práctica, se
                  aprende a trabajar con bases de datos, realizar consultas y
                  manipular datos de manera efectiva
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-cyan-400 text-3xl font-semibold">
                Tecnologias usadas:
              </h2>
              <aside className="flex text-xl gap-4">
                <img src={javascript} className="w-10" />
                <img src={tailwind} className="w-10" />
                <img src={sql} className="w-10" />
                <img src={php} className="w-10" />
                <img src={xampp} className="w-10" />
              </aside>
            </div>
          </div>
          <div className="w-full flex items-center 2xln:flex-col mdn:flex-row mdn:justify-center">
            <img
              src={phpGrande}
              className="w-96 mdn:w-72 smn:hidden animate-wiggle animate-infinite"
            />
            <img
              src={sqlgrande}
              className="w-80 mdn:w-72 smn:hidden animate-wiggle animate-infinite"
            />
          </div>
        </div>
        <img
          src={arrow}
          className="w-28 mx-auto mt-40 animate-bounce mdn:w-20 "
        />
      </section>
      <GrillaConsignas/>
    </main>
  );
}

export default home;
