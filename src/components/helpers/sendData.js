import React from 'react'
import axios from 'axios';

function sendData(data) {
    const postUrl = '';
    axios.post(postUrl, {
        data: {
            search: data
        }
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err);
    });

}

export default sendData
