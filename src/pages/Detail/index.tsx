import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Grid, Button, Typography, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { fetchSingleCountry, fetchBorderCountries } from "../../api";
import DisplayBorders from "./DisplayBorders";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Detail = () => {
  const { code } = useParams();
  const [countryDetail, setCountryDetail] = useState<any>(null);
  const [borderedCountries, setBorderedCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleCountry(code || "")
      .then((data) => {
        setCountryDetail(data[0]);
        return data;
      })
      .then((data) => {
        fetchBorderCountries(data[0].borders).then((data) =>
          setBorderedCountries(data.map((item: any) => item.name.common))
        );
      })
      .finally(() => setIsLoading(false));
  }, [code]);

  return (
    <Box
      sx={{
        margin: "1rem",
        height: "100%",
      }}
      style={{ paddingBlock: "2rem" }}
    >
      <Link to="/">
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          style={{
            marginBottom: "2rem",
            padding: ".5rem 2rem",
            textTransform: "capitalize",
          }}
        >
          Back
        </Button>
      </Link>
      {isLoading ? (
        <Box sx={{ width: "100%" }}>
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Grid container spacing={8} alignItems="center">
          {!countryDetail ? (
            <Typography variant="body1">No country found</Typography>
          ) : (
            <>
              <Grid item xs={12} md={6}>
                <img
                  src={countryDetail.flags.png}
                  alt={countryDetail.name.common}
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h2"
                      sx={{ fontSize: 30, fontWeight: 800 }}
                    >
                      {countryDetail.name.common}
                    </Typography>
                  </Grid>
                  <LeftSide countryDetail={countryDetail} />
                  <RightSide countryDetail={countryDetail} />

                  {!!borderedCountries.length && (
                    <DisplayBorders borders={borderedCountries.sort()} />
                  )}
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Detail;
