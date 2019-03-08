const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const users = [
    {
        userId: 1,
        firstName: 'Abiud',
        lastName: 'Orina',
        idNo: 1,
        studentNo: 1111,
        gender: 'M',
    },
    {
        userId: 2,
        firstName: 'Elvin',
        lastName: 'Gekonde',
        idNo: 2,
        studentNo: 2222,
        gender: 'M',
    },
    {
        userId: 3,
        firstName: 'Lindsey',
        lastName: 'Mogotu',
        idNo: 3,
        studentNo: 3333,
        gender: 'F',
    }];

app.get('/', (req, res) => {
    res.json({ 'message': 'Backend API running...' });
});

app.post('/postData', bodyParser.json(), (req, res) => {
    res.json(req.body)
})

app.listen(
    port,
    () => console.log('API running on http://localhost:3000!')
);



