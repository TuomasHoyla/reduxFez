import * as types from './actionTypes'

export const receiveInitial = (param, json) =>  ({
    type: types.RECEIVE_STATE,
    gameState: json
  })

  export const receiveError = (error) => ({
    type: types.RECEIVE_STATE_ERROR,
    error: error
  })

export const requestState = (command) =>({
  type: types.REQUEST_ACTION,
  command
})

export const toggleModal = () => ({
  type: types.TOGGLE_MODAL,
})

export const disableButtons = () => ({
  type: types.DISABLE_BUTTONS,
})