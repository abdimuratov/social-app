import styles from './Avatar.module.css'
import m_styles from '../../css/Main.module.css'

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img
        alt="avatar"
        src="https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg"
      />
      <input type="file" id="avatar" name="avatar" accept="image/*" className={m_styles.upload_photo} />
      <label htmlFor="avatar">Choose a file</label>
    </div>
  )
}

export default Avatar
