import React from 'react'
import {Row} from 'react-bootstrap';

const drawMap = (rows) => rows.map((col, index) => {
    return <div key={index}>{col}</div>
})

const Map = ({ data }) => {

  return (
    <div>
      <div style={{"textAlign": "left"}}><b>Map</b></div>
      <Row className="mapBorder">
        {data.map && drawMap(data.map)}
      </Row>
    </div>
  )
}

export default Map
