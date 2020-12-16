import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import Mainpage from './containers/MainPage/Mainpage'

class App extends Component{
  render() {
    return (
      <Layout>
        <Mainpage />
      </Layout>
    )
  }
} 

export default App
