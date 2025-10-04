import { Box, Grid } from "@mui/material";
import Navbar from "../../layout/navbar";
import CardData from "../../components/UI/card-data";
import Orders from "./orders";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import PercentIcon from "@mui/icons-material/Percent";
import Container from "@mui/material/Container";
import Products from "./products";
import Activity from "./activity";
import Actions from "./actions";

const MainContent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, backgroundColor: "#eeeeee61" }}>
      <Container maxWidth="2xl">
      <Navbar />
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 6, lg: 3 }}>
            <CardData text="Total Revenus" number="$45,231" icon={<AttachMoneyIcon sx={{ bgcolor: "#ef9a9a", color: "#c62828", p: 1, borderRadius: "10px", fontSize: "1.5rem" }} />} />
          </Grid>
          <Grid size={{ xs: 6, md: 6, lg: 3 }}>
            <CardData text="New Orders" number="1,234" icon={<ShoppingCartIcon sx={{ bgcolor: "#90caf9", color: "#1565c0", p: 1, borderRadius: "10px", fontSize: "1.5rem" }} />} />
          </Grid>
          <Grid size={{ xs: 6, md: 6, lg: 3 }}>
            <CardData text="Action Users" number="8.456" icon={<GroupIcon sx={{ bgcolor: "#b39ddb", color: "#4527a0", p: 1, borderRadius: "10px", fontSize: "1.5rem" }} />} />
          </Grid>
          <Grid size={{ xs: 6, md: 6, lg: 3 }}>
            <CardData text="Conversion Rate" number="3.24%" icon={<PercentIcon sx={{ bgcolor: "#e6ee9c", color: "#9e9d24", p: 1, borderRadius: "10px", fontSize: "1.5rem" }} />} />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, md: 12, lg: 8 }}>
            <Orders />
          </Grid>
          <Grid size={{ xs: 12, md: 12, lg: 4 }}>
            <Products />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Activity />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Actions />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainContent;
