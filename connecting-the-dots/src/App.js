import React from 'react';
import './App.css';
import ParticlesMap from './components/particle'
import Login from './components/login'
import Navbar from './components/navbar'
import FormChart from './components/formChart'
import ChartContainer from './components/chartContainer'
import Home from './components/home'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends React.Component {

  state = {
    charts: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/charts')
    .then(resp => resp.json())
    .then(charts => 
      this.setState({ charts })
    )
  }

  createChart = (data) => {
    fetch('http://localhost:3000/charts', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(newChart => this.setState({
      charts: [...this.state.charts, newChart]
    }))
  }

  deleteChart = (chartId) => {
    fetch(`http://localhost:3000/charts/${chartId}`, {
      method: "DELETE"
    })
    let newArray = this.state.charts.filter(chart => {
      return chart.id !== chartId
    })
    this.setState({
      charts: newArray
    })
  }


  render() {
    return(
      <div className="parent">
        <BrowserRouter>
        <Navbar />
        <ParticlesMap/>
        
        <Switch>

        <Route path="/home" >
            <Home />
          </Route>

          <Route path="/view" >
            {this.state.charts !== undefined ? <ChartContainer deleteChart={this.deleteChart} charts={this.state.charts} /> : null}
          </Route>
          
          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/create" >
            <FormChart createChart={this.createChart}/>
          </Route>

        </Switch>
       
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
