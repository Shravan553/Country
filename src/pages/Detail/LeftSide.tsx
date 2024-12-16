import React from "react";
import { Grid, Typography } from "@mui/material";
import { numberWithCommas } from "../../utils";

const LeftSide = ({ countryDetail }: any) => {
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
        <span style={{ fontWeight: 600 }}>Native Name: </span>
        {
          countryDetail.name.nativeName[
            Object.keys(countryDetail.name.nativeName)[0]
          ].common
        }
      </Typography>
      <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
        <span style={{ fontWeight: 600 }}>Population: </span>
        {numberWithCommas(countryDetail.population)}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
        <span style={{ fontWeight: 600 }}>Region: </span>
        {countryDetail.region}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
        <span style={{ fontWeight: 600 }}>Sub Region: </span>
        {countryDetail.subregion}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
        <span style={{ fontWeight: 600 }}>Capital: </span>
        {countryDetail.capital}
      </Typography>
    </Grid>
  );
};

export default LeftSide;
