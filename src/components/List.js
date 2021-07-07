import React from 'react';
import ArticleCard from './ArticleCard';

function List({ data }) {
    //nezinau, ar key bus pasiekiamas cardo komponente
    return (
        <div className="articles-container">
            <div className="row">
                {data.map((article) => (
                    <ArticleCard key={article.id} publisher={article.publiser} title={article.title} description={article.description} img={article.img} />
                ))}
            </div>
        </div>
    )
}

export default List
