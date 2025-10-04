import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Dashboard from "@mui/icons-material/Dashboard";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsIcon from "@mui/icons-material/Settings";

const dashList = [
  {
    icon: <HomeIcon />,
    text: "Overview",
  },
  {
    icon: <BarChartIcon />,
    text: "Analytics",
  },
  {
    icon: <GroupIcon />,
    text: "Users",
  },
  {
    icon: <ShoppingCartIcon />,
    text: "Orders",
  },
  {
    icon: <Inventory2Icon />,
    text: "Products",
  },
  {
    icon: <SettingsIcon />,
    text: "Settings",
  },
];

const Sidbar = () => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar sx={{ backgroundColor: "info.main", borderRadius: "15%" }}>
                <Dashboard />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {dashList.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="aside" sx={{ backgroundColor: "white", height: "100vh", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
      {DrawerList}
    </Box>
  );
};

export default Sidbar;
