import gql from 'graphql-tag';

export const GET_ACTIVE_MENU = gql`
   query GetActiveMenu {
    activeMainMenu @client 
  }
`;
