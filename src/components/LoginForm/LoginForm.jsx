import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { authProductContext } from "../../contexts/authProductContext";

const LoginForm = () => {
  const { login, error } = useContext(authProductContext);
  const navigate = useNavigate();
  // console.log(login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleValues() {
    if (!email || !password) {
      alert("Please fill out all fields!");
      return;
    }
    login(email, password, navigate);
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-evenly"}
      marginTop={"20px"}>
      <Box
        className="log-box"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"70vh"}>
        <Typography variant="h3" component="h4">
          Login form
        </Typography>

        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "30%", margin: "15px" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: "30%", margin: "15px" }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <Button
          onClick={handleValues}
          variant="contained"
          href="#contained-buttons"
          style={{ width: "30%", margin: "15px" }}>
          Login
        </Button>
        <Typography variant="p" component="h6">
          Don't have an account?
        </Typography>
        <Typography
          onClick={() => navigate("/register")}
          variant="h7"
          color={"primary"}
          style={{ cursor: "pointer" }}
          component="h6">
          Sign Up
        </Typography>
      </Box>
      <img
        width="700"
        height="570"
        src="https://i.pinimg.com/originals/53/c5/e4/53c5e4b1b7475e0b4e70247aaa4b65e9.gif
"></img>
    </Box>
    //https://www.serenaandlily.com/dw/image/v2/AASD_PRD/on/demandware.static/-/Sites-SerenaLily-Library/default/dw94cddcb8/0000_page-designer/homepages/2022/0607_summer_d3/mobile/BalboaDining_Mobile.jpg?sw=576&sfrm=jpg
  );
};

export default LoginForm;
