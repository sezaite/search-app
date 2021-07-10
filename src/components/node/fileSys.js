const fs = require('fs');

// fs.readFile('/data.json', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

if (!fs.existsSync('/data.json')) {
    const jsonData = JSON.stringify(data);
    fs.writeFile('/data.json', jsonData, () => {
        console.log('file was created');
    });
} else {
    console.log('previous file wasnt deleted')

}

fs.writeFile('/data.json', data, () => {
    console.log('file was created');
});