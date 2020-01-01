/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 16:55:07
 * @LastEditors  : WuTao
 * @LastEditTime : 2020-01-01 22:56:20
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import './index.css'
import * as serviceWorker from './serviceWorker';

const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
