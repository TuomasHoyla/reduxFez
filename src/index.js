import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import App from './Components/App'
import thunk from 'redux-thunk'
import { fetchInitial } from './Actions/asyncActions'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer, 
  devTools,
  applyMiddleware(thunk)
  )
  
  store.dispatch(fetchInitial(''))
  
  render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  )
