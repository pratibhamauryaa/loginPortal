import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Form, InputGroup, FormControl, ModalTitle, } from "react-bootstrap";
import "./login.css";
import Homepage from "../homepage/homepage";
import { useNavigate } from "react-router-dom";
import bg from "./slider1.jpg";
import { HiUserCircle } from "react-icons/hi2";



export default function Login() {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length > 10) {
      alert("You have entered a invalid mobile number");
    }
    setUser({
      ...user,
      [name]: value,
    });
  };

  //calling the login api
  const login = () => {
    // console.log(user);
    axios
      .post("http://localhost:9002/login", user)
      .then((res) => {
        alert(res.data.message);
        console.log(res);
        //setLoginUser(res.data.user)
        //history.push("/")
        if (res.data.status == "success") {
          navigate('/dashboard/');
        }
      });
  };

  if (show == false) {
    return <Homepage />
  }

  return (
    <div className="login-popup">
      <Homepage />
      <Modal className="user-login" show={show} onHide={handleClose} size="'md-down">
        <div>
          <HiUserCircle className="user-circle" />
        </div>
        <Modal.Header>
          <h3>Login</h3>
        </Modal.Header>
        <Modal.Body>
          <Form className="login-inp">
            <Form.Group>
              <Form.Label htmlFor="mobile-number">Mobile Number</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  id="mobile-number"
                  placeholder="Enter your mobile number"
                  aria-label="mobile number"
                  aria-describedby="basic-addon1"
                  type="number"
                  name="mobile"
                  value={user.mobile}
                  onChange={handleChange}

                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  id="password"
                  placeholder="Enter your Password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
        <div className="button-container">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={login}>
            Login
          </Button>
        </div>
        </Modal.Footer>
      </Modal>
    </div>

  );
}
