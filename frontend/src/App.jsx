import { useState , useEffect } from 'react'
import Country from './country'
import Visited from './visited'




function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=> res.json())
      .then(apiData=> setData(apiData))
  },[])

  const [visited , setVisited] = useState([])

  function bookMark(country){
    if(country[1]){
        const newArray = [...visited,country[0]]
        setVisited(newArray)
    }
    else{
      const newArray = visited.filter(item=>{
        console.log(item)
        return item.name.common !== country[0].name.common
      })
      setVisited(newArray)
    }
  }

  return (
      <div className='main-container'>
            <h1>Countries {data.length}</h1>
            <Visited visited={visited}/>
    <div className='container'>
      {
        data.map(item=>{
          return <Country key={item.cca3} country={item} bookMark={bookMark}/>
        })
      }
    </div>
      </div>
  )
}

export default App
