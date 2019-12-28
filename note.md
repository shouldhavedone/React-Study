<!--
 * @Description: 
 * @version: 
 * @Author: WuTao
 * @Date: 2019-07-23 15:21:11
 * @LastEditors  : WuTao
 * @LastEditTime : 2019-12-28 17:35:53
 -->
## 功能界面的组件化编码流程
1. 拆分组件：拆分界面，抽取组件
2. 实现静态组件：使用组件实现静态页面效果
3. 实现动态组件：
    * 动态显示初始化数据
    * 交互功能（从绑定事件监听开始）

## 基本知识。。。。。
1. 将组件之间共享的状态交给组件最近的公共父节点保管 => 可通过`props`把状态传递给子组件，可以实现组件之间共享数据
2. 状态提升 => 状态分享是通过将state数据提升至离需要这些数据的组件最近的父组件来完成的
3. 当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，用`props`传递数据或者函数来管理这种依赖或着影响的行为。
4. 执行的过程
```javascript
ReactDOM.render(
    <Header />,
    document.getElementById('root')
)
```
首先，将会编译成
```javascript
ReactDOM.render(
    React.createElement(Header, null),
    document.getElementById('root')
)
```
将`Header`组件传给了`React.createElement`函数，又将函数返回结果传给了`ReactDOM.render`
```javascript
// React.createElement 中实例化一个Header
const header = new Header(props, children)
// React.createElement 中调用header.render方法渲染组件内容
const headerJsxObject = header.render()
// ReactDOM用渲染后的JavaScript对象来构建真正的DOM元素
const headerDOM = createDOMFromObject(headerJsxObject)
// ReactDOM把DOM元素塞在页面中
document.getElementById('root').appendChild(headerDOM)
```
5. **组件的挂载：**`React.js`将组件渲染，并且构造DOM元素然后塞入页面的过程
    * `componentWillMount`：组件挂载开始之前，也就是在组件调用`render`方法之前调用
    * `componentDidMount`：组件挂载完成之后，也就是DOM元素已经插入页面后调用
    * `componentWillUnmount`：组件对应的`DOM`元素从页面中删除之前调用
6. `constructor`, `componentWillMount`, `componentDidMount`, `componentWillUnmount`的作用
    * `constructor`：关于组件自身的状态的初始化工作
    * `componentWillMount`：进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动
7. **更新阶段：**`setState`导致`React.js`重新渲染组件并且把组件的变化引用到DOM元素上
    * `shouldComponentUpdate(nextProps, nextState)`: 控制组件是否重新渲染。如果返回 false 组件就不会重新渲染
    * `componentWillReceiveProps(nextProps)`: 组件从父组件接收到新的 props 之前调用
    * `componentWillUpdate()`: 组件开始重新渲染之前调用
    * `componentDidUpdate()`: 组件重新渲染并且把更改变更到真实的 DOM 以后调用
8. 使用ref获取已经挂载的元素的DOM节点，但是能不使用ref就不用，多余的DOM操作是代码里的‘噪音’
9. **`propTypes`**: `React.js` 提供的一种给组件的配置参数加上类型验证的机制
```javascript
PropTypes.array
PropTypes.bool
PropTypes.number
PropTypes.func
PropTypes.object
PropTypes.string
PropTypes.node  
PropTypes.element
...
```
10. 自定义的组件命名和方法的摆放顺序
    * 所有私有方法以"_"开头
    * 所有时间监听方法都用`handle`开头
    * 把事件监听方法传给组件的时候，属性名用`on`开头
11. 自定义组件内容编写顺序
    * `static`开头的类属性，如`defaultProps`, `propTypes`
    * 构造函数 `constructor`
    * `getter/setter`
    * 组件生命周期
    * `_`开头的私有方法
    * 事件监听方法`handle`
    * `render*`开头的方法，有时候`render()`方法里面的内容会分开到不同函数里面进行，这些函数都以`render*`开头
    * `render()`方法
12. `dangerouslySetInnerHTML`: 设置动态设置元素的innerHTML
> 可以防止跨站脚本攻击(XSS),但是这个属性不必要的情况不要使用
```javascript
render(){
    return (
        <div
            className='editor-wrapper' // 富文本编译器
            dangerouslySetInnerHTML={{__html: this.state.content}}
        />
    )
}
```
需要给`dangerouslySetInnerHTML`传入一个对象，这个对象的`__html`属性值就相当于元素的 `innerHTML`，这样就可以动态渲染元素的`innerHTML`结构了

13. 高阶组件：一个寒素，传给它一个组件，它返回一个新的组件
> 为了组件之间的代码复用  
把组件之间可复用的代码、逻辑抽离到高阶组件当中。新的组件和传入的组件通过`props`传递信息。

