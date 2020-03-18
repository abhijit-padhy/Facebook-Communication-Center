import React, {useState, useRef, useContext} from 'react'
import { Button, Form, FormGroup } from 'reactstrap';

import {Store} from '../../store/store';

function PostFeed({socket, feedID, cId}) {
  const [storeState] = useContext(Store);

  const feedRef = useRef("");
  function postFeed(ev) {
    ev.preventDefault();
    socket.emit("createMessage", {text: feedRef.current.value, feedID, cId});
    feedRef.current.value = "";
  }

  return (
    <div className="post-feed clearfix py-2">
      <Form onSubmit={postFeed}> {storeState.user.email}
        <FormGroup>
          <textarea class="form-control" id="feedTextArea" rows="1" ref={feedRef}></textarea>
        </FormGroup>
        <FormGroup>
          <Button className="py-1 px-4 float-right font-14-16" color="feed">Post</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default PostFeed
