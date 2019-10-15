
import fetch from 'cross-fetch'
import {receiveInitial, receiveError, requestState } from './index'

const baseUrl = 'https://arcane-plateau-73839.herokuapp.com/'

/*
export const fetchInitial = (command) => {

    return (dispatch) =>  {

        dispatch(requestState(command))
    
        return fetch(baseUrl)
          .then(
            response => response.json(),
            error =>  receiveError('An error occurred.', error)
            .catch(console.log('oh no'))
          .then(json => dispatch(receiveInitial(command, json)))
        )}
  }
  */

 export const fetchInitial = (command) => {
  return dispatch => {

    dispatch(requestState(command))
    
    fetch(baseUrl)
    .then(response => response.json(),)
    .then(json => dispatch(receiveInitial(command, json)))
    .catch(err => dispatch(receiveError(err)))
  }
}

  export const fetchMovement = (direction) => passActionToServer(direction)
  
  export const takeItem = (itemId) => passActionToServer('take/' + itemId)
  
  export const dropItem = (itemId) => passActionToServer('drop/' + itemId)

  export const consumeItem = (itemId) => passActionToServer('drink/' + itemId)

  const passActionToServer = (actionUrl) => (dispatch) =>  
  fetch(baseUrl + actionUrl)
  .then(
    response => response.json(),
    error => console.log('An error occurred.', error)
    )
  .then(json => dispatch(receiveInitial(actionUrl, json)))
  