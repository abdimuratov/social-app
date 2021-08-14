import './Sidebar.css'
import SidebarItem from './SidebarItem/SidebarItem'

const Sidebar = () => {
  const items = [
    {
      url: '/profile',
      name: 'Profile'
    },
    {
      url: '/conversations',
      name: 'Messenger'
    },
    {
      url: '/users',
      name: 'Users'
    },
    {
      url: '/news',
      name: 'News'
    },
    {
      url: '/music',
      name: 'Music'
    },
    {
      url: '/settings',
      name: 'Settings'
    }
  ] 

  const sidebarItemElement = items.map((item) => (
    <SidebarItem url={item.url} name={item.name} />
  ))
  
  return <nav className="sidebar">{sidebarItemElement}</nav>
}



export default Sidebar
