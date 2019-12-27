/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 17:01:58
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-27 17:57:37
 */
import React from 'react'

class Comment extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return(
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username}：</span>
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}

export default Comment