export interface HeaderProps {
  prop: string
}
import './header.css';
import logo from '../assets/logo-text.png'
const Header = () => {

  return (
    <div className='header-container'>
      <div className="logo-area">
        <img src={logo} />
      </div>
      <nav className='menu-area'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="sign-up">
        <button className="btn">Sign In</button>
        <button className="btn-primary">Sign Up </button>
      </div>
    </div>
  )
}

export default Header;