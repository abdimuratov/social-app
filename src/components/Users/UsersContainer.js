import Users from './Users'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage
} from '../../state/usersReducer'

const UsersContainer = (props) => {
  useEffect(() => {
    axios
      .get(`http://localhost:3040/users?page=${props.currentPage}`)
      .then(({ data }) => {
        props.setUsers(data)
      })
  }, [])

  let onPageChange = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    axios
      .get(`http://localhost:3040/users?page=${pageNumber}`)
      .then(({ data }) => {
        props.setUsers(data)
      })
  }

  return <Users users={props.users} follow={props.follow} unfollow={props.unfollow} setCurrentPage={props.setCurrentPage} onPageChange={onPageChange} currentPage={props.currentPage} />
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage
  }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage })(UsersContainer)
