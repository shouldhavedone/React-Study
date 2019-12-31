/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-31 16:08:44
 * @LastEditors: WuTao
 * @LastEditTime: 2019-12-31 16:12:14
 */
import {connect} from 'react-redux'
import ThemeSwitch from '../components/ThemeSwitch'

const mapStateToProps = (state) =>{
  return {
    themeColor: state.themeColor
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
