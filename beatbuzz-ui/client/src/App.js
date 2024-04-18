
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
  CardBody,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Dashboard from "./Dashbord";
import Login from "./Login";

const CLIENT_ID = "a749ae54533d4373a5cd180d822cf1e6";
const CLIENT_SECRET = "22346e79e4514180b51fcc6abb6adcce";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? <Dashboard code={code} /> : <Login />;
};
export default App;
