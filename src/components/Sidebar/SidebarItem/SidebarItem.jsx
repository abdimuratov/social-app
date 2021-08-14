import styles from './SidebarItem.module.css'
import { NavLink } from 'react-router-dom'

const SidebarItem = (props) => {
  return (
    <div className={styles.sidebar_item}>
      <NavLink to={props.url}>{props.name}</NavLink>
    </div>
  )
}

export default SidebarItem