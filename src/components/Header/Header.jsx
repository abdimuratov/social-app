import styles from './Header.module.css'
import m_styles from '../css/Main.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <i className={`${m_styles.icon} ${m_styles.icon_logo}`} />
    </header>
  )
}

export default Header
