/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 16:55:07
 * @LastEditors: WuTao
 * @LastEditTime: 2019-12-27 17:05:21
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './components/CommentApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CommentApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
