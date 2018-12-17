import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = [
    {id: 0, text: '测试数据!', complete: false},
    {id: 1, text: '测试数据2!', complete: false},
    {id: 2, text: '出去玩啊!!!', complete: true},
    {id: 3, text: '天气不错哦!!!', complete: true},

]
ReactDOM.render(
<App data={data}/>,
document.getElementById('app')
)

const element = <h1>Hello, world!</h1>;
ReactDOM.render(
    element,
    document.getElementById('example')
);
serviceWorker.unregister();
