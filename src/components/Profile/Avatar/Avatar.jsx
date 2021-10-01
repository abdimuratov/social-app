import styles from './Avatar.module.css'
import m_styles from '../../css/Main.module.css'

const Avatar = (props) => {
  if (!props.avatarUrl) {
    return <div>Something went wrong...</div>
  }
  return (
    <div className={styles.avatar}>
      <img
        alt="avatar"
        src={props.avatarUrl}
      />
      <input type="file" id="avatar" name="avatar" accept="image/*" className={m_styles.upload_photo} />
      <label htmlFor="avatar">Choose a file</label>
    </div>
  )
}

export default Avatar
