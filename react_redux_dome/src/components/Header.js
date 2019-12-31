/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 23:18:23
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-30 21:13:03
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

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

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)

export default Header