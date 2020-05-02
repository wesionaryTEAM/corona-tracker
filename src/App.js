import React, { Component } from 'react';
import logo from './logo.svg';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
class App extends Component {

  state = {
    data: {},
    country: ''

  }





  async componentDidMount() {
    const response = await fetchData();
    this.setState({ data: response })
  }

  handleCountryChange = async (country) => {
    const countryData = await fetchData(country);
    this.setState({ data: countryData, country: country })


  }


  render() {

    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <h1 style={{fontWeight:'bolder'}}>Corona Tracker APP</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div >
    )


  }



}

export default App;
