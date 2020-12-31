import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../redux/actions/authActions";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "probandoando@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  // falta validar el form inputs

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div>
      <h1>Soy el LoginScreen</h1>
      <form onSubmit={handleLogin}>
        <TextField
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          fullWidth
          value={email}
          onChange={handleInputChange}
        />
        <TextField
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          fullWidth
          value={password}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleGoogleLogin}
        >
          Login with Google
        </Button>
      </form>
      <Link to="/auth/register" className="link">
        Create new account
      </Link>
    </div>
  );
};
