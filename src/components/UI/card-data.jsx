import { Card, CardContent, Typography, Stack } from "@mui/material";

const CardData = ({ text, number, icon }) => {
  return (
    <Card sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "7px" }}>
      <CardContent>
        <Typography variant="subtitle1" component="span" sx={{ fontWeight: "bold", fontSize: "1rem", color: "text.secondary" }}>
          {text}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "2rem" }}>
            {number}
          </Typography>
          {icon}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardData;
