import React from 'react'
import styles from './Users.module.css'
import blankAvatar from '../../assets/images/blank-avatar.jpg'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.pageSelector}>
        {props.users &&
          props.users.pages.map((page, index) => {
            return (
              <button
                key={index}
                className={
                  props.currentPage === page ? styles.selectedPage : ''
                }
                onClick={(e) => {
                  props.onPageChange(page)
                }}
              >
                {page}
              </button>
            )
          })}
      </div>
      {!props.users && 'loading'}
      {props.users &&
        props.users.data.map((user) => (
          <div className={styles.item}>
            <div className={styles.action}>
              <img
                src={user.avatarUrl != null ? user.avatarUrl : blankAvatar}
                alt="avatar"
                className={styles.avatar}
              />
              {user.following ? (
                <button
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
                <NavLink to={'/profile/' + user.id} key={user.id}>
                  <div>{user.name}</div>
                </NavLink>
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
