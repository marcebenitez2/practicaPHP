import React from "react";
import javascript from './assets/javascript.svg'
import tailwind from './assets/tailwind.svg'
import sql from './assets/sql.svg'
import php from './assets/php.svg'
import xampp from './assets/xampp.svg'
import phpGrande from './assets/PHP-logo.png'
import sqlgrande from './assets/mysql.png'
import arrow from './assets/btn-arrow.png'

function home() {
  return (
    <main class="w-full h-screen bg-[#222334] flex flex-col px-40 xln:px-20 mdn:px-5">
      <section class="w-full flex flex-col pt-40 gap-12 2xln:pt-20 lgn:gap-0 mdn:pt-5">
        <div class="flex gap-40 lgn:gap-10 mdn:flex-col">
          <div class="text-white w-full flex flex-col gap-10 mdn:items-center">
            <div class="flex flex-col gap-5">
              <h1 class="text-7xl font-semibold mdn:text-center">Practica</h1>
              <div class="text-xl mdn:text-base mdn:text-center">
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
            <div class="flex flex-col gap-4">
              <h2 class="text-cyan-400 text-3xl font-semibold">
                Tecnologias usadas:
              </h2>
              <aside class="flex text-xl gap-4">
                <img src={javascript} class="w-10" />
                <img src={tailwind} class="w-10" />
                <img src={sql} class="w-10" />
                <img src={php} class="w-10" />
                <img src={xampp} class="w-10" />
              </aside>
            </div>
          </div>
          <div class="w-full flex items-center 2xln:flex-col mdn:flex-row mdn:justify-center">
            <img
              src={phpGrande}
              class="w-96 mdn:w-72 smn:hidden animate-wiggle animate-infinite"
            />
            <img
              src={sqlgrande}
              class="w-80 mdn:w-72 smn:hidden animate-wiggle animate-infinite"
            />
          </div>
        </div>
        <img
          src={arrow}
          class="w-28 m-auto mt-12 animate-bounce mdn:w-20"
        />
      </section>
    </main>
  );
}

export default home;
