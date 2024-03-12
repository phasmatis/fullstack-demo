import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"



function SingleCandy() {
    const params = useParams()
    const candyName = params.candy
    const [candy, setCandy] = useState({})
    useEffect(() => {
        async function fetchSingleCandy() {
            const {data} = await axios.get(`/api/candy/${candyName}`)
        
        setCandy(data)
        }
        fetchSingleCandy()
    },[])






    return <div className="single-candy-container">
        <h1>{candy.name}</h1>
        <h1>{candy.description}</h1>
        <img src={candy.imageUrl}/>
        <p>$ {candy.price}</p>
        
    </div>
}

export default SingleCandy