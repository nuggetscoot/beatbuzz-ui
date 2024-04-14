
import React, {useEffect, useState} from "react";
import Axios from "axios";
=======

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card, CardBody } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Dashboard from './Dashbord';
import Login from './Login';

const getData=async()=>{
  const response=await Axios.get("http://localhost:8080/api/hello");
  setData(response.data);
}

useEffect(()=>{
  getData()

},[]);
return(
  <div>{data}</div>
)
}
export default App
