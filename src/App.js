import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import ConversationsContainer from './components/Conversations/ConversationsContainer'
import UsersContainer from './components/Users/UsersContainer'
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="body_section">
        <Sidebar />
        <div className="body_container">
          <Route path="/profile/" render={() => <Profile />} />
          <Route path="/conversations" render={() => <ConversationsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </div>
  )
}

export default App
