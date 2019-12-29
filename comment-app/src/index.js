/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 16:55:07
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-29 10:40:30
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './components/CommentApp';
import Index from './components/ContextStudy'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
