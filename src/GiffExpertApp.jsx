
import { useState } from 'react'
import Adicionar from './componentes/Adicionar';
import GifGrid from './componentes/GifGrid';



export default function GiffExpertApp() {
  const [categorias, setcategorias] = useState([])

  const insertar =(valor)=>{
    if(categorias.includes(valor)) return;
  setcategorias([valor,...categorias])
  }

  return (
    <>
    <h1>GiffExpert</h1>
    <Adicionar 
    //agregar = {setcategorias} 
    nuevaCategoria ={insertar}
    />
  

    
    {
          categorias.map(obj => (
           <GifGrid 
           key={obj}
           objeto={obj}
            />
          )

          )
        }
      

   
   


    
    </>
  )
}
