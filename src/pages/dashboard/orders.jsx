import { Divider, Stack, Box, Typography, Button, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card } from "@mui/material";

function createData(orderId, customer, product, amount, status) {
  return { orderId, customer, product, amount, status };
}

const rows = [createData("#ORD-001", "John Doe", "Premium Package", "$299.00", "Completed"), createData("#ORD-002", "Emma Davis", "Basic Package", "$199.00", "Pending"), createData("#ORD-003", "Mark Johnson", "Standard Package", "$249.00", "Processing")];

const Orders = () => {
  return (
    <Card sx={{ height: "100%", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "7px" }}>
      <Typography variant="h6" gutterBottom sx={{ py: 1, px: 2, m: 0 }}>
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Typography variant="h6" gutterBottom>
            Received Orders
          </Typography>
          <Button variant="text" sx={{ p:0 }}>View All</Button>
        </Stack>
      </Typography>
      <Divider />
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ minWidth: 650, boxShadow: "none" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "17px" }}>Order ID</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "17px" }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "17px" }}>Product</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "17px" }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "17px" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.orderId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ fontWeight: "medium", fontSize: "17px" }}>
                  {row.orderId}
                </TableCell>
                <TableCell sx={{ fontSize: "17px" }}>{row.customer}</TableCell>
                <TableCell sx={{ fontWeight: "medium", color: "text.secondary", fontSize: "17px" }}>{row.product}</TableCell>
                <TableCell sx={{ fontWeight: "medium", fontSize: "17px" }}>{row.amount}</TableCell>
                <TableCell sx={{ color: row.status === "Completed" ? "green" : row.status === "Pending" ? "orange" : "red", fontWeight: "bold", py: "24px" }}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Orders;
