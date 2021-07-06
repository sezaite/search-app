import React from 'react'
import axios from 'axios';

async function getArticles() {
    const apiURL = 'data.json';
    let response = await axios.get(apiURL);
    console.log(response.data.articles);
    return response.data.articles;
}

export default getArticles
