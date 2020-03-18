import React, {lazy, Suspense}  from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import socketIOClient from "socket.io-client";
import { SocketContext } from "../../store/store";
const PostFeed = lazy(() => import('../pages/PostFeed'));
const Timeline = lazy(() => import('../pages/Timeline'));
const Login = lazy(() => import('../pages/Login'));
const PostFeedWithComments = lazy(() => import('../pages/PostFeedWithComments'));

const endpoint = "http://127.0.0.1:4001";
const socket = socketIOClient(endpoint);

function MainLayout() {
  return (
    <SocketContext.Provider value={socket}>
    <div className="main-layout insignia">
      <header className="text-left py-3 text-primary-red d-flex justify-content-start align-items-center">
        <h1 className="pr-4">Feeds</h1>
        <div>
          <u className="cursor-pointer pr-2" onClick={() => window.location.href="#/pfc"}>Home</u>
          <u className="cursor-pointer pr-2" onClick={() => window.location.href="#/timeline"}>Timeline</u>
          <u className="cursor-pointer pr-2" onClick={() => window.location.href="#/postfeed"}>Postfeed</u>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Switch>
              <Route exact path="/postfeed" render={() => <PostFeed socket={socket} />} />
              <Route exact path="/timeline" render={() => <Timeline socket={socket} />} />
              <Route exact path="/pfc" render={() => <PostFeedWithComments socket={socket} />} />
              <Route exact path="/login" render={() => <Login />} />
              <Route render={() => <Redirect to="/pfc" />} />
            </Switch>
          </Router>
        </Suspense>
      </main>
    </div>
    </SocketContext.Provider>
  )
}

export default MainLayout
