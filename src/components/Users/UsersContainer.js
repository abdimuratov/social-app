import Users from './Users'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator
} from '../../state/usersReducer'

const UsersContainer = (props) => {
  useEffect(() => {
    axios
      .get(`http://localhost:3040/users?page=2`)
      .then(({ data }) => {
        props.setUsers(data)
      })
  }, [])

  return <Users users={props.users} follow={props.follow} unfollow={props.unfollow} setCurrentPage={props.setCurrentPage} />
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
