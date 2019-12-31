/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 23:18:23
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-31 16:08:00
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }
  render(){
    return (
      <h1 style={{color: this.props.themeColor }}>React.js</h1>
    )
  }
}

export default Header