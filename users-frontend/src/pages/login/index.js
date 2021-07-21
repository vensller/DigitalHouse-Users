import './styles.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div id="background" className="background">   
      <form id="formSignup">   
        <span id="userErrorSignup" className="error">Usuário incorreto</span>
        <input id="userSignup" type="text" placeholder="Digite seu usuário"/> 
        <span id="passwordErrorSignup" className="error">Senha incorreta</span>       
        <input id="passwordSignup" type="password" placeholder="Digite sua senha"/>
       
        <button id="signupBtn" type="submit">Login</button>
      </form>        
      <Link to="/signup">Criar conta</Link>    
    </div>         
  );
}

export default Login;
