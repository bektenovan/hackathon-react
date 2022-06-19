import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authProductContext } from "../../contexts/authProductContext";

const RegisterForm = () => {
  const { signUp, error } = useContext(authProductContext);
  const navigate = useNavigate("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleValues() {
    if (!email || !password) {
      alert("Please fill out all fields!");
      return;
    }
    signUp(email, password, navigate);
  }

  return (
    <Box className="log" display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"} marginTop={"20px"} >
      <Box className="log-box"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"70vh"}>
        <Typography variant="h3" component="h2">
          Register form
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "30%", margin: "15px" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"></TextField>
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
          Sign up!
        </Button>
        <Typography variant="p" component="h2">
          Already have an account?
        </Typography>
        <Typography
          onClick={() => navigate("/login")}
          variant="p"
          color={"primary"}
          style={{ cursor: "pointer" }}
          component="h2">
          Log in
        </Typography>
      </Box>
      <img width="700" height="570" src="https://media3.giphy.com/media/QaAUOd3XrfWr4ehz5Q/giphy.gif" ></img>
    </Box>
  );
};

export default RegisterForm;
