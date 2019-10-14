import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ItemModal = ({item, showModal, toggleModal, consumeItem, dropItem, message}) =>  {

console.log(consumeItem)

  return <div>
    <Button bsStyle="warning" onClick={toggleModal}>
    {item.name}
    </Button>
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{item.text} </div>
          </Modal.Body>
        <Modal.Footer>
          <p className="pull-left"><i>{message}</i></p>
          {item.isEdible && <Button onClick={() => consumeItem(item.id)}>Drink</Button>}
          <Button bsStyle="danger"onClick={() => dropItem(item.id)}>Drop
          </Button>
        <Button onClick={toggleModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    
    }

export default ItemModal