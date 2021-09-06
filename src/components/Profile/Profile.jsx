import './Profile.css'
import UserInfo from './UserInfo/UserInfo'
import Avatar from './Avatar/Avatar'
import PostsContainer from './Posts/PostsContainer'

const Profile = (props) => {
  if(!props.profile) {
    return <div>HOYA</div>
  }
  return (
    <div className="profile">
      <div className="profile_user">
        <Avatar avatarUrl={props.profile.avatarUrl} />
        <UserInfo profile={props.profile} />
      </div>
      <PostsContainer />
    </div>
  )
}

export default Profile
