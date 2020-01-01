/*
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2020-01-01 11:35:08
 * @LastEditors  : WuTao
 * @LastEditTime : 2020-01-01 22:56:11
 */
import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends Component {
  render() {
    return (
      <div className='wrapper'>
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}