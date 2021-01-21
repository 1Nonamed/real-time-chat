import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../redux/actions/authActions";
import { Avatar, Paper, Grid } from "@material-ui/core/";

import "../../styles/styles.css";
import { useStyles } from "../../styles/materialUIStyles";
import loginImg from "../../img/loginChat.png";

export const LoginScreen = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "probandoando@gmail.com",
    password: "123456",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <Grid container component="main" className="authContainer">
      <Grid item xs={false} sm={5} md={8} className={classes.imgContainer}>
        <div className="bubble1" />
        <img src={loginImg} alt="loginImage" className={classes.imgAuth} />
        <div className="bubble2" />
      </Grid>
      <Grid
        item
        square
        xs={12}
        sm={7}
        md={4}
        component={Paper}
        className="d-flex align-center"
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              autoFocus
              name="email"
              label="Email Address"
              onChange={handleInputChange}
              value={email}
            />
            <TextField
              label="Password"
              name="password"
              onChange={handleInputChange}
              type="password"
              value={password}
            />
            <Button
              className={classes.submit}
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Sign In
            </Button>
            <Button
              className={classes.submit}
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={handleGoogleLogin}
            >
              Sign In with Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/auth/login">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/auth/register">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
