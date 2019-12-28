/*
 * @Description:
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 17:01:41
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-28 17:24:51
 */
import React from 'react'
import PropTypes from 'prop-types'
import WrapWithLoadData from './WrapWithLoadData'

class CommentInput extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }
  constructor(props){
    super(props)
    this.state = {
      username: props.data,
      content: ""
    }
    this.handleContentChange = this.handleContentChange.bind(this)
  }
  // componentWillMount(){
  //   this._loadUsername()
  // }
  // _loadUsername(){
  //   let username = localStorage.getItem("username")
  //   if(username){
  //     this.setState({ username })
  //   }
  // }
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
      const {username, content } = this.state
      this.props.onSubmit({
        username, 
        content,
        createTime: +new Date()
      })
    }
    this.setState({content: ''})
  }
  // _saveUsername(username){
  //   localStorage.setItem('username', username)
  // }
  handleUsernameBlur(event){
    //this._saveUsername(event.target.value)
    this.props.saveData(event.target.value)
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
              onChange={this.handleContentChange} 
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

CommentInput = WrapWithLoadData(CommentInput, 'comments')
export default CommentInput