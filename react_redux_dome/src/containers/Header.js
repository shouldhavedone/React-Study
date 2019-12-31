/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-31 16:05:31
 * @LastEditors: WuTao
 * @LastEditTime: 2019-12-31 16:07:37
 */
import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

export default connect(mapStateToProps)(Header)