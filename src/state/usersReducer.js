const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'

let initialState = {
  users: null,
  usersPerPage: 5,
  totalUsers: 0,
  currentPage: 1
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      }
    case SET_USERS:
      return {
        ...state, users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }
    case SET_TOTAL_USERS:
      return {
        ...state, totalUsers: action.totalUsers
      }
    default:
      return state
  }
}

export const follow = (userId) => ({
  type: FOLLOW, userId
})

export const unfollow = (userId) => ({
  type: UNFOLLOW, userId
})

export const setUsers = (users) => ({
  type: SET_USERS, users
})

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE, currentPage
})

export const setTotalUsers = (totalUsers) => ({
  type: SET_TOTAL_USERS, totalUsers
})

export default usersReducer
