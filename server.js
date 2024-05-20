const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let voteCount = 0;

app.post('/vote', (req, res) => {
    voteCount = req.body.count;
    res.sendStatus(200);
});

app.get('/get-votes', (req, res) => {
    res.send({ count: voteCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
