import React from "react";
import { Route } from "wouter";
import home from "./home";
import Ejercicio1 from "./pages/ejercicio1";
import Ejercicio2 from "./pages/ejercicio2";
import Ejercicio3 from './pages/ejercicio3'

function App() {
  return (
    <main>
      <Route path="/" component={home} />
      <Route path="/ejercicio1" component={Ejercicio1}/>
      <Route path="/ejercicio2" component={Ejercicio2}/>
      <Route path="/ejercicio3" component={Ejercicio3}/>
    </main>
  );
}

export default App;
