import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Query } from 'react-apollo';
import {GET_ACTIVE_MENU} from '../queries';

const MainMenu = () => (
  <Query query={GET_ACTIVE_MENU}>
    {({ data }) => {

      return (
      <Menu container='true' icon='labeled'>
        <a href='/feed'>
          <Menu.Item name='feed' active={data.activeMainMenu === 'feed'}>
            <Icon name='newspaper' />
            Home
          </Menu.Item>
        </a>

        <a href='/setup'>
          <Menu.Item name='setup' active={data.activeMainMenu === 'setup'}>
            <Icon name='privacy' />
            Setup
          </Menu.Item>
        </a>
      </Menu>
    )}}
  </Query>
);

export default MainMenu;
