import { Box } from 'components/Box';
import { NavItem } from 'components/NavItem';
import { navItems } from 'components/NavDeclarations';

export const NavBar = () => {
  return (
    <Box as="header" p={4} borderBottom={"1px solid black"}>
      <Box as="nav" display="flex">
        {navItems.map(({ href, text}) => (
          <NavItem to={href} key={href}>{text}</NavItem>
        ))}
      </Box>
    </Box>
  );
};
