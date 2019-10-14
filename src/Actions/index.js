import * as types from './actionTypes'

export const receiveInitial = (param, json) =>  ({
    type: types.RECEIVE_STATE,
    gameState: json
  })

export const requestState = (command) =>({
  type: types.REQUEST_ACTION,
  command
})

export const toggleModal = () => ({
  type: types.TOGGLE_MODAL,
})