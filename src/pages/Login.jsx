import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/CustomButton'

import logo from '../assets/images/logo-2.png'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()

  const handleSignInClick = () => {
    navigate('/')
  }

  return (
    <div className="login-container">
      <img src={logo} alt="FullStack club" />
      <div className="button-container">
        <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
      </div>
    </div>
  )
}

export default Login
