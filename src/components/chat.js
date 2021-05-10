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

    
    
        
      <section>
        { user ? <Chatroom/> : <Bygoogle/> }
      </section>


  );
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


<div className = "chat">
  
  
<div className="card-header msg_head">
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <img src=" " className="rounded-circle user_img" />
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
        </div>

  <div className="card-footer">
  <main>

    {messages && messages.map(msg=> <ChatMessage key = {msg.id} message = {msg} /> )}
    <span ref = {dummy}></span>

  </main>
  </div>

  <form className="card-footer" onSubmit = {sendMessage}>

    
          <div className="input-group">

            <input name className="form-control type_msg" value= {formValue} onChange= {(e) => setFormValue(e.target.value)} placeholder="Type your message..." defaultValue={""} />
            <div className="input-group-append">
              <span className="input-group-text send_btn"><i className="fas fa-location-arrow" /></span>
              <button type = "submit">Send 🕊</button>
            </div>
          </div>
      
  </form>

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

          <div className="d-flex mb-4">
            <div className="img_cont_msg">
              <img src={photoURL} className="rounded-circle user_img_msg" />
            </div>
            <div className="msg_cotainer">
              {text}
              <span className="msg_time"> {date ? moment(date).format('LLL') : "..."}</span>
            </div>
          </div>


          </div>
          
          
        </div>

  
  </>)

}
