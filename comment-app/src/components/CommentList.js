/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 17:01:51
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-27 18:02:21
 */
import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    
    return (
      <div>
         {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      </div>
    )
  }
}

export default CommentList