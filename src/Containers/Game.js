import { connect } from 'react-redux'
import { toggleModal, disableButtons } from '../Actions/index'
import {fetchMovement, takeItem, dropItem, consumeItem } from '../Actions/asyncActions'
import Game from '../Components/Game'

const mapStateToProps = (state, props) => ({
    loading: state.Game.loading,
    showModal: state.Game.showModal,
    gameState: state.Game.gameState,
    error: state.Game.error
  //  disable: state.Game.disable,
})

const mapDispatchToProps = {
  toggleModal,
  fetchMovement,
  takeItem,
  dropItem,
  consumeItem,
  disableButtons,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)