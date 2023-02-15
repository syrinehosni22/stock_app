import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FormGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Password } from "@mui/icons-material";
import { useSelector, connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { login } from '../xhr/loginRequest';

 export default function Login(props) {
 const [loginState,setLoginState]=useState({});
 const dispatch=useDispatch();
 const handleLogin = () => {
  console.log("loginState",loginState);
  dispatch(login(loginState));
}
    return (<>
    <Container className="mt-2">
    <Row>
      <Col className="col-md-8 offset-md-2">
        <legend>Login Form</legend>
        <FormGroup>
         <TextField id="standard-basic" label="username" variant="standard"  onChange={(e)=> setLoginState({...loginState,username:e.target.value})} />
         <TextField id="standard-basic" type="password" label="password" variant="standard"  onChange={(e)=> setLoginState({...loginState,password:e.target.value})} />
 
         <Button variant="outlined" onClick={handleLogin}>Login</Button>
        </FormGroup>
      </Col>
    </Row>
  </Container></>);
}                             
