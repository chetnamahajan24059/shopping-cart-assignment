import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../Register";
import Button from "../../Button";
import "./login.scss";

const Login = () => {
  const { user, logoutUser } = useUser();

  if (user.token) {
    return (
      <div className="login">
        <Button className="text" onClick={logoutUser}>
          Logout
        </Button>
      </div>
    );
  }
  return (
    <div className="login">
      <Link to="/login" className="text">
        SignIn
      </Link>
      <Link to="/register" className="text">
        Register
      </Link>
    </div>
  );
};

export default Login;
