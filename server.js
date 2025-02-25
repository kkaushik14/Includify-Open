const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(express.static('assets'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong");
})

app.get('/', (req, res) => {
    res.send("Ready but without static file...");
})

const PORT = process.env.PORT || 2008;
app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));