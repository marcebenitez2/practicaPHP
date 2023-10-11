import React from "react";
import { Route } from "wouter";
import home from "./home";
import Ejercicio1 from "./pages/ejercicio1";
import Ejercicio2 from "./pages/ejercicio2";
import Ejercicio3 from './pages/ejercicio3'
import Ejercicio4 from "./pages/ejercicio4";
import Ejercicio5 from "./pages/ejercicio5";
import Ejercicio6 from "./pages/ejercicio6";
import Ejercicio7 from "./pages/ejercicio7";
import Ejercicio8 from "./pages/ejercicio8";
import Ejercicio9 from "./pages/ejercicio9";
import Ejercicio10 from "./pages/ejercicio10";
import Ejercicio11 from "./pages/ejercicio11";
import Ejercicio12 from "./pages/ejercicio12";
import Ejercicio13 from "./pages/ejercicio13";

function App() {
  return (
    <main>
      <Route path="/" component={home} />
      <Route path="/ejercicio1" component={Ejercicio1}/>
      <Route path="/ejercicio2" component={Ejercicio2}/>
      <Route path="/ejercicio3" component={Ejercicio3}/>
      <Route path="/ejercicio4" component={Ejercicio4}/>
      <Route path="/ejercicio5" component={Ejercicio5}/>
      <Route path="/ejercicio6" component={Ejercicio6}/>
      <Route path="/ejercicio7" component={Ejercicio7}/>
      <Route path="/ejercicio8" component={Ejercicio8}/>
      <Route path="/ejercicio9" component={Ejercicio9}/>
      <Route path="/ejercicio10" component={Ejercicio10}/>
      <Route path="/ejercicio11" component={Ejercicio11}/>
      <Route path="/ejercicio12" component={Ejercicio12}/>
      <Route path="/ejercicio13" component={Ejercicio13}/>
      
    </main>
  );
}

export default App;
