import React from 'react'
import Layout from "./pages/layout/layout"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from "./pages/landing/landing"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;