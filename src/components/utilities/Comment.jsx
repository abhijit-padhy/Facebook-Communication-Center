import React, {useState} from 'react'
import { Card, CardBody, Button } from 'reactstrap';
import PostFeed from '../pages/PostFeed';
import moment from 'moment';

export default function Comment({comment, feedID, socket}) {
  const [showCommentBox, setShowCommentBox] = useState(false);
  return (
    <div>
      <Card className="comment border-0 bg-light py-2 font-14-16">
          <CardBody className="px-2 py-0">
            <div className="comment">
              <span><b>{comment.commentBy}</b></span> {' '}
              <span>{comment.comment}</span> {' '}
              <span className="text-secondary-dark">{moment(comment.date).startOf('hour').fromNow()}</span>
            </div>
            {
              comment.replies && comment.replies.length &&
              comment.replies.map((reply, index) => (
                <Card className="replies border-0 bg-light" key={index}>
                  <CardBody className="p-2">
                    <div className="reply">
                      <span><b>{reply.replyBy}</b></span> {' '}
                      <span>{reply.reply}</span> {' '}
                      <span className="text-secondary-dark">{moment(reply.date).startOf('hour').fromNow()}</span>
                    </div>
                  </CardBody>
                </Card>
              ))
            }
          <div className="cursor-pointer" onClick={() => setShowCommentBox(!showCommentBox)}><u>Reply</u></div>
          {
            showCommentBox &&
            <div className="bg-grey">
              <PostFeed feedID={feedID} cId={comment.cId} socket={socket} />
            </div>
          }
          </CardBody>
        </Card>
    </div>
  )
}
