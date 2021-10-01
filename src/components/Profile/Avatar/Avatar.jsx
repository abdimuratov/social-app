import styles from './Avatar.module.css'
import m_styles from '../../css/Main.module.css'
import blankAvatar from '../../../assets/images/blank-avatar.jpg'

const Avatar = (props) => {
  return (
    <div className={styles.avatar}>
      <img
        src={props.avatarUrl != null ? props.avatarUrl : blankAvatar}
        alt="avatar"
      />
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/*"
        className={m_styles.upload_photo}
      />
      <label htmlFor="avatar">Choose a file</label>
    </div>
  )
}

export default Avatar
