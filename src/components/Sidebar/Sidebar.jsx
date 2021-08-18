import './Sidebar.css'
import SidebarItem from './SidebarItem/SidebarItem'

const Sidebar = () => {
  const items = [
    {
      id: 1,
      url: '/profile',
      name: 'Profile'
    },
    {
      id: 2,
      url: '/conversations',
      name: 'Messenger'
    },
    {
      id: 3,
      url: '/users',
      name: 'Users'
    },
    {
      id: 4,
      url: '/news',
      name: 'News'
    },
    {
      id: 5,
      url: '/music',
      name: 'Music'
    },
    {
      id: 6,
      url: '/settings',
      name: 'Settings'
    }
  ] 

  const sidebarItemElement = items.map((item) => (
    <SidebarItem key={item.id} url={item.url} name={item.name} />
  ))
  
  return <nav className="sidebar">{sidebarItemElement}</nav>
}



export default Sidebar
