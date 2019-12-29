/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 10:33:56
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-29 10:51:15
 */
import React from 'react'
import PropTypes from 'prop-types'

class Index extends React.Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }
  constructor(props){
    super(props)
    this.state = {themeColor: 'red'}
  }
  getChildContext(){
    return {themeColor: this.state.themeColor}
  }
  render(){
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
class Header extends React.Component{
  render(){
    return (
      <div>
        <h2>This is header</h2>
        <Title />
      </div>
    )
  }
}
class Main extends React.Component{
  render(){
    return (
      <div>
        <h2>This is main</h2>
        <Content />
      </div>
    )
  }
}
class Title extends React.Component{
  static contextTypes = {
    themeColor: PropTypes.string
  }
  render(){
    return (
      <h1 style={{color: this.context.themeColor}}>我是一段标题</h1>
    )
  }
}
class Content extends React.Component{
  render(){
    return (
      <div>
        <h2>我是一段内容</h2>
      </div>
    )
  }
}

export default Index