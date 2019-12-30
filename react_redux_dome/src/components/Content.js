/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 23:25:41
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-30 21:16:08
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import {connect} from './react-redux'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }
  render(){
    return (
      <div>
        <p style={{color: this.props.themeColor}}>React.js内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateToProps)(Content)

export default Content