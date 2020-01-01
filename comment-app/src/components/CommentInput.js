/*
 * @Description:
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 17:01:41
 * @LastEditors  : WuTao
 * @LastEditTime : 2020-01-01 22:43:13
 */
import React from 'react'
import PropTypes from 'prop-types'
// import WrapWithLoadData from './WrapWithLoadData'

class CommentInput extends React.Component {
  static propTypes = {
    // onSubmit: PropTypes.func,
    // data: PropTypes.any,
    // saveData: PropTypes.func.isRequired
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    // handleUsernameBlur: PropTypes.func
    onUserNameInputBlur: PropTypes.func
  }
  static defaultProps = {
    username: ''
  }
  constructor(props){
    super(props)
    this.state = {
      // username: props.data || [],
      username: props.username,  // 从props中取username字段
      content: ""
    }
    // this.handleContentChange = this.handleContentChange.bind(this)
  }
  componentDidMount(){
    this.textarea.focus()
  }
  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange(event){
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit(){
    if(this.props.onSubmit){
      this.props.onSubmit({
        username: this.state.username, 
        content: this.state.content,
        createTime: +new Date()
      })
    }
    this.setState({content: ''})
  }
  handleUsernameBlur(event){
    // this.props.saveData(event.target.value)
    this.props.onUserNameInputBlur(event.target.value)
  }
  render(){
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input type="text" 
              value={this.state.username} 
              onBlur={this.handleUsernameBlur.bind(this)} 
              onChange={this.handleUsernameChange.bind(this)} 
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea 
              ref={(textarea) => this.textarea=textarea} 
              value={this.state.content} 
              onChange={this.handleContentChange.bind(this)} 
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    )
  }
}

// CommentInput = WrapWithLoadData(CommentInput, 'comments')
export default CommentInput