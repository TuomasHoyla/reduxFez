import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Reducers'
import App from './Components/App'
import thunk from 'redux-thunk'
import { fetchInitial } from './Actions/asyncActions'
import './App.css'

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancer(applyMiddleware(thunk)),
  )
  
  store.dispatch(fetchInitial(''))
  
  render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  )
