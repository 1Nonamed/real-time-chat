import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";

import { useForm } from "../../hooks/useForm";
import { removeError, setError } from "../../redux/actions/ui";
import { startRegisterWithEmailPasswordName } from "../../redux/actions/authActions";

import "../../styles/styles.css";
import { useStyles } from "../../styles/materialUIStyles";
import registerImg from "../../img/registerChat.png";
import { useState } from "react";

import CloseIcon from "@material-ui/icons/Close";
export const RegisterScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { messageError } = useSelector((state) => state.ui);
  const [formValues, handleInputChange] = useForm({
    name: "Probando",
    lastname: "ando",
    email: "probandoando@gmail.com",
    password: "123456",
    password2: "123456",
  });
  const { name, lastname, email, password, password2 } = formValues;
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(
        startRegisterWithEmailPasswordName(email, password, name, lastname)
      );
    }
  };

  const isFormValid = () => {
    // lastname missing here
    if (name.trim().length < 2) {
      dispatch(setError("Name is required"));
      return false;
    } else if (lastname.trim().length < 2) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!email.includes("@")) {
      dispatch(setError("Email is not invalid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          "Passwords must have minimun 6 characters length and match each other"
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <Grid container component="main" className="authContainer">
      <Grid
        item
        xs={12}
        sm={7}
        md={4}
        square
        component={Paper}
        className="d-flex align-center"
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar} />
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={handleRegister}>
            {messageError && (
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={messageError}
                action={
                  <>
                    <Button
                      color="secondary"
                      size="small"
                      onClick={handleClose}
                    >
                      UNDO
                    </Button>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={handleClose}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </>
                }
              />
            )}
            <TextField
              autoFocus
              label="Name"
              name="name"
              onChange={handleInputChange}
              type="text"
              value={name}
            />
            <TextField
              name="lastname"
              onChange={handleInputChange}
              label="Lastname"
              type="text"
              value={lastname}
            />
            <TextField
              name="email"
              onChange={handleInputChange}
              label="Email"
              type="email"
              value={email}
            />
            <TextField
              name="password"
              onChange={handleInputChange}
              label="Password"
              type="password"
              value={password}
            />
            <TextField
              name="password2"
              onChange={handleInputChange}
              label="Confirm Password"
              type="password"
              value={password2}
            />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={3}>
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              </Grid>
              <Grid item xs style={{ textAlign: "right" }}>
                <Link to="/auth/login" className="link">
                  Already registered?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={5} md={8} className={classes.imgContainer}>
        <div className="bubble1" />
        <img src={registerImg} alt="loginImage" className={classes.imgAuth} />
        <div className="bubble2" />
      </Grid>
    </Grid>
  );
};
