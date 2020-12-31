import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

import { useForm } from "../../hooks/useForm";
import { removeError, setError } from "../../redux/actions/ui";
import { startRegisterWithEmailPasswordName } from "../../redux/actions/authActions";

export const RegisterScreen = () => {
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
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (lastname.trim().length === 0) {
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
    <div>
      <h1>Soy el RegisterScreen</h1>

      <form onSubmit={handleRegister}>
        {messageError && <div>Hay un error</div>}
        <TextField
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          fullWidth
          value={name}
          onChange={handleInputChange}
        />
        <TextField
          type="text"
          placeholder="Lastname"
          name="lastname"
          autoComplete="off"
          fullWidth
          value={lastname}
          onChange={handleInputChange}
        />
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
        <TextField
          type="password"
          placeholder="Confirm Password"
          name="password2"
          autoComplete="off"
          fullWidth
          value={password2}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
      <Link to="/auth/login" className="link">
        Already registered?
      </Link>
    </div>
  );
};
