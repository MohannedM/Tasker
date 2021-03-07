import React from 'react'
import './App.css'
import Pages from './pages'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const App = () => (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </div>
      </Provider>
    );


export default App

