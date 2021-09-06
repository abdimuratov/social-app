import { useEffect } from 'react'
import * as axios from 'axios'
import Profile from './Profile'
import { setProfile } from '../../state/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const ProfileContainer = (props) => {
  useEffect(() => {
    let id = props.match.params.id
    if (!id) {
      id = 2
    }
    axios
      .get(`http://localhost:3040/users/${id}`)
      .then(({ data }) => {
        props.setProfile(data)
      })
  }, [])

  return <Profile profile={props.profile} />
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let UrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setProfile })(UrlProfileContainer)
