import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import MessageDetail from './MessageDetail'
import MyNavLink from '../components/MyNavlink'

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
    
    this.showDetailbyPush = this.showDetailbyPush.bind(this)
    this.showDetailbyReplace = this.showDetailbyReplace.bind(this)
    this.goForward = this.goForward.bind(this)
    this.goBack = this.goBack.bind(this)
    this.requestNewPage = this.requestNewPage.bind(this)
  }


  showDetailbyPush = (id) => {
    const {history} = this.props
    history.push(`/home/message/messagedetail/${id}`)
  }


  showDetailbyReplace = (id) => {
    const {history} = this.props
    history.replace(`/home/message/messagedetail/${id}`)
  }


  goBack = () => {
    const {history} = this.props
    history.goBack()
  }  


  goForward = () => {
    const {history} = this.props
    history.goForward()
  }


  requestNewPage = () => {
    // 通过JavaScript (JS) 进行页面跳转
    window.location = 'http://www.baidu.com'
  }


  componentDidMount() {
    // 模拟发送ajax请求异步数据
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 2, title: 'message002'},
        {id: 3, title: 'message003'},
        {id: 4, title: 'message004'}
      ]
      
      // 更新状态
      this.setState({messages})

    }, 1000)
  }


  render() {
    return(
      <div>
        <ul>
          {
            this.state.messages.map((item, index) =>
              <li key={index}>
                {/*
                *  标签<a></a>              页面跳转，需要发送请求，刷新页面
                *  路由<NavLink></NavLink>  路由跳转，不需要发送请求，也不需要刷新页面
                */}
                {/* <a href={`/home/message/messagedetail/${item.id}`}>{item.title}</a> */}
                <MyNavLink to={`/home/message/messagedetail/${item.id}`}>{item.title}</MyNavLink>
                &nbsp; &nbsp;
                <button onClick={() => this.showDetailbyPush(item.id)}>Push() 查看详情</button>
                &nbsp; &nbsp;
                <button onClick={() => this.showDetailbyReplace(item.id)}>Replace() 查看详情</button>
              </li>
            )
          }
        </ul>

        <p>          
          <button onClick={() => this.goBack()}>后退</button>
          &nbsp;&nbsp;
          <button onClick={() => this.goForward()}>前进</button>
        </p>

        <p>
          <MyNavLink to='/home/message/externallink'>Baidu.com</MyNavLink>
          &nbsp; &nbsp;
          <button onClick={() => this.requestNewPage()}>页面跳转</button>
        </p>
        
        <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
        <Route path='/home/message/externallink' component={() => window.location = 'http://www.baidu.com'} />
      </div>
    )
  }
}

export default Message