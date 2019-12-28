/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 17:01:58
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-28 15:32:16
 */
import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component{
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  constructor(props){
    super(props)
    this.state = {
      timeString: ''
    }
  }
  componentWillMount(){
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }
  _updateTimeString(){
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createTime) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)}分钟前`
        : `${Math.round(Math.max(duration, 1))}秒前`
    })
  }
  render(){
    const { comment } = this.props
    return(
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username}：</span>
        </div>
        <p>{comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
      </div>
    )
  }
}

export default Comment