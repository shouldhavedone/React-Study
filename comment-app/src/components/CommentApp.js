/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-12-27 17:01:27
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-28 15:52:36
 */
import React from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends React.Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }
  componentWillMount(){
    this._loadComments()
  }
  _loadComments(){
    let comments = localStorage.getItem('comments')
    if(comments){
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }
  _saveComments(comments){
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    let comments = this.state.comments
    comments.push(comment)
    this.setState({ comments })
    this._saveComments(comments)
  }
  handleDeleteComment(index){
    let comments = this.state.comments
    comments.splice(index, 1)
    this.setState({comments})
    this._saveComments(comments)
  }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList 
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    )
  }
}

export default CommentApp