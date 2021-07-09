import React from 'react';
import ArticleCard from './ArticleCard';

function List({ data }) {
    return (
        <div className="articles-container">
            <div className="row">
                {data.map((article) => (
                    <ArticleCard key={article.id} id={article.id} publisher={article.publiser} title={article.title} description={article.description} img={article.img} />
                ))}
            </div>
        </div>
    )
}

export default List
