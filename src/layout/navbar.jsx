import { Container, Stack, Typography, Box, Avatar, createTheme, ThemeProvider } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const navbarTheme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
        },
      },
    },
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={navbarTheme}>
      <Box component="nav" sx={{ backgroundColor: "white", py: 2, borderRadius: "7px", boxShadow: "0px 5px 6px 0px rgba(0, 0, 0, 0.1)", mb: 2 }}>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box component="article">
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 0.5 }}>
                Dashboard Overview
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ fontWeight: "medium", color: "#666" }}>
                Welcome Back, here you can manage your website.
              </Typography>
            </Box>
            <Box component="article">
              <List>
                <ListItem>
                  <NotificationsIcon />
                </ListItem>
                <ListItem>
                  <SearchIcon />
                </ListItem>
                <ListItem>
                  <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: "30px", height: "30px" }} />
                    <Typography variant="body2" gutterBottom sx={{ width: "100px" }}>
                      Will Smith
                    </Typography>
                  </Stack>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
