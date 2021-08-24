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

export const followActionCreator = (userId) => ({
  type: FOLLOW, userId
})

export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW, userId
})

export const setUsersActionCreator = (users) => ({
  type: SET_USERS, users
})
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE, currentPage
})

export default usersReducer

// {
//   id: 1,
//   avatarUrl:
//     'data:image/jpeg;base64,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',
//   name: 'Нурлан Сабуров',
//   status: '123',
//   location: {
//     city: 'Stepnogorsk', country: 'Kazakhstan'
//   },
//   followed: false
// },
// {
//   id: 2,
//   avatarUrl: 'https://teach-in.ru/img/hd/lecturer/konyaev.jpg?20',
//   name: 'Андрей Коняев',
//   status: '321',
//   location: {
//     city: 'Tambov', country: 'Russia'
//   },
//   followed: false
// },
// {
//   id: 3,
//   avatarUrl:
//     'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/aa9514cf-7a23-4147-88be-d4534a4a4fe1/360',
//   name: 'Тимур Каргинов',
//   status: '213',
//   location: {
//     city: 'Vladikavkaz', country: 'Republic of North Ossetia-Alania'
//   },
//   followed: false
// },
