import "./Login.css";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [token, setToken] = useState("");
  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/login", {
        name: "Fred",
        password: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login_title">Login</h1>
        <form className="login__form">
          <input className="login__input" type="email" placeholder="Usuário" />
          <span className="login__input-border"></span>
          <input className="login__input" type="password" placeholder="Senha" />
          <span className="login__input-border"></span>
          <button className="login__submit" onClick={handleSubmit}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
