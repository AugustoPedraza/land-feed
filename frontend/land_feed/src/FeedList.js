import React from 'react'
import { Comment, Header } from 'semantic-ui-react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Post from './Post';

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      url
    }
  }
`;

const FeedList = () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      if(loading) return <p>Loading .... </p>;
      if(error) return <p>Error! ${error.message}</p>;

      return (
        <Comment.Group size='small'>
          <Header as='h3' dividing>Lastest Posts</Header>
            {data.posts.map( post => (
                <Post id={post.id} post={post} />
            ))}
        </Comment.Group>
      );
    }}
  </Query>
);

export default FeedList;
