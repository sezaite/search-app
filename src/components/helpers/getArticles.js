import axios from 'axios';

async function getArticles(keywords) {
    const keywordsArr = keywords.join('+');
    const res = await axios.get(`https://gnews.io/api/v4/search?q=${keywordsArr}&lang=en&max=9&token=4d4bd3ce04b4a34afe4a9f844557a845`);
    return res.data;
}

export default getArticles