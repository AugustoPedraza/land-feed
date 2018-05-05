import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const MainContainer = () => (
  <Segment basic>
    <Grid container columns='equal'>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column width={10}>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid>
  </Segment>
)

export default MainContainer;
