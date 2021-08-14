import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
  let path = "/conversations/" + props.id;

  return (
    <NavLink to={path} className={styles.dialogs}>
      <img className={styles.avatar} src={props.avatarUrl} alt="avatar" />
      <div className={styles.name}>{props.name}</div>
    </NavLink>
  )
}

export default Dialogs
