const express = require('express'); //create variable express and use it to require express

const app = express(); //create variable that uses express

app.get('/', (req, res) => { //makes a GET request
    res.send('<h1>My Node App</h1>'); //sends response 
});

app.listen(5000, () => {//listens to the port 5000
    console.log('App listening on port 5000!');
});