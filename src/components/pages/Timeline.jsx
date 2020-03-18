import React, { useState, useEffect } from 'react'
import { Card, CardBody, Button } from 'reactstrap'
import PostFeed from './PostFeed';
import Comment from '../utilities/Comment';
import moment from 'moment';


function Timeline(props) {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [feeds, setFeeds] = useState({});

  useEffect(() => {
    fetchSocket();
  }, []);

  // function fetchFeed() {
  //   props.socket.emit("createMessage", "hello world");
  // }

  function fetchSocket() {
    props.socket.on("comments", data => {
      console.log("from socket: ", data);
      if (Object.keys(data).length) {
        setFeeds(data);
      }
    });
  }
  return (
    <div className="timeline text-left">
      {
        Object.keys(feeds).map(key => (
          <div key={key} className="mt-3 feed">
            <div className="user-info">
              <div>
                <div className="font-weight-bold text-primary-red">{feeds[key].feedBy}</div>
                <div className="font-13-15 text-secondary-dark">{moment(feeds[key].date).startOf('hour').fromNow()}</div>
              </div>
            </div>
            <hr />
            <div className="feed-content pb-2 clearfix">
              <div className="text-primary-blue">{feeds[key].feed}</div>
              <div className="p-1 float-right cursor-pointer"
                onClick={() => setShowCommentBox(!showCommentBox)}>
                <u>Comment</u>
              </div>
            </div>
            {
              showCommentBox &&
              <div className="bg-grey">
                <PostFeed feedID={key} socket={props.socket} />
              </div>
            }
            {
              feeds[key].comments &&
              Object.keys(feeds[key].comments).map(cId => (
                <Comment key={cId} feedID={key} comment={feeds[key].comments[cId]} socket={props.socket} />
              ))
            }
            <hr />
          </div>
        ))}
    </div>
  )
}

export default Timeline
