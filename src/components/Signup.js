import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  let [name, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dbUrl = "http://localhost:4000/users";
  let navigate = useNavigate();
  async function onSubmit(e) {
    e.preventDefault();
    try {
      let response = await axios.get(dbUrl);
      let data = response.data;
      console.log(data);

      let userObj = {
        name: name,
        email: email,
        password: password,
      };
      const userresp = data.find((el) => el.email === userObj.email);
      //  console.log("hi",userresp)
      if (userresp) {
        alert("User already Exist");
        return;
      }

      let resp = await axios.post(dbUrl, userObj);
      if (resp.status !== 201 || resp.status !== 200) {
        alert("Something went Wrong");
        return;
      }
      navigate("/login");
    } catch (error) {
      console.error("Error While Saving User", error);
      return;
    }
  }
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
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Agree with Policy" />
          </Form.Group>

          <div>
            <Button
              variant="danger"
              type="submit"
              className="col-sm-12"
              onClick={onSubmit}
            >
              Sign Up
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
