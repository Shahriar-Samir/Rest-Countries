import { useState } from "react"

export default function Country({country , bookMark}){
    const [visited,setVisited] = useState(false)

    function handleVisited(){
       if(visited){
        bookMark([country,false])
       }
       else{
        bookMark([country,true])
       }
        setVisited(!visited)
    }

    return(
      <div className='countryContainer' style={{backgroundColor: visited ? 'wheat' : 'transparent'}}>
        <img src={country.flags.png}></img>
         <h3>Country : {country.name.common}</h3>
         <h4>Capital : {country.capital}</h4>
         <button onClick={handleVisited}>Visited</button>
      </div>
    )
}