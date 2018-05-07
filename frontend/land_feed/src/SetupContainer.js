import React from 'react';
import { Segment } from 'semantic-ui-react'
import { ApolloConsumer } from 'react-apollo';

class SetupContainer extends React.Component {
  componentDidMount() {
    this.props.client.writeData({ data: { activeMainMenu: 'setup' }});
  }

  render() {
    return(
      <Segment basic>
        Hola Mundo!
      </Segment>
    );
  }
}



const SetupContainerWrapper = () => (
  <ApolloConsumer>
    { client => (<SetupContainer client={client} />) }
  </ApolloConsumer>
);

export default SetupContainerWrapper;
