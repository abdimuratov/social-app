import './Profile.css'
import UserInfo from './UserInfo/UserInfo'
import Avatar from './Avatar/Avatar'
import PostsContainer from './Posts/PostsContainer'

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile_user">
        <Avatar />
        <UserInfo />
      </div>
      <PostsContainer />
    </div>
  )
}

export default Profile
