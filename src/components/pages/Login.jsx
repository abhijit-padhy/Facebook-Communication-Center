import React, {useState, useContext} from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import {Store} from '../../store/store';

function Login() {
  const [email, setEmail] = useState("");
  const [storeState, dispatch] = useContext(Store);

  function submit(ev) {
    console.log("Feed ", email);
    dispatch({
      reducer: "user",
      type: "setUser",
      payload: {
        email
      }
    });
    window.location.href = "#/postfeed"
  }
  return (
    <div className="post-feed">
      <Form onSubmit={submit}>
        <FormGroup>
          <Input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button className="feed">Enter</Button>
        </FormGroup>
      </Form>
    </div>
  )
}

export default Login
