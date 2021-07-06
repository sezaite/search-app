import React from 'react';
import ArticleCard from './ArticleCard';

function List({ data }) {
    console.log(data);
    return (
        <div className="articles-container">
            {data.map((article, index) => (
                <ArticleCard key={index} publisher={article.publiser} title={article.title} description={article.description} img={article.img} />
            ))}
        </div>
    )
}

export default List
