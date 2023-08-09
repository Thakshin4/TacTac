import homeIcon from './assets/home.png';
import exploreIcon from './assets/explore.png';
import profileIcon from './assets/profile.png';

const BottomNavBar = () => {
  return (
    <div className="bottom-navbar">
      <a href="/" className="nav-link">
        <img src={homeIcon} alt="Home" className="nav-icon" />
      </a>
      <a href="/explore" className="nav-link">
        <img src={exploreIcon} alt="Explore" className="nav-icon" />
      </a>
      <a href="/profile" className="nav-link">
        <img src={profileIcon} alt="Profile" className="nav-icon" />
      </a>
    </div>
  );
};

export default BottomNavBar;
