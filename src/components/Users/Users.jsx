import React from 'react'
import styles from './Users.module.css'
import blankAvatar from '../../assets/images/blank-avatar.jpg'
import { NavLink } from 'react-router-dom'

const Users = (props) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.pageSelector}>
        {props.pages &&
          props.pages.map((page, index) => {
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
      </div> */}
      <div className={styles.pageSelector}>
        {props.pages &&
          props.pages.map((page) => {
            return (
              <button
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
        props.users.map((user) => (
          <div className={styles.item} key={user.id}>
            <div className={styles.action}>
              <img
                src={
                  user.photos.small != null ? user.photos.small : blankAvatar
                }
                alt="avatar"
                className={styles.avatar}
              />
              {user.followed ? (
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
                <NavLink className={styles.name} to={'/profile/' + user.id}>
                  <div>{user.name}</div>
                </NavLink>
                <div className={styles.status_section}>
                  <div>Status:</div>
                  <div className={styles.status}>{user.status}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Users
