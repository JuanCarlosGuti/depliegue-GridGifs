import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs"


export const useFetchGifs = (objeto) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsloading] = useState(true)

    const getIma = async () => {
        const nuevaImagen = await getGifs(objeto);
        setImages(nuevaImagen);
        setIsloading(false)
    }

    useEffect(() => {
        getIma()
    
     
    }, [])
    



  return {
    images,
    isLoading
  }
}
