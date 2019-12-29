/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 23:25:41
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-29 23:27:25
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
  render(){
    return (
      <div>
        <p>React.js内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}
export default Content