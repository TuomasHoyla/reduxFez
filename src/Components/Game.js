import React from 'react'

import { Row, Col, ProgressBar } from 'react-bootstrap'
import View from './View'
import Map from './Map'
import Inventory from './Inventory'
import RoomItems from './RoomItems'
import { KeyBoard } from './Keyboard';

const Game = ({showModal, takeItem, dropItem, toggleModal, loading, gameState, fetchMovement, consumeItem}) => (
   
   <div className="container-fluid">
   {! loading ? 
    <div>
      <Col md={4}>
        Health: <ProgressBar now={gameState.health} label={`${gameState.health}%`}/>
        <View data={gameState}/>
          <Row style={{ marginTop: 40, marginLeft: 20 }}>
            {gameState.location &&
            <RoomItems
              data={gameState.location.locationItems}
              takeItem={takeItem}
              options={{header: 'Items on the ground:'}}
            />}
          </Row>
          
      </Col>
      <Col md= {4}>
          <KeyBoard fetchMovement = {fetchMovement}/>
          <Col md= {4}>
      {gameState.inventory && gameState.inventory.length > 0 &&
             <Inventory
             showModal = {showModal}
             toggleModal = {toggleModal}
               data={gameState.inventory}
               dropItem={dropItem}
               consumeItem={consumeItem}
               options={{header: 'Inventory:'}}
             />}
             </Col>
        </Col>
             <Col md={4}>
             <Map data={gameState}/>
             </Col>
    </div>
   : <div>LOADING</div>}
   </div> 
)

export default Game