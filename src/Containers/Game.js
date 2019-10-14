import { connect } from 'react-redux'
import { toggleModal } from '../Actions/index'
import {fetchMovement, takeItem, dropItem, consumeItem } from '../Actions/asyncActions'
import Game from '../Components/Game'

const mapStateToProps = (state, props) => ({
    loading: state.Game.loading,
    showModal: state.Game.showModal,
    modalMessage: state.Game.modalMessage,
    gameState: state.Game.gameState
})

const mapDispatchToProps = {
  toggleModal,
  fetchMovement,
  takeItem,
  dropItem,
  consumeItem,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)