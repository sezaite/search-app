import React from 'react'

function ArticleCard({ publisher, title, description, img }) {
    return (
        <div className="article-card" style={{ background: `${img}` }}>
            <div className="article-wrapper" >
                <h3>{title}</h3>
                <h6>{publisher}</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ArticleCard
