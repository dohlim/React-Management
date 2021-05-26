const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'https://placeimg.com/128/128/1',
            name: '김영희',
            birthday: '000001',
            gender: '여자',
            job: '대학생',
        },
        {
            id: 2,
            image: 'https://placeimg.com/128/128/2',
            name: '홍길동',
            birthday: '112345',
            gender: '남자',
            job: '무직(백수)',
        },
        {
            id: 3,
            image: 'https://placeimg.com/128/128/3',
            name: '김철수',
            birthday: '651156',
            gender: '남자',
            job: '프로그래머',
        },
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
