import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [cep, setCep] = useState('89087491');
  const [logradouro, setLogradouro] = useState('');
  const [mustShow, setMustShow] = useState(true);
  
  async function onBlurCep() {          
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    setLogradouro(data.logradouro);
  }

  function onClickHide() {
    setMustShow(!mustShow);
  }

  return (
    <div id="background" className="background">  
      <button type="button" onClick={onClickHide}>Esconder campos</button>    
      <form id="formSignup">

        {mustShow && (
          <>
            <span id="userErrorSignup" className="error">Usuário incorreto</span>
            <input id="userSignup" type="text" placeholder="Digite seu usuário"/> 
            <span id="passwordErrorSignup" className="error">Senha incorreta</span>       
            <input id="passwordSignup" type="password" placeholder="Digite sua senha"/>
          </>
        )}     

        <input 
          id="cep" 
          type="text" 
          onBlur={onBlurCep} 
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        /> 
        <input 
          id="logradouro" 
          type="text" 
          placeholder="Digite seu logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        /> 
        <input id="bairro" type="text" placeholder="Digite seu bairro"/> 
        <input id="cidade" type="text" placeholder="Digite sua cidade"/> 
        <input id="uf" type="text" placeholder="Digite seu UF"/> 
        <input id="numero" type="text" placeholder="Digite o número da casa"/> 
       
        <button id="signupBtn" type="submit">Cadastrar</button>
      </form>               
    </div>         
  );
}

export default App;
