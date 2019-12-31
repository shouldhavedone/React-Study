/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-29 23:23:15
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-31 16:10:57
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }
  
  // dispatch action 改变颜色
  handleSwitchColor(color){
    if(this.props.onSwitchColor){
      this.props.onSwitchColor(color)
    }
  }
  render(){
    return (
      <div>
        <button 
          style={{color: this.props.themeColor}}
          onClick={this.handleSwitchColor.bind(this, 'red')} >Red</button>
        <button 
          style={{color: this.props.themeColor}}
          onClick={this.handleSwitchColor.bind(this, 'blue')} >Blue</button>
      </div>
    )
  }
}

export default ThemeSwitch