import React, {Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from '../views/About'
import Home from '../views/Home'
import MyNavLink from './MyNavlink'

class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          {/* <div className='col-xs-offset-2 col-xs-8'> */}
          <div className='col-offset-2 col-8'>
            <div className='page-header'><h2>React Router Demo</h2></div>
          </div>
        </div>

        <div className='row'>
          {/* <div className='col-xs-offset-2 col-xs-2'> */}
          <div className='col-offset-3 col-2'>
            <div className='list-group'>
              <MyNavLink className='list-group-item' to='/about'>About</MyNavLink>
              <MyNavLink className='list-group-item' to='/home'>Home</MyNavLink>
            </div>
          </div>

          {/* <div className='col-xs-6'> */}
          <div className='col-6'>
            <div className='panel'>
              <div className='panel-body'>              
                <Switch>                  
                  <Route path='/about' component={About} />                  
                  <Route path='/home' component={Home} />
                  <Redirect to='/about' />
                </Switch>
              </div>
            </div>
          </div>
        </div>        
      </div>
    )
  }
}

export default App