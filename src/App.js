import React from 'react'

import { Navbar, Brand, CTA } from './components'
import { Blog, Footer, Possibility, Features, Header, WhatGPT3 } from './containers' 

const App = () => {
  return (
    <div className= "App">
      <div className = "gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
}

export default App
