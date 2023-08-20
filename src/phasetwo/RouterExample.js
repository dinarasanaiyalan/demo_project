import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class RouterExample extends Component {
  render() {
    return (
      <div>
        <h1>RouterExample</h1>
        <BrowserRouter>

            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>
                <li>
                    <Link to="/contact" >Contact</Link>
                </li>
            </ul>
        
            <Routes>
                <Route path='/' element={ <Home></Home> } ></Route>
                <Route path='/about' element={ <About></About> } ></Route>
                <Route path='/contact' element={ <Contact></Contact> } ></Route>
            </Routes>

        </BrowserRouter>
      </div>
    )
  }
}

export default RouterExample