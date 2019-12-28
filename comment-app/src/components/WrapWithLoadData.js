/*
 * @Description:
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-28 16:35:12
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-28 17:24:28
 */

import React from 'react'
 
export default (WrappedComponent, name) => {
  class LocalStorageActions extends React.Component{
    constructor(props){
      super(props)
      this.state = {data: null}
    }
    componentWillMount(){
      let data = localStorage.getItem(name)
      try{
        // 尝试把他解析成JSON对象
        this.setState({data: JSON.parse(data)})
      }catch(e){
        // 如果出错了就当普通字符串读取
        this.setState({data})
      }
    }
    saveData(data){
      try{ 
        // 尝试把他解析成JSON字符串
        localStorage.setItem(name, JSON.stringify(data))
      }catch(e){
        // 如果出错了就当普通字符串保存
        localStorage.setItem(name, `${data}`)
      }
    }
    render(){
      return (
        <WrappedComponent
          data={this.state.data}
          saveData={this.saveData.bind(this)}
          // 将其他参数原封不动的传递给被包装的这个组件
          {...this.props}
        />
      )
    }
  }
  return LocalStorageActions
}