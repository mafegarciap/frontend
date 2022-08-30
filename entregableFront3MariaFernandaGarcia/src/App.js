// ok: El componente App es el padre de:
// - Cabecera
// - Listado
// listo: ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import React, {useState} from "react";
import Listado from "./components/Listado";
import Cabecera from "./components/Cabecera";
//import { computeHeadingLevel } from "@testing-library/react";
//import Item from "./components/Item";

function App() {

const[totalElemComprados, setTotalElemComprados] = useState(0);

 const sumarElm =()=>{
 
  setTotalElemComprados(totalElemComprados + 1);
  
    
  }


  return (
    <div className="App">
      <Cabecera carrito={totalElemComprados} />
      <Listado sumarElm={sumarElm}/>
    </div>
  );
}

export default App;
