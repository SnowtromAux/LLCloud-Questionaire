const express = require('express');
const cors = require('cors');

const mainObj = require('./test/object');

const app = express();
const port = 8080;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());


app.get('/get-object', (req, res) => {
	res.json(mainObj);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
