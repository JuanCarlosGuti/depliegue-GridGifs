
export const getGifs =async(objeto) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NJRtGbvrYP25IfnFp9Cl1uMlQ9UawOrV&q=${ objeto }&limit=5`
    const resp = await fetch(url);
    const {data} = await resp.json()
      
    const gifs  = data.map(img =>({
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url

    }));

    console.log(gifs)
    return gifs;

}