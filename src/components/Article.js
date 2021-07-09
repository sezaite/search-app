import React from 'react'
import { useParams } from 'react-router-dom'

function Article() {
    console.log('ghjk');
    const { id } = useParams();
    return (
        <div>
            <p style={{ color: "black" }}>konou - {id}</p>



        </div>
    )
}

export default Article
