import Users from './Users'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers
} from '../../state/usersReducer'

const UsersContainer = (props) => {
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.usersPerPage}`)
      .then(({ data }) => {
        props.setUsers(data.items)
        props.setTotalUsers(data.totalCount)
      })
  }, [])

  let onPageChange = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.usersPerPage}`)
      .then(({ data }) => {
        props.setUsers(data.items)
      })
  }

  let pagesCounter = Math.ceil(props.totalUsers / props.usersPerPage)
  let firstPage = 1
  let lastPage = 1
  
  if (props.currentPage > 3 && props.currentPage < pagesCounter - 3) {
    firstPage = props.currentPage - 2
    lastPage = props.currentPage + 2
  } else if (props.currentPage === 1) {
    lastPage = props.currentPage + 4
  } else if (props.currentPage === 2) {
    firstPage = props.currentPage - 1
    lastPage = props.currentPage + 3
  } else if (props.currentPage === 3) {
    firstPage = props.currentPage - 2
    lastPage = props.currentPage + 2
  }

  let pages = []
  for (let i = firstPage; i <= lastPage; i++) {
    pages.push(i)
  }

  return <Users
    users={props.users}
    follow={props.follow}
    unfollow={props.unfollow}
    pages={pages}
    onPageChange={onPageChange}
    totalUsers={props.totalUsers}
    pagesCount={props.pagesCount}
    setCurrentPage={props.setCurrentPage}
    currentPage={props.currentPage} />
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersPerPage: state.usersPage.usersPerPage,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage
  }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsers })(UsersContainer)
