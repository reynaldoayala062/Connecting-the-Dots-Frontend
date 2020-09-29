import React from 'react';
import './App.css';
import ParticlesMap from './components/particle'
import Login from './components/login'
import Navbar from './components/navbar'
import FormChart from './components/formChart'
import ChartContainer from './components/chartContainer'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends React.Component {

  state = {
    isLoggedIn: false,
    charts: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/charts')
    .then(resp => resp.json())
    .then(charts => {
      this.setState({
        ...this.state,
        charts: charts
      })
    })
  }

  render() {
    return(
      <div className="parent">
        <BrowserRouter>
        <Navbar />
        <ParticlesMap/>
        
        
          <Switch>

          <Route path="/view" component={() => {
            return <ChartContainer charts={this.state.charts}/>
          }} />
          
          <Route path="/login" component={() => {
            return <Login />
          }} />

          <Route path="/create" component={() => {
            return <FormChart />
          }} />

          </Switch>
       
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
