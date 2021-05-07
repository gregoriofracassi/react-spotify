import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"

import React from "react"

const App = () => {
  return (
    <>
      <Router>
        <Route component={Home} path="/" exact />
      </Router>
    </>
  )
}

export default App
