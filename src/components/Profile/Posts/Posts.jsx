import React from 'react'
import styles from './Posts.module.css'
import m_styles from '../../css/Main.module.css'
import PostContent from './PostContent/PostContent'

const Posts = (props) => {
  let postsElement = props.posts.map((post) => (
    <PostContent key={post.id} id={post.id} name={post.name} message={post.message} likes={post.likes} />
  ))
  let newPostElement = React.createRef()

  const onAddPost = (e) => {
    e.preventDefault()
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div>
      <div className={styles.title}>My posts</div>
      <form className={styles.form} onSubmit={onAddPost}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          name="textarea"
          rows="6"
          maxLength="3000"
          required
          placeholder="Type what's in your mind..."
          value={props.newPostText}
        />
        <div className={styles.submit_post}>
          <div>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
              className={m_styles.upload_photo}
            />
            <label htmlFor="avatar">Choose a file</label>
          </div>
          <button type="submit" className={styles.btn}>
            Publish
          </button>
        </div>
      </form>
      {postsElement}
    </div>
  )
}

export default Posts
