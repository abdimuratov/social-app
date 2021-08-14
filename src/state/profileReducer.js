const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
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
    default:
      return state
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer
