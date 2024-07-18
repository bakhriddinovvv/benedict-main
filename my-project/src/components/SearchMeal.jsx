import React from "react";
import { TextField } from "@mui/material";

const SearchMeal = ({ searchTerm, handleSearchChange }) => {
  return (
    <TextField
      fullWidth
      label='Search Food'
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchMeal;
