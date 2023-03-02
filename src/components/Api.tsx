import { useEffect,useState } from "react"

function Api() {

    const [criptos,setCriptos] = useState([])

    useEffect(()=>{
      fetch('https://api.coincap.io/v2/assets')
      .then((resp)=> resp.json())
      .then((data)=>{
        setCriptos(data.data)
      })
      .catch(()=>{
        console.error('La petición fallò')
      })
    },[])

  return (

    <>
    <h1>Lista</h1>
        <ol>
        { criptos.map(({name,priceUsd} ) =>(
            <li>Nombre: {name} Precio: {priceUsd} </li>
        ))}
        </ol>
    </>
  )
}

export default Api