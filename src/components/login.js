import React,{useState}from 'react'
import firebase, {Auth} from 'firebase/app'
import { Link } from 'react-router-dom'
import Bygoogle from './Bygoogle';

export const Login = () =>{

    const [usuario,setUser] = useState()
    const [password,setPass] = useState()


    const handleSubmit = (e) => {

        e.preventDefault()
        //addUser(usuario,password)
        login(usuario, password)
        console.log("e.message")
    }
    return(
        
        <div className="d-flex align-items-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <div className= 'col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4'>
                    <form className = "card card-body" onSubmit = {handleSubmit}>
                        <div className = 'mb-3'>
                            <label className='form-label'>Usuario</label>
                            <input type = 'email' className = 'form-control' onChange = {e => setUser(e.target.value)} value = {usuario}/>
                        </div>
                        <div className = 'mb-3'>
                            <label className='form-label'>Contraseña</label>
                            <input type = 'password' className = 'form-control' onChange = {e=> setPass(e.target.value)} value = {password}/>
                        </div>
                        <button type = 'submit' className = 'btn-primary'> Confirmar</button>
                    </form>

                    <Link className ='navbar-brand' to ='/registro'>¿Crea una cuenta?</Link>
                    <Link className ='navbar-brand' to ='/recuperar'>Olvidaste tu contraseña?</Link>

                </div>
        </div>
    )
}

function login(usuario, password){
    firebase
    .auth()
    .signInWithEmailAndPassword(usuario,password)
    .then(res =>{
        if (res.user) Auth.setLoggedIn(true)
    })
    .catch( e=>{
        alert(e.message)
    })
}