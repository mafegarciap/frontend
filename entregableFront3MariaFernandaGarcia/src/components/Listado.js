import React from 'react'
import productos from "./data.json";
import Item from './Item';


// listo: Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ok:ESTADO: Listado no necesita manejar un estado.
//ok: MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.


export default function Listado(props) {
  //console.log(props);
 
  
  return (
    <div className='container'>
      {productos.map((elemento) => {
        return(
          
            <Item 
            nombre={elemento.producto.nombre} 
            descripcion={elemento.producto.descripcion} 
            stock={elemento.stock} 
            agregarAlCarrito={props.sumarElm}/>
          
        )
        }
    )}
    </div>
  );
}


