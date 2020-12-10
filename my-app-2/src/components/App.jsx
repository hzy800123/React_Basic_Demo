import React, {Compoenet} from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import About from '../views/About'
import Home from '../views/Home'

class App extends Compoenet {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-offset-2 col-xs-2'>
            <div className='list-group'>
              <NavLink className='list-group-item' to='/about'>About</NavLink>
              <NavLink className='list-group-item' to='/home'>Home</NavLink>
            </div>
          </div>

          <div className='col-xs-offset-2 col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                <Switch>
                  <Route path='/about' Compoenet={Abount} />
                  <Route path='/home' Compoenet={Home} />
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