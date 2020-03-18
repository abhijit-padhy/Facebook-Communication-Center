import React from 'react'
import PostFeed from './PostFeed';
import Timeline from './Timeline';

function PostFeedWithComments({socket}) {
  return (
    <div>
      <PostFeed socket={socket} />
      <Timeline socket={socket} />
    </div>
  )
}

export default PostFeedWithComments
