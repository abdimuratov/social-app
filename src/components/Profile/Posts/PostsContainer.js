import Posts from './Posts'
import {
  addPost,
  updateNewPostText,
} from '../../../state/profileReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const PostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(Posts)

export default PostsContainer
