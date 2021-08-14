import styles from './PostContent.module.css'
import m_styles from '../../../css/Main.module.css'

const PostContent = (props) => {
  return (
    <div className={styles.postContent}>
      <div className={styles.header}>
        <img
          src="https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg"
          alt="avatar"
        />
        <div>{props.name}</div>
      </div>
      <div>{props.message}</div>
      <div className={styles.likes}>
        <i className={`${m_styles.icon} ${m_styles.icon_likes}`} />
        <span>{props.likes}</span>
      </div>
    </div>
  )
}

export default PostContent
