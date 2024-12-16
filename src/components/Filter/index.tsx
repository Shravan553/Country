import React from "react";
import { MenuItem, Paper, InputBase, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface IProps {
  searchText: string;
  selectedRegion: string;
  setSearchText: (value: string) => void;
  setSelectedRegion: (value: string) => void;
}

const Filter = ({
  searchText,
  setSearchText,
  selectedRegion,
  setSelectedRegion,
}: IProps) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <Stack
      my={4}
      spacing={3}
      justifyContent={{ xs: "flex-start", md: "space-between" }}
      alignItems={{ xs: "flex-start", md: "center" }}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Paper
        component="form"
        sx={{
          p: "0 .5rem",
          display: "flex",
          alignItems: "center",
          width: 500,
          height: 50,
          maxWidth: "100%",
        }}
      >
        <SearchIcon style={{ color: "#aaa", marginInline: "1rem" }} />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for a country..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Paper>

      <TextField
        sx={{ width: 200, height: 50 }}
        id="filter-region"
        select
        label="Filter By Region"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        margin="none"
      >
        <MenuItem value="">All</MenuItem>
        {regions.map((region) => (
          <MenuItem key={region} value={region}>
            {region}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
};

export default Filter;
