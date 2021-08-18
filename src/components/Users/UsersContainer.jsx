import Users from './Users'
import { connect } from 'react-redux'
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
} from '../../state/usersReducer'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
