import React, { useEffect, useState } from 'react'
import { Widget, addUserMessage, addResponseMessage } from 'react-chat-widget'
import firebase from 'firebase/app'
import { useCollectionData, useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { firestore } from '../config/firebase-config'

import 'react-chat-widget/lib/styles.css'

const Client = () => {
  let userExist = false

  const storage = window.localStorage
  if (!storage.getItem('userId')) storage.setItem('userId', `Customer-${Date.now()}`)

  const userId = storage.getItem('userId')
  const userRef = firestore.collection('users')
  const messageRef = firestore.collection(userId)

  useEffect(async () => {
    const users = await userRef.where('uid', '==', userId).get()
    if (users.docs.length > 0) userExist = true

    const messages = await messageRef.orderBy('createdAt', 'asc')
    messages.onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(user => {
        console.log(user)
        if (user.type === 'added') {
          let userData = user.doc.data()

          if (userData.type === 'sent') addUserMessage(userData.text)
          else addResponseMessage(userData.text)
        }
      })
    })
  }, [])

  const handleNewUserMessage = newMessage => {
    if (!userExist) {
      userRef.add({
        uid: userId
      })
      userExist = true
    }

    messageRef.add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      type: 'sent'
    })
  }

  return <Widget handleNewUserMessage={handleNewUserMessage} />
}

export default Client
