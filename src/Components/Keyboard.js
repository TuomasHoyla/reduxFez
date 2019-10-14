import React from 'react'
import {Col, Button} from 'react-bootstrap'

export const KeyBoard = ({fetchMovement}) => (

    <div>
    <Col md={1} xsOffset={2}>
      <Button onClick={() => fetchMovement('n')}>North</Button>
  </Col>
  <Col  md={10}>
      <Button onClick={() => fetchMovement('w')} className="">West</Button>
      <Button onClick={() => fetchMovement('s')}>South</Button>
      <Button onClick={() => fetchMovement('e')}>East</Button>
   </Col>
   </div>

)