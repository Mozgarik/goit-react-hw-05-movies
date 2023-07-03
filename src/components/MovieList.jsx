import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const MovieList = ({ movies, title = "", route = "" }) => {
  const location = useLocation();
  return (
    <>
      <Box as="h1" mb={4} mt={4}>{title}</Box>
          <Box as="ul" pl={4}>
      {movies.map(({ id, title }) => {
        return (
          <Box key={id} as="li" p={2}>
            <NavLink to={route+id} state={location}>{title}</NavLink>
          </Box>
        );
      }, "")}
      </Box>
    </>
  );
};
Notification.MovieList = 
  PropTypes.shape({
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
})