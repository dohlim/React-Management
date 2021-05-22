import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
    {
        id: 1,
        image: 'https://placeimg.com/128/128/1',
        name: '임도헌',
        birthday: '970121',
        gender: '남자',
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
];

class App extends Component {
    render() {
        return (
            <div>
                {customers.map((c) => {
                    return (
                        <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                    );
                })}
            </div>
        );
    }
}

export default App;
