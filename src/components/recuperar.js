import React,{useState}from 'react'
import firebase, {Auth} from 'firebase/app'
import { Link } from 'react-router-dom'

export const Recuperar = () => {


    
    const [usuario,setUser] = useState()

    const handleSubmit = (e) => {

        recuperar(usuario)
        e.preventDefault()

    }

    return(
        <div div className="d-flex align-items-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <div className= 'col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4'>
                    <form className = "card card-body" onSubmit = {handleSubmit}>
                        <div className = 'mb-3'>
                            <label className='form-label'>Usuario</label>
                            <input type = 'email' className = 'form-control' onChange = {e => setUser(e.target.value)} value = {usuario}/>
                        </div>
                        <button type = 'submit' className = 'btn-primary'> Recuperar </button>
                    </form>
                </div>
        </div>
    )
}

function recuperar(usuario) {
    firebase
    .auth()
    .sendPasswordResetEmail(usuario)
    .then(res=>{
        alert("La contraseña llegara a su correo")
    })
    .catch(e =>{
        console.log(e.message)
    })
}