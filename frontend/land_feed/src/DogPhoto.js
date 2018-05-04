import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id,
      displayImage
    }
  }
`;

const DogPhoto = ({ breed }) => (
  <Query
	query={GET_DOG_PHOTO}
	variables={{breed}}
  >
    {({ loading, error, data }) => {
      if(loading) return null;
      if(error) return `Error!: ${error.message}`;

      return (
        <img src={data.dog.displayImage} alt="breed dog img" style={{ height: 100, width: 100 }} />
      );
    }}
  </Query>
);

export default DogPhoto;

