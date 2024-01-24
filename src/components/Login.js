import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleUserLogin(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try{
    let response = await axios.get("http://localhost:4000/users");
    let data = response.data;

    const userresp = data.find((el) => el.email === user.email);
    console.log("hi", userresp);
    if (!userresp) {
      alert("User not found");
      return;
    }
    if (userresp.password !== user.password) {
      alert("Wrong password");
      return;
    }
    navigate("/");
  }
  catch(error){
    console.error("Error While Saving User", error);
    return;
  }
  };
  return (
    <div
      className="backimg d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <br />
      <br />
      <br />
      <Card
        style={{ width: "22rem", border: "none" }}
        className="mx-4 mt-4 card_style p-4"
      >
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserLogin}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserLogin}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Agree with Policy" />
            <Link to="/signup">
              <Button variant="danger" type="submit">
                Sign up
              </Button>{" "}
            </Link>
          </Form.Group>

          <div>
            <Button variant="danger" type="submit" className="col-sm-12">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}