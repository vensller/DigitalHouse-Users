import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login';
import SignUp from './pages/signUp';

import RouteWrapper from './routes/RouteWrapper';

/*
  - Identificar que o usuário está logado
  - Verificar se o usuário tem acesso em uma determinada rota (privada)
  - Se não estiver logado, redirecionar para a página de login
*/

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/">
          <span>Eu sou a página home</span>
        </Route>

        <RouteWrapper exact path="/privada" isPrivate component={() => (
          <span>Essa página só pode ser acessada por um usuário logado</span>
        )}/>

        <Route exact path="/404">
          Página não encontrada
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>        
  );
}

export default App;
