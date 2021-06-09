import React from 'react'
import './App.css'
import Menu from './components/Menu'
import Content from './components/Content'
import { BrowserRouter as Router } from  'react-router-dom'

const App = props => {
  return(
    <div className="App">
      <Router className="grid">
        
        <Menu/>
        <Content/>

      </Router>
    </div>
  )
  
}

export default App;