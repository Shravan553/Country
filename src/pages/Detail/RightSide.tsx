import React from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";

const RightSide = ({ countryDetail }: any) => {
  const currency = Object.keys(countryDetail.currencies);

  return (
    <Grid item xs={12} md={6}>
      <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
        <span style={{ fontWeight: 600 }}>Top Level Domain: </span>
        {countryDetail.tld}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
          <span style={{ fontWeight: 600 }}>Currencies: </span>
        </Typography>
        <Stack direction="row" flexWrap="wrap" ml={1}>
          <Typography mr={0.5}>
            {countryDetail.currencies[currency[0]].name}
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
          <span style={{ fontWeight: 600 }}>Languages:</span>
        </Typography>
        <Stack direction="row" flexWrap="wrap" ml={1}>
          {Object.values(countryDetail.languages)
            .sort()
            .map((lang: any, index) => (
              <Typography key={lang} mr={0.5}>
                {lang}
                {index !== Object.values(countryDetail.languages).length - 1 &&
                  ","}
              </Typography>
            ))}
        </Stack>
      </Box>
    </Grid>
  );
};

export default RightSide;
