import React, { Component } from 'react';

import './App.css';
import Weather from './Weather';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '94010',     // Used to hold value entered in the input field
      weatherData: null,  // Used to hold data loaded from the weather API
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    const zip = this.state.inputValue
   
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
    
    fetch(url).then(res => {
      return res.json()
    }).then((json) => {
      this.setState({ weatherData: json })
    }).catch((err) => {
      // If there is no data 
      this.setState({ weatherData: null }) 
      console.log('-- Error fetching --')
      console.log(err.message)
    })
  }

  renderWeather() {
    if (this.state.weatherData === null) {

      return undefined
    }
    console.log("this.state.weatherData", this.state.weatherData.cod)
    
    return (
      <Weather weatherData={this.state.weatherData.weather[0]} main={this.state.weatherData.main} status={this.state.weatherData.cod}/>  
    )
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input 
            value={this.state.inputValue} 
            onChange={e => this.setState({ inputValue: e.target.value })}
            type="text" 
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="enter zip"
          />
          <button type="submit">Submit</button>

        </form>
        {this.renderWeather()}

      </div>
    );
  }
}

export default App;