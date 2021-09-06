import './UserInfo.css'

const UserInfo = (props) => {
  if (!props.profile) {
    return <div>OWAOWA</div>
  }
  
  return (
    <div className="profile-user-info">
      <div>
        <div className="profile-user-info-name">{props.profile.name}</div>
      </div>
      <div>
        <div className="profile-user-info-item">Date of birth: {props.profile.birthdate.day} {props.profile.birthdate.month}</div>
        <div className="profile-user-info-item">City: {props.profile.location.city}</div>
        <div className="profile-user-info-item">Education: {props.profile.education}</div>
        <div className="profile-user-info-item">
          E-mail: {props.profile.email}
        </div>
      </div>
    </div>
  )
}

export default UserInfo