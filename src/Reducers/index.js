import { combineReducers } from 'redux'

const initialState = {showModal : false, loading : false, gameState : {}}

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