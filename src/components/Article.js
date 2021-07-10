import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getArticles from './helpers/getArticles';

function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState("");
    const [isFetching, setIsFetching] = useState(true);

    async function getData() {
        const response = await getArticles();
        console.log(response);
        console.log(id);
        const theArticle = response.find(element => element.id == id);
        console.log(theArticle);
        setArticle(theArticle);
        setIsFetching(false);
    }

    useEffect(() => {
        getData();
    }, [])

    //     const fs = require('fs');
    //     const path = require('path');
    //     let rawdata = fs. readFileSync(path. resolve(__dirname, 'student.json'));
    //     let student = JSON. parse(rawdata);
    //     console. log(student);

    //     $.get('tweets.json',null,null,'json')
    //   .then(function(response){
    //     var iAmNumberFour = response.filter(function(tweet){
    //       return tweet.id === 4;
    //     })[0];
    //   });

    return isFetching ? <h3>Loading article...</h3> : (
        <>
            <h1>Article number {id}</h1>
            <h2>{article.title}</h2>
            <p>{article.description}</p>

        </>
    )
}

export default Article
