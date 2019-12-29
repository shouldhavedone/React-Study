/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 11:10:16
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-29 21:25:19
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

// function createStore(state, stateChanger){
//   const listeners = []
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     //stateChanger(state, action)
//     state = stateChanger(state, action) // 覆盖原对象
//     listeners.forEach((listener) => listener())
//   }
//   return {getState, dispatch, subscribe}
// }
function createStore(reducer){
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    //stateChanger(state, action)
    state = reducer(state, action) // 覆盖原对象
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化state
  return {getState, dispatch, subscribe}
}

function renderApp (newAppState, oldAppState={}) { // 防止oldAppState没有传
  if(newAppState === oldAppState) return // 数据没有变化就不渲染
  console.log('render app ...')
  renderTitle(newAppState.title, oldAppState.title)
  renderContent(newAppState.content, oldAppState.content)
}

function renderTitle (newTitle, oldTitle={}) {
  if(newTitle === oldTitle) return // 数据没变化就不渲染
  console.log('render title ...')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent={}) {
  if(newContent === oldContent) return 
  console.log('render content ...')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}
// let appState = {
//   title: {
//     text: 'React.js',
//     color: 'blue'
//   },
//   content: {
//     text: 'React.js',
//     color: 'red'
//   }
// }
// function stateChanger(state, action){
//   switch(action.type){
//     case 'UPDATE_TITLE_TEXT':
//       return { // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           text: action.text
//         }
//       }
//     case 'UPDATE_TITLE_COLOR':
//       return {
//         ...state,
//         title: {
//           ...state.title,
//           color: action.color
//         }
//       }
//     default:
//       return state // 没有修改，返回原来的对象
//   }
// }

function themeReducer(state, action){
  if(!state){
    return {
      title: {
        text: 'React.js',
        color: 'red'
      },
      content: {
        text: 'React.js',
        color: 'blue'
      }
    }
  }
  switch(action.type){
    case 'UPDATE_TITLE_TEXT':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state // 没有修改，返回原来的对象
  }
}

const store = createStore(themeReducer)

let oldState = store.getState() // 缓存旧的state
store.subscribe(() => {
  const newState = store.getState() // 数据可能变化，获取新的state
  renderApp(newState, oldState) // 把新旧的state传进去渲染
  oldState = newState // 渲染完后，新的state变成旧的state
})
renderApp(store.getState())
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js》'})
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})

// function stateChanger(action){
//   switch(action.type){
//     case 'UPDATE_TITLE_TEXT':
//       appState.title.text = action.text
//       break
//     case 'UPDATE_TITLE_COLOR':
//       appState.title.color = action.color
//       break
//     default:
//       break
//   }
// }

// dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js》' }) // 修改标题文本
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
// renderApp(appState) // 把新的数据渲染到页面上.

// function createStore(state, stateChanger){
//   const getState = () => state
//   const dispatch = (action) => stateChanger(state, action)
//   return {getState, dispatch}
// }


// const store = createStore(appState, stateChanger)
// store.subscribe(() => renderApp(store.getState()))// 监听数据变化

// renderApp(store.getState())
// store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js》'})
// store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})

// renderApp(store.getState())
