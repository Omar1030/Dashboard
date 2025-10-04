import { Card, CardContent, Divider, Stack, Typography, Grid } from "@mui/material";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";

const actions = [
  {
    name: "Add Product",
    icon: <HeadphonesIcon />,
    color: "#e53935",
  },
  {
    name: "Add User",
    icon: <TabletAndroidIcon />,
    color: "#2196f3",
  },
  {
    name: "Generate Report",
    icon: <LaptopChromebookIcon />,
    color: "#512da8",
  },
  {
    name: "Send Email",
    icon: <MobileFriendlyIcon />,
    color: "#f57c00",
  },
];

const Actions = () => {
  return (
    <Card sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "7px", height: "100%" }}>
      <Typography variant="h6" gutterBottom sx={{ py: 1, px: 2, m: 0 }}>
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Typography variant="h6" gutterBottom>
            Quick Actions
          </Typography>
        </Stack>
      </Typography>
      <Divider />
      <Grid container spacing={2} sx={{ py: 2, px: 5 }}>
        {actions.map((action, index) => (
          <Grid size={{ xs: 6 }} key={index}>
            <Card sx={{ py: 0.5, boxShadow: "none", borderRadius: "7px", backgroundColor: action.color, color: "white" }}>
              <CardContent>
                <Stack direction="column" spacing={2} alignItems="center">
                  {action.icon}
                  <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {action.name}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Actions;
