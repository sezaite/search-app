import React from 'react';
import ArticleCard from './ArticleCard';

function List({ data }) {
    return (
        <div className="articles-container">
            <div className="row">
                {data.map((article, index) => (
                    <ArticleCard key={index} date={article.publishedAt} title={article.title} description={article.description} img={article.image} url={article.url} />
                ))}
            </div>
        </div>
    )
}

export default List
