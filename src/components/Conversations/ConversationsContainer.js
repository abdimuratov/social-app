import Conversations from './Conversations'
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../state/conversationsReducer'
import { connect } from 'react-redux'

let mapStateToPops = (state) => {
  return {
    dialogs: state.conversationsPage.dialogs,
    chats: state.conversationsPage.chats,
    newMessageText: state.conversationsPage.newMessageText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageActionCreator(text))
    },
  }
}

const ConversationsContainer = connect(
  mapStateToPops,
  mapDispatchToProps
)(Conversations)

export default ConversationsContainer
