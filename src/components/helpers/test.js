import axios from 'axios';

async function getArticles({ keywords }) {
    const fs = require('fs');
    let data = [];
    if (!fs.existsSync('/data.json')) {
        console.log('failo nera, fetchinsiu is gnews');
        const keywordsArr = keywords.split(' ').join('+');
        const apiToken = '61b2f2fabd04377e11e9c3ecf45e9073';
        const gnewsUrl = `https://gnewsapi.net/api/search?q=${keywordsArr}&language=en&limit=9&api_token=${apiToken}`;
        const res = await axios.get(gnewsUrl);
        const jsonData = JSON.stringify(res.data);
        fs.writeFile('/data.json', jsonData, () => {
            console.log(res.data, 'straipsniai atnaujinti');
            data = res.data.toString();
        });
    } else {
        console.log('failas jau yra, fetchinsiu localiai');
        const localURL = '/data.json';
        fs.readFile(localURL, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log('locali data:', data.toString())
            setData(data.toString());
        });

    }

    return data;
}

export default getArticles

