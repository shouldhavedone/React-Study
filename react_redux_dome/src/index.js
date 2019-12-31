/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 22:11:08
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-31 16:14:41
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import App from './App';
import Header from './containers/Header'
import Content from './containers/Content'

import * as serviceWorker from './serviceWorker';

// function createStore(reducer){
//   let state = null
//   const listeners = []
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach((listener) => listener())
//   }
//   dispatch({}) // 初始化state
//   return { getState, dispatch, subscribe }
// }

const themeReducer = (state, action) => { // 主题色的状态
  if(!state) return {
    themeColor: 'red'
  }
  switch(action.type){
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor
      }
    default:
      return state
  }
}
const store = createStore(themeReducer)

class Index extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
