/*
 * @Description:
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 17:01:41
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-27 17:35:55
 */
import React from 'react'

class CommentInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      content: ""
    }
    this.handleContentChange = this.handleContentChange.bind(this)
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
      this.props.onSubmit({username, content})
    }
  }
  render(){
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea value={this.state.content} onChange={this.handleContentChange} />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput