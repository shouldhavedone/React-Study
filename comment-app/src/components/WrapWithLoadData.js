/*
 * @Description:
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-28 16:35:12
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-28 18:21:51
 */

import React from 'react'
 
export default (WrappedComponent, name) => {
  class LocalStorageActions extends React.Component {
    constructor () {
      super()
      this.state = { data: null }
    }

    componentWillMount () {
      let data = localStorage.getItem(name)
      try {
        this.setState({ data: JSON.parse(data) })
      } catch (e) {
        this.setState({ data })
      }
    }

    saveData (data) {
      try {
        localStorage.setItem(name, JSON.stringify(data))
      } catch (e) {
        localStorage.setItem(name, `${data}`)
      }
    }

    render () {
      return (
        <WrappedComponent
          data={this.state.data}
          saveData={this.saveData.bind(this)}
          {...this.props} />
      )
    }
  }
  return LocalStorageActions
}