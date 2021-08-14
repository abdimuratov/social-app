import React from 'react'
import Dialogs from './Dialogs/Dialogs'
import Chat from './Chat/Chat'
import styles from './Conversations.module.css'
import m_styles from '../css/Main.module.css'

const Conversations = (props) => {
  let dialogsElement = props.dialogs.map((dialog) => (
    <Dialogs key={dialog.id} id={dialog.id} avatarUrl={dialog.avatarUrl} name={dialog.name} />
  ))

  let chatsElement = props.chats.map((chat) => (
    <Chat key={chat.id} id={chat.id} avatarUrl={chat.avatarUrl} message={chat.message} />
  ))

  let newMessageElement = React.createRef()

  const onMessageSend = (e) => {
    e.preventDefault()
    props.sendMessage()
  }

  let onMessageUpdate = () => {
    let text = newMessageElement.current.value
    props.updateNewMessageText(text)
  }

  return (
    <div className={styles.conversations}>
      <div className={styles.dialogs}>{dialogsElement}</div>
      <div className={styles.chat}>
        <div className={styles.history}>{chatsElement}</div>
        <form className={styles.form} onSubmit={onMessageSend}>
          <textarea
            onChange={onMessageUpdate}
            ref={newMessageElement}
            name="textarea"
            rows="6"
            maxLength="3000"
            required
            placeholder="Enter your message"
            value={props.newMessageText}
          />
          <div className={styles.submit_message}>
            <div>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                className={m_styles.upload_photo}
              />
              <label htmlFor="avatar">Choose a file</label>
            </div>
            <button type="submit" className={styles.btn}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Conversations
