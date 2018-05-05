import React from 'react';
import { Comment } from 'semantic-ui-react'


const Post = ({ post }) => (
  <Comment>
    <Comment.Avatar as='a' src='https://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
    <Comment.Content>
      <Comment.Author as='a'>{post.title}</Comment.Author>
      <Comment.Metadata>
        <span>Today at 5:42PM</span>
      </Comment.Metadata>
      <Comment.Text>{post.url}</Comment.Text>
      <Comment.Actions>
        <a>Reply</a>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default Post;
