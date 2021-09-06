const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

let initialState = {
  users: null,
  currentPage: 1
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: {
          ...state.users,
          data: state.users.data.map(user => {
            if (user.id === action.userId) {
              return { ...user, following: true }
            }
            return user
          })
        }
      }
    case UNFOLLOW:
      return {
        ...state,
        users: {
          ...state.users,
          data: state.users.data.map(user => {
            if (user.id === action.userId) {
              return { ...user, following: false }
            }
            return user
          })
        }
      }
    case SET_USERS:
      return {
        ...state, users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
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

export default usersReducer
