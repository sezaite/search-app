import axios from 'axios';

function sendData(data, url) {
    const postUrl = `http://localhost:9000/${url}`;
    axios.post(postUrl, data).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err);
    });
    return;
}

export default sendData
