import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Про мене</Link></li>
        <li><Link to="/my-city">Моє місто</Link></li>
        <li><Link to="/my-future">Мій розвиток</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
