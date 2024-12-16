import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, CircularProgress, Typography } from "@mui/material";
import { Filter, Country } from "../../components";
import { fetchAllCountries } from "../../api";
import { filterCountries } from "../../utils";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchAllCountries()
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const myFilteredCountries = filterCountries(
      countries,
      searchText,
      selectedRegion
    );
    setFilteredCountries(myFilteredCountries);
  }, [searchText, selectedRegion, countries]);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <Filter
            searchText={searchText}
            setSearchText={setSearchText}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />

          {filteredCountries.length ? (
            <Grid container spacing={5}>
              {filteredCountries.map((country: any) => (
                <Grid item key={country.cca3} xs={12} sm={6} md={3}>
                  <Link to={`/${country.cca3}`}>
                    <Country country={country} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography>No country found</Typography>
          )}
        </div>
      )}
    </>
  );
};
export default Home;
