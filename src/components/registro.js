import React,{useState}from 'react'
import firebase, {Auth} from 'firebase/app'

export const Registro = () =>{

    const [usuario,setUser] = useState()
    const [password,setPass] = useState()
    const [rePass,setRePass] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
        //addUser(usuario,password)
        validateUser(password, rePass, usuario)
        console.log("e.message")
    }
    return(
        <div className="d-flex align-items-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

                <div className= 'col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4'> 
                    <form className = "card-registro" onSubmit = {handleSubmit}>
                        <div className = 'mb-3'>
                            <label className='form-label'>Usuario</label>
                            <input type = 'email' className = 'form-control' onChange = {e => setUser(e.target.value)} value = {usuario}/>
                        </div>
                        <div className = 'mb-3'>
                            <label className='form-label'>Contraseña</label>
                            <input type = 'password' className = 'form-control' onChange = {e=> setPass(e.target.value)} value = {password}/>
                        </div>
                        <div className = 'mb-3'>
                            <label className='form-label'>Confirmar contraseña</label>
                            <input type = 'password' className = 'form-control' onChange ={e=> setRePass(e.target.value)} value = {rePass}/>
                        </div>

                        <button type = 'submit' className= 'btn-primary'> Confirmar</button>
                    </form>

                </div>


        </div>
    )
}

function addUser(email, password){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then( res => {
        if (res.user) Auth.setLoggedIn(true)
    })
    .catch(e =>{
        console.log(e.message)
    })
}

function validateUser(password, rePass, usuario) {
    if(password == rePass){

        addUser(usuario,password)
    }else{
        alert("Contraseñas diferentes")
    }
}