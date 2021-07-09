import React from 'react'
import { Link } from 'react-router-dom'

function ArticleCard({ id, publisher, title, description, img }) {
    return (

        <div className="article-card" style={{ background: `${img}` }}>
            <div className="article-wrapper" >
                <Link to={`/articles/${id}`} target="_blank">
                    <h3>{title}</h3>
                    <h6>{publisher}</h6>
                    <p>{description}</p>
                </Link>
            </div>
        </div>
    )
}

export default ArticleCard
