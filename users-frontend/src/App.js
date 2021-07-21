import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login';
import SignUp from './pages/signUp';

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

        <Route exact path="/404">
          Página não encontrada
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>        
  );
}

export default App;
