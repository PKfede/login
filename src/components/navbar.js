import React from 'react'
import { Link } from 'react-router-dom'
import Bygoogle from './Bygoogle';
import {Redirect} from 'react-router-dom'


export const Navbar = () =>(
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/nosotros">Nosotros</Link>
          <Link className="navbar-brand" to="/login">Login</Link>
          <Link className="navbar-brand" to="/registro">Registro</Link>
          <Link className="navbar-brand" to="/inicio">Inicio</Link>
          <Link className="navbar-brand" to="/chat">Chat</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          </div>
        </div>
        <Bygoogle/>
      </nav>
)