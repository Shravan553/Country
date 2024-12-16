import React from "react";
import { Link } from "react-router-dom";
import { Paper, Grid, Typography, Stack } from "@mui/material";

const Border = ({ borders }: any) => {
  return (
    <Grid
      item
      xs={12}
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
        <span style={{ fontWeight: 600 }}>Border Countries:</span>
      </Typography>

      <Stack direction="row" flexWrap="wrap" ml={{ xs: 0, md: 1 }}>
        {borders.map((border: any) => (
          <Link to={`/${border}`} key={border}>
            <Paper
              key={border}
              variant="elevation"
              sx={{
                margin: "5px",
                padding: "8px 12px",
              }}
            >
              {border}
            </Paper>
          </Link>
        ))}
      </Stack>
    </Grid>
  );
};

export default Border;
