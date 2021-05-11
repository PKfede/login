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


    <div className="container-fluid h-100">
    
    
        
      <section>
        { user ? <Chatroom/> : <SignIn/> }
      </section>

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
<div className="row justify-content-center h-100">

<div className="card mb-sm-3 mb-md-0 contacts_card">
  
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
                  <img src="" className="rounded-circle user_img" />
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
                  <img src="" className="rounded-circle user_img" />
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
                  <img src="" className="rounded-circle user_img" />
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
                  <img src="" className="rounded-circle user_img" />
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
                  <img src="" className="rounded-circle user_img" />
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
      </div>

      <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <div className="card-header msg_head">
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <img src="" className="rounded-circle user_img" />
              <span className="online_icon" />
            </div>
            <div className="user_info">
              <span>Chat with Khalid</span>
              <p>1767 Messages</p>
            </div>
            <div className="video_cam">
              <span><i className="fas fa-video" /></span>
              <span><i className="fas fa-phone" /></span>
            </div>
          </div>
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
              <span className="input-group-text send_btn"><button className="button-send" type = "submit">Send 🕊</button></span>
              
            </div>
          </div>
      
  </form>

</div>

</div>
</div>

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
              <span className="msg_time_"> {date ? moment(date).format('LLL') : "..."}</span>
            </div>
          </div>
        </div>

  
  </>)

}
