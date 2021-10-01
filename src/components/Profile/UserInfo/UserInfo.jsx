import './UserInfo.css'

const UserInfo = (props) => {
  const { profile } = props

  if (!profile) {
    return <div>Something went wrong...</div>
  }

  return (
    <div className="profile-user-info">
      <div className="profile-user-info-leftCard">
        <div className="profile-user-info-name"> {profile.fullName} </div>
        <div>
          <div className="profile-user-info-item">
            Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}
          </div>
          <div className="profile-user-info-item">
            {profile.lookingForAJobDescription}
          </div>
          <div className="profile-user-info-item">E-mail: {profile.email}</div>
        </div>
      </div>
      <div className="profile-user-info-rightCard">
        <strong>Contacts:</strong>
        <a href={profile.contacts.github} target="_blank">
          github
        </a>
        <a href={profile.contacts.vk} target="_blank">
          vk
        </a>
        <a href={profile.contacts.facebook} target="_blank">
          facebook
        </a>
        <a href={profile.contacts.instagram} target="_blank">
          instagram
        </a>
        <a href={profile.contacts.twitter} target="_blank">
          twitter
        </a>
        <a href={profile.contacts.website} target="_blank">
          website
        </a>
        <a href={profile.contacts.youtube} target="_blank">
          youtube
        </a>
      </div>
    </div>
  )
}

export default UserInfo
