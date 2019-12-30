/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 22:11:08
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-29 23:50:04
 */
import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import Header from './components/Header'
import Content from './components/Content'

function createStore(reducer){
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化state
  return { getState, dispatch, subscribe }
}
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

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext(){
    return {store}
  }
  render(){
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
