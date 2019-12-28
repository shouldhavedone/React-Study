/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 17:01:58
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-27 23:52:48
 */
import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component{
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  render(){
    const { comment } = this.props
    return(
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username}：</span>
        </div>
        <p>{comment.content}</p>
      </div>
    )
  }
}

export default Comment