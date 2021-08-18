import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'
import blankAvatar from '../../assets/images/blank-avatar.jpg'
import { useEffect } from 'react'

const Users = (props) => {
  useEffect(() => {
    axios.get('http://localhost:3040/users').then(({ data }) => {
      props.setUsers(data)
      console.log(data)
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.pageSelector}>
        {props.users && props.users.pages.map((page, index) => {
          return (
            <div
              key={index} className={props.users.currentPage === page ? styles.selectedPage : ''}
            >
              {page}
            </div>
          )
        })}
      </div>
      {!props.users && 'loading'}
      {props.users &&
        props.users.data.map((user) => (
          <div key={user.id} className={styles.item}>
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
