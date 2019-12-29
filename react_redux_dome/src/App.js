/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 22:11:08
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-29 23:36:05
 */
import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import Header from './components/Header'
import Content from './components/Content'

class App extends React.Component {
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
