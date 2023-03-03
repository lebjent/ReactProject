import React, { useEffect, useState } from 'react'
import axios from 'axios';

function BoardLIst() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/react/getBoardList')
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, []);
  

  return (
    <div>
        {   data && data.map((board,index)=>{
                return <p key={index}>{board.title}</p>
            })
        }
    </div>
  )
}

export default BoardLIst