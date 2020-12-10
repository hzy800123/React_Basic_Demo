import React, {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import MyNavLink from '../components/MyNavlink'
import News from './News'
import Message from './Message'

/*
  如何编写 二级路由
  1. 编写路由组件
  2. 在父级路由组件中指定
      路由链接： <NavLink>
      路由：  <Route>
*/
class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home route Component</h3>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
            {/* <li>
              <MyNavLink to='/home/externallink'>Baidu.com</MyNavLink>
            </li> */}
          </ul>
          <div>
            <Switch>
              <Route path='/home/news' component={News} />
              <Route path='/home/message' component={Message} />
              {/* <Route path='/home/externallink' component={() => window.location = 'http://www.baidu.com'} /> */}
              <Redirect to='/home/news'/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Home