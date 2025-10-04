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
import CheckIcon from '@mui/icons-material/Check';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import PaymentIcon from '@mui/icons-material/Payment';
const activity = [
  {
    name: "Order #ORD-001",
    date: "Customer: John Doe",
    icon: <CheckIcon />,
    bgColor: "#ef9a9a",
    color: "#b71c1c"
  },
  {
    name: "Order #ORD-002",
    date: "Customer: Emma Davis",
    icon: <PersonAddAltIcon />,
    bgColor: "#b39ddb",
    color: "#311b92"
  },
  {
    name: "Order #ORD-003",
    date: "Customer: Mark Johnson",
    icon: <ReportProblemIcon />,
    bgColor: "#a5d6a7",
    color: "#1b5e20"
  },
  {
    name: "Order #ORD-004",
    date: "Customer: Sara Wilson",
    icon: <PaymentIcon />,
    bgColor: "#90caf9",
    color: "#0d47a1"
  },
];

const Activity = () => {
  return (
    <Card sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "7px", height: "100%" }}>
      <Typography variant="h6" gutterBottom sx={{ py: 1, px: 2, m: 0 }}>
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
        </Stack>
      </Typography>
      <Divider />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {activity.map((activity) => (
          <ListItem key={activity.name} sx={{ py: 0.5 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: activity.bgColor, color: activity.color }}>{activity.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={activity.name} secondary={activity.date} sx={{ fontWeight: "medium" }} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Activity;
