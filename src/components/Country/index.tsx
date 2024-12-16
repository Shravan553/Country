import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { numberWithCommas } from "../../utils";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  paddingBottom: "2.5rem",
  //   textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Country = ({ country }: any) => {
  return (
    <Item>
      <img
        src={country.flags.png}
        alt={country.name.official}
        width="100%"
        height="200"
      />
      <Box ml={3}>
        <Typography variant="h3" my={3} sx={{ fontSize: 18, fontWeight: 800 }}>
          {country.name.common}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 14 }}>
          <b>Population:</b> {numberWithCommas(country.population)}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 14 }}>
          <b>Region:</b> {country.region}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 14 }}>
          <b>Capital:</b> {country.capital}
        </Typography>
      </Box>
    </Item>
  );
};

export default Country;
