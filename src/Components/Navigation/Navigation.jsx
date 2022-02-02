import { NavLink } from 'react-router-dom';
import { NavList, NavListItem } from './Navigation.styled';

const linkStyles = {
  based: {
    color: 'black',
  },
  active: {
    color: 'rgb(0, 0, 238)',
  },
};

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <NavLink
            style={linkStyles.based}
            activeStyle={linkStyles.active}
            to="/"
          >
            Home
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink
            style={linkStyles.based}
            activeStyle={linkStyles.active}
            to="/movies"
          >
            Movies
          </NavLink>
        </NavListItem>
      </NavList>
    </nav>
  );
};

export default Navigation;
