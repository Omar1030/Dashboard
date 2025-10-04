import { Stack } from "@mui/material";
import Sidebar from "../../layout/sidbar";
import MainContent from "./main-content";

const Dashboard = () => {
  return (
    <section>
      <Stack direction="row" spacing={0}>
        <Sidebar />
        <MainContent />
      </Stack>
    </section>
  );
};

export default Dashboard;
