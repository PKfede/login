
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Registro } from './components/registro'
import { Inicio } from './components/inicio'
import { Login } from './components/login'
import { Nosotros } from './components/nosotros'
import { Navbar } from './components/navbar'
import { Recuperar } from './components/recuperar'
import { Chat } from './components/chat'




function App() {

 

  return (

    <div className = "App">

      <Router>
      <Navbar/>

      <div className ='container py-3'>
        <Switch>
          <Route path = "/inicio" component = {Inicio} />
          <Route path = "/nosotros" component ={Nosotros} />
          <Route path = "/registro" component = {Registro} />
          <Route path = "/recuperar" component = {Recuperar} />
          <Route path = "/chat" component = {Chat} />
          <Route path = "/" component = {Login} />

        </Switch>
      </div>


    </Router>

    </div>

  );
}



export default App;
