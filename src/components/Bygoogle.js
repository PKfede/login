import React, {Component} from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../firebaseConfig'
import {Redirect} from 'react-router-dom'
import GoogleButton from 'react-google-button'


const firebaseapp = firebase.initializeApp(firebaseConfig)

class Bygoogle extends Component{
  render(){
    const{
      user,
      signOut,
      signInWithGoogle,
    } = this.props

    return(
      <div>
        {
          user
          ? <Redirect to = '/inicio' />
          :<Redirect to = '/' />
        }

        {
          user
          ? <button  className="logout-button" onClick = {signOut}> 
          Logout
          </button>
          : <GoogleButton type="light" onClick = {signInWithGoogle}/>
          

        }
      </div>
    )
  }
}

const firebaseAppAuth = firebaseapp.auth();

const providers = {
  googleProvider : new firebase.auth.GoogleAuthProvider(),
}

export default withFirebaseAuth ({
  providers,
  firebaseAppAuth
})(Bygoogle)
