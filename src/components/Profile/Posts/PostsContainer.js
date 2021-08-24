import Posts from './Posts'
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from '../../../state/profileReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text))
    },
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
