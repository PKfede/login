import React from 'react'



import firebase from 'firebase/app'
import 'firebase/auth'
import {Redirect} from 'react-router-dom'


export const Inicio = () =>(

    <div className="d-flex align-items-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

        { firebase.auth().currentUser == null? <Redirect to="/login"/> : console.log('denegado') }

        <h1>Bienvenido</h1>

    </div>
)