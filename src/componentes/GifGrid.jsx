import { useFetchGifs } from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem"



export default function GifGrid({objeto}) {

    const {images, isLoading} = useFetchGifs (objeto)

  

    

    


  return (
    <>
        <h3>{objeto}</h3>

        {
            isLoading && <h2>Cargando....</h2>
            
        }
        
        <div className="card-grid">
            {images.map((cosito) => (
                
                <GifGridItem 
                key={cosito.id}
                
                {...cosito}
                />
                
                
            ))}
        </div>

    </>
        
     
      

      )
  
}
