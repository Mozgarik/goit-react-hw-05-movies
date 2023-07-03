import { Box } from 'components/Box';
import { baseImgUrl } from 'components/NavDeclarations'
import PropTypes from 'prop-types';

export const ImageBox = ({ poster_path, alt, width, children }) => {
  const serverPath = baseImgUrl+width;
  const imgPath = serverPath + poster_path;
  return <Box>
    {poster_path ? <img src={imgPath} alt={alt} /> : children}
  </Box>
}

Notification.ImageBox =
PropTypes.shape({
  poster_path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  children:PropTypes.element.isRequired
})