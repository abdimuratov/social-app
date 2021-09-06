const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET-PROFILE'

let initialState = {
  profile: null,
  posts: [
    {
      id: 1,
      name: 'Abylkaiyr Abdimurat',
      message: 'Henllo, this is my first post! Welcome everyone!',
      likes: '4'
    }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText }
    case ADD_POST:
      let newPost = {
        id: 2,
        name: 'Abdimurat Abylkaiyr',
        message: state.newPostText,
        likes: '0'
      }
      return {
        ...state,
        newPostText: '',
        posts: [newPost, ...state.posts]
      }
    case SET_PROFILE:
      return {
        ...state, profile: action.profile
      }
    default:
      return state
  }
}

export const addPost = () => ({
  type: ADD_POST
})

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
})

export const setProfile = (profile) => ({
  type: SET_PROFILE, profile
})

export default profileReducer
