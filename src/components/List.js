import React from 'react';
import ArticleCard from './ArticleCard';

function List({ data }) {
    console.log(data);
    return (
        <div className="articles-container">
            <div className="row">
                {data.map((article, index) => (
                    <ArticleCard key={index} publisher={article.publiser} title={article.title} description={article.description} img={article.img} />
                ))}
            </div>
        </div>
    )
}

export default List
