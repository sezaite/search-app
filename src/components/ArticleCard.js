import React from 'react'
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import sendData from './helpers/sendData';

function ArticleCard({ date, title, description, img, url }) {
    const articleDetails = {
        date, title, description, url
    }
    return (

        <div className="article-card" style={{ backgroundImage: `url(${img})` }} onClick={() => sendData(articleDetails, 'articles')}>
            <div className="article-wrapper" >
                <Link to={{ pathname: url }} target="_blank" style={{ textDecoration: "none" }}>
                    <h3>{title}</h3>
                    <h6>{date}</h6>
                    <LinesEllipsis
                        className="ellipsis-text"
                        text={description}
                        maxLine='4'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    >
                    </LinesEllipsis>
                </Link>
            </div>
        </div >
    )
}

export default ArticleCard
