import styles from './Users.module.css'
const Users = (props) => {
  return (
    <div className={styles.container}>
      {props.users.map((user) => (
        <div key={user.id} className={styles.item}>
          <div className={styles.action}>
            <img src={user.avatarUrl} alt="avatar" className={styles.avatar} />
            {user.followed ? (
              <button
              className={styles.button}
                onClick={() => {
                  props.unfollow(user.id)
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id)
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div className={styles.info}>
            <div className={styles.personal_info}>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div className={styles.location}>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Users
