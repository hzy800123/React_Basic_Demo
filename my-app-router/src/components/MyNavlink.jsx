import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'

class MyNavLink extends Component {
  render() {
    // 将外部传入的所有属性 全部传递给 NavLink
    return <NavLink {...this.props} activeClassName='activeClass'/>
  }
}

export default MyNavLink