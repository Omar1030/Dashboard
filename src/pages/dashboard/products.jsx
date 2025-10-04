import { Card, Divider, Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";

const products = [
  {
    name: "Headphones",
    date: "Jan 9, 2014",
    icon: <HeadphonesIcon />,
    color: "#e53935",
  },
  {
    name: "Tablet",
    date: "Jan 7, 2014",
    icon: <TabletAndroidIcon />,
    color: "#2196f3",
  },
  {
    name: "Laptop",
    date: "July 20, 2014",
    icon: <LaptopChromebookIcon />,
    color: "#512da8",
  },
  {
    name: "Mobile",
    date: "July 20, 2014",
    icon: <MobileFriendlyIcon />,
    color: "#f57c00",
  },
];

const Products = () => {
  return (
    <Card sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "7px", height: "100%" }}>
      <Typography variant="h6" gutterBottom sx={{ py: 1, px: 2, m: 0 }}>
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Typography variant="h6" gutterBottom>
            Top Products
          </Typography>
        </Stack>
      </Typography>
      <Divider />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {products.map((product) => (
          <ListItem key={product.name} sx={{py: 0.5}}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: product.color }}>{product.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={product.name} secondary={product.date} sx={{ fontWeight: "medium" }} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Products;
