import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Box } from 'components/Box';
import { navMovieItems } from 'components/NavDeclarations';

export const MovieDetailsNav = () => {
  const location = useLocation();
  return (
      <Box as="ul" pl={4} borderBottom={"1px solid black"}>
      {navMovieItems.map(({ href, text }) => (
          <Box key={href} as="li" p={2}>
          <NavLink to={href} state={location.state}>{text}</NavLink>
          </Box>
        ))}
    </Box>
  );
};