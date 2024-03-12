import { useEffect, useState } from "react"
import axios from "axios"
import './allcandy.css'
import { Link } from "react-router-dom"

function AllCandy() {
  const [candy, setCandy] = useState([])


  useEffect(() => {
    async function fetchCandy() {
        const {data} = await axios.get('/api/candy')

        setCandy(data)

    }

    fetchCandy()

  },[])


    console.log({candy})

    return <div className="candies-container">
        <h1>Candy:</h1>
        {candy.map(c=> <div key={c.id} className="candy">
            <Link to={`/${c.name}`}><h1>{c.name}</h1></Link>
        </div>)}
    </div>
}

export default AllCandy