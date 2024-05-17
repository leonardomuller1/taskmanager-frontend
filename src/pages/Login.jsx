import CustomButton from "../components/CustomButton";

import logo from "../assets/images/logo-2.png";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="FullStack club" />
      <div className="button-container">
        <CustomButton>Entrar</CustomButton>
      </div>
    </div>
  );
};

export default Login;
