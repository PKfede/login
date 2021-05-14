import React, {useRef, useState} from 'react'
import './styles.css'

import {formatRelative} from 'date-fns';

import firebase from 'firebase/app'
import 'firebase/auth'

import moment from 'moment'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Bygoogle from './Bygoogle';




const auth = firebase.auth()
const firestore = firebase.firestore()
const analytics = firebase.analytics()

export const Chat = () =>{

  const [user] = useAuthState(auth)

  return (
 
  <div className="row justify-content-center h-100">

    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css" />
    <div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header">
          <div className="input-group">
            <input type="text" placeholder="Search..." name className="form-control search" />
            <div className="input-group-prepend">
              <span className="input-group-text search_btn"><i className="fas fa-search" /></span>
            </div>
          </div>
        </div>
        <div className="card-body contacts_body">
          <ui className="contacts">
            <li className="active">
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
                  <span className="online_icon" />
                </div>
                <div className="user_info">
                  <span>Khalid</span>
                  <p>Kalid is online</p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" className="rounded-circle user_img" />
                  <span className="online_icon offline" />
                </div>
                <div className="user_info">
                  <span>Taherah Big</span>
                  <p>Taherah left 7 mins ago</p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg" className="rounded-circle user_img" />
                  <span className="online_icon" />
                </div>
                <div className="user_info">
                  <span>Sami Rafi</span>
                  <p>Sami is online</p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/sweet-girl-profile-pictures-9.jpg" className="rounded-circle user_img" />
                  <span className="online_icon offline" />
                </div>
                <div className="user_info">
                  <span>Nargis Hawa</span>
                  <p>Nargis left 30 mins ago</p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img" />
                  <span className="online_icon offline" />
                </div>
                <div className="user_info">
                  <span>Rashid Samim</span>
                  <p>Rashid left 50 mins ago</p>
                </div>
              </div>
            </li>
          </ui>
        </div>
        <div className="card-footer" />
      </div></div>
    <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <div className="card-header msg_head">
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
              <span className="online_icon" />
            </div>
            <div className="user_info">
              <span>Chat with Fede</span>
              <p>1767 Messages</p>
            </div>
            <div className="video_cam">
              <span><i className="fas fa-video" /></span>
              <span><i className="fas fa-phone" /></span>
            </div>
          </div>
          <div>
          <span id="action_menu_btn"><i className="fas fa-ellipsis-v" /></span>
          <div className="action_menu">
            <ul>
              <li><i className="fas fa-user-circle" /> View profile</li>
              <li><i className="fas fa-users" /> Add to close friends</li>
              <li><i className="fas fa-plus" /> Add to group</li>
              <li><i className="fas fa-ban" /> Block</li>
            </ul>
            </div>
          </div>
        </div>
        
          

          { user ? <Chatroom/> : <Bygoogle/> }


        </div>

        </div>

        </div>




  );
}
function SignIn(){

  const signInWithGoogle = () => {

      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)

  }

    return (<>
  
      <button className= "sign-in" onClick = {signInWithGoogle}> Iniciar Sesión</button>
      <p>Bienvenido</p>
    </>)

}



function SignOut(){

  return auth.currentUser && (
    <button className= "sign-out" onClick={() => auth.signOut()}>Salir</button>
  )

}

function Chatroom(){

  const dummy = useRef()
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)
  const [messages] = useCollectionData(query, {idField: 'id'})

  const [formValue,setFormValue] = useState('')
  
  const sendMessage = async (e) =>{
    
    e.preventDefault()
    const {uid, photoURL} = auth.currentUser

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
      

    })

    setFormValue('')
    dummy.current.scrollIntoView({ behavior: 'smooth'})

  }

  
  return(<>


  <div className="card-body msg_card_body">
  <main>

    {messages && messages.map(msg=> <ChatMessage key = {msg.id} message = {msg} /> )}
    <span ref = {dummy}></span>

  </main>
  </div>

  <form className="card-footer" onSubmit = {sendMessage}>
              <div className="input-group">
          <div className="input-group-append">
              <span className="input-group-text attach_btn"><i className="fas fa-paperclip" /></span>
            </div>
            <textarea name className="form-control type_msg" value= {formValue} onChange= {(e) => setFormValue(e.target.value)} placeholder="Type your message..." defaultValue={""} />
            <div className="input-group-append">
              <button className="input-group-text send_btn" type = "submit">Send </button>
              
            </div>
          </div>
      
  </form>

  </>)
}


function ChatMessage(props){
  const {text,uid,photoURL,createdAt} = props.message

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
  
  const date = createdAt ? createdAt.toDate().getTime() : null

  return (<>

  
        <div className="card-body msg_card_body">
          <div className = {`message ${messageClass}`}>

              <img src={photoURL} className="rounded-circle user_img_msg" />

            <div className={`msg_container_${messageClass}`}>
              {text}
              {/* <span className={`msg_time_${messageClass}`}> {date ? moment(date).format('LLL') : "..."}</span> */}
              <span className="msg_time"> {date ? moment(date).format('LLL') : "..."}</span>
            </div>
          </div>
        </div>

  
  </>)

}
