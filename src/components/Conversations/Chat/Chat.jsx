import styles from './Chat.module.css'

const Chat = (props) => {
  return (
    <div>
      <div className={styles.chat}>
        <img src={props.avatarUrl} alt="" />
        <div className={styles.message}>{props.message}</div>
      </div>
    </div>
  )
}

export default Chat
