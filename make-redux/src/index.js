/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 11:10:16
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-29 20:41:40
 */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
let appState = {
  title: {
    text: 'React.js',
    color: 'blue'
  },
  content: {
    text: 'React.js',
    color: 'red'
  }
}
function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle (title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent (content) {
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}
renderApp(appState)

function stateChanger(action){
  switch(action.type){
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color
      break
    default:
      break
  }
}

// dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js》' }) // 修改标题文本
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
// renderApp(appState) // 把新的数据渲染到页面上.

// function createStore(state, stateChanger){
//   const getState = () => state
//   const dispatch = (action) => stateChanger(state, action)
//   return {getState, dispatch}
// }

function createStore(state, stateChanger){
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    stateChanger(state, action)
    listeners.forEach((listener) => listener())
  }
  return {getState, dispatch, subscribe}
}

const store = createStore(appState, stateChanger)
store.subscribe(() => renderApp(store.getState()))// 监听数据变化

renderApp(store.getState())
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js》'})
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})

renderApp(store.getState())