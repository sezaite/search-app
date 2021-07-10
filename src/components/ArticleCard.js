import React from 'react'
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';

function ArticleCard({ date, title, description, img, url }) {
    return (

        <div className="article-card" style={{ background: `url(${img})` }}>
            <div className="article-wrapper" >
                <Link to={{ pathname: url }} target="_blank" style={{ textDecoration: "none" }}>
                    <h3>{title}</h3>
                    <h6>{date}</h6>
                    <LinesEllipsis
                        className="ellipsis-text"
                        text={description}
                        maxLine='3'
                        ellipsis='...>'
                        trimRight
                        basedOn='words'>
                    </LinesEllipsis>
                </Link>
            </div>
        </div >
    )
}

export default ArticleCard
