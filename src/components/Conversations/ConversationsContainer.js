import Conversations from './Conversations'
import {
  sendMessage,
  updateNewMessageText,
} from '../../state/conversationsReducer'
import { connect } from 'react-redux'

let mapStateToPops = (state) => {
  return {
    dialogs: state.conversationsPage.dialogs,
    chats: state.conversationsPage.chats,
    newMessageText: state.conversationsPage.newMessageText,
  }
}

const ConversationsContainer = connect(
  mapStateToPops,
  { sendMessage, updateNewMessageText }
)(Conversations)

export default ConversationsContainer
