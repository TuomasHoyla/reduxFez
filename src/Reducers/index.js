import { combineReducers } from 'redux'

const initialState = {showModal : false, loading : false, gameState : {}, error : null}

const Game = (state = initialState, action) => {

  switch (action.type) {

    case 'REQUEST_ACTION': 
      return {
        ...state,
        loading : true
      }
    
    case 'RECEIVE_STATE':
        return {
          ...state,
          gameState : action.gameState,
          loading: false,
          showModal: false
    }
    
    case 'RECEIVE_STATE_ERROR':

      return {
        ...state,
        error: action.error.message,
      }

    case 'TOGGLE_MODAL':

      return {
        ...state,
        showModal: ! state.showModal
      }
      
    default:
      return state
  }
}

export default combineReducers({
  Game
})