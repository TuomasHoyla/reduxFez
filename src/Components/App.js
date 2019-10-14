import React from 'react'
import Game from '../Containers/Game'
import {Grid, Col} from 'react-bootstrap'

const App = () => (
  <div>
    <Grid>
    <Col xs={12} md={12}>
          <h3>Fez Ferguson</h3>
          </Col>
      <Game />
    </Grid>
  </div>
)

export default App