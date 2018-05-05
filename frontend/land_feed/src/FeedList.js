import React from 'react'
import { Comment, Header } from 'semantic-ui-react'

const FeedList = () => (
  <div>
    <Comment.Group size='small'>
      <Header as='h3' dividing>Lastest Posts</Header>

      <Comment>
        <Comment.Avatar as='a' src='https://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <span>Today at 5:42PM</span>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>
          <Comment.Actions>
            <a>Reply</a>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
      <Comment>
        <Comment.Avatar as='a' src='https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Joe Henderson</Comment.Author>
          <Comment.Metadata>
            <span>5 days ago</span>
          </Comment.Metadata>
          <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
          <Comment.Actions>
            <a>Reply</a>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  </div>
)

export default FeedList;