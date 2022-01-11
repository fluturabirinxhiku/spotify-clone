import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  OrderedList,
  ListItem,
  List,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  { label: "Home", icon: MdHome, route: "/" },
  { label: "Search", icon: MdSearch, route: "/search" },
  { label: "Your Library", icon: MdLibraryMusic, route: "/library" },
  { label: "Create Playlist", icon: MdPlaylistAdd, route: "/playlist/create" },
  { label: "Liked Songs", icon: MdFavorite, route: "/songs" },
];

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px ">
        <Box width="120px" marginBottom="20px" paddingLeft="20px">
          <NextImage src="/logo.svg" width={120} height={60} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menuItem) => (
              <ListItem paddingX="20px" fontSize="16px" key={menuItem.label}>
                <LinkBox>
                  <NextLink href={menuItem.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menuItem.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menuItem.label}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
