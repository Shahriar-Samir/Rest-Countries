import React from 'react'

export default function Visited({visited}) {
  return (
    <div className='visited'>
        {visited.map(item=>{
            return <VisitedCountry key={item.name.common} name={item.name.common} img={item.flags.png} />
        })}
    </div>
  )
}

function VisitedCountry({name,img}){
    return(
        <div className='countryContainer2'>
            <img src={img}></img>
            <h3>{name}</h3>
        </div>
    )
}
