import { useState } from 'react'


export default function Adicionar({nuevaCategoria}) {
const [inputValue, setInputValue] = useState([])


const ingresaCambio = ({target}) =>{ 
  setInputValue(target.value)
}



const recarga =(evento)=>{
  
  
  evento.preventDefault();
  if(inputValue.trim().length<=1) return;
  nuevaCategoria(inputValue.trim())
  //agregar(cates => [inputValue, ...cates])
  setInputValue('')


}


  return (
    <form onSubmit={recarga}>
      <input 
      type="text"
      placeholder='Buscar Gifs'
      value={inputValue}
      onChange={ingresaCambio}
      
      />
    </form>
  )
}
