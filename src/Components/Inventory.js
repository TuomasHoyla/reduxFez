import React from 'react'
import { Row, ButtonToolbar } from 'react-bootstrap';
import ItemModal from './ItemModal'

const getInventory = (showModal, toggleModal, items, dropItem, consumeItem, setHealth) => items.map(item => 
<Row style={{ marginTop: 2}} key={item.id}>
  <ItemModal item={item} showModal={showModal} toggleModal={toggleModal} consumeItem={consumeItem} dropItem={dropItem} setHealth={setHealth}/>
</Row>)

const Inventory = ({showModal, toggleModal, data, dropItem, consumeItem, setHealth, options}) => (
  <div>
    <p><b>{options.header}</b></p>
    <ButtonToolbar>
      {data && getInventory(showModal, toggleModal, data, dropItem, consumeItem, setHealth)}
    </ButtonToolbar>
  </div>
)

export default Inventory
