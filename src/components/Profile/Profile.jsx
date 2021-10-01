import './Profile.css'
import UserInfo from './UserInfo/UserInfo'
import Avatar from './Avatar/Avatar'
import PostsContainer from './Posts/PostsContainer'

const Profile = (props) => {
  if(!props.profile) {
    return <div>Something went wrong...</div>
  }
  return (
    <div className="profile">
      <div className="profile-user">
        <Avatar avatarUrl={props.profile.photos.small} />
        <UserInfo profile={props.profile} />
      </div>
      <PostsContainer />
    </div>
  )
}

export default Profile
