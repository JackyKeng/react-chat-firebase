import React, { useEffect, useState } from 'react'
import './Agent.css'
import Chatbox from './Chatbox'
import CustomerList from './CustomerList'
import firebase from 'firebase/app'
import { firestore } from '../config/firebase-config'

const Agent2 = () => {
  const [message, setMessage] = useState('')
  const [selectedUser, setSelectedUser] = useState('')
  const [messageList, setMessageList] = useState([])
  const [userList, setUserList] = useState([])

  useEffect(async () => {
    const userRef = firestore.collection('users')
    userRef.onSnapshot(querySnapshot => {
      let userArr = []
      querySnapshot.forEach(user => {
        userArr.push({ ...user.data(), uniqueId: user.id })
      })
      setUserList(userArr)
    })
  }, [])

  const customerOnClick = async uid => {
    setSelectedUser(uid)
    const messageRef = firestore.collection(uid)
    const query = messageRef.orderBy('createdAt', 'asc')

    query.onSnapshot(querySnapshot => {
      let messageArr = []
      querySnapshot.forEach(message => {
        messageArr.push({ ...message.data(), uniqueId: message.id })
      })
      setMessageList(messageArr)
    })
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      addNewMessage()
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    addNewMessage()
  }

  const addNewMessage = () => {
    const messageRef = firestore.collection(selectedUser)

    messageRef.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      type: 'received'
    })

    setMessage('')
  }

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <div className="col-md-4 col-xl-3 chat">
          <CustomerList
            users={userList}
            customerOnClick={customerOnClick}
            customerSelected={selectedUser}
          />
        </div>
        <div className="col-md-8 col-xl-6 chat">
          <div className="card">
            <div className="card-header msg_head">
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    className="rounded-circle user_img"
                  />
                </div>
                <div className="user_info">
                  <span>Chat with {selectedUser}</span>
                </div>
              </div>
            </div>
            <Chatbox messages={messageList} />
            <div className="card-footer">
              <div className="input-group">
                <div className="input-group-append">
                  <span className="input-group-text attach_btn">
                    <i className="fas fa-paperclip"></i>
                  </span>
                </div>
                <input
                  name=""
                  className="form-control type_msg"
                  placeholder="Type your message..."
                  value={message}
                  onKeyPress={handleKeyPress}
                  onChange={e => {
                    setMessage(e.target.value)
                  }}
                />
                <div className="input-group-append" onClick={handleSubmit}>
                  <span className="input-group-text send_btn">Send</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agent2
