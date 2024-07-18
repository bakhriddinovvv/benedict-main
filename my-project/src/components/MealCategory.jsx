import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const MealCategory = ({
  showCategoryInfo,
  selectedCategory,
  setSelectedCategory,
  menuCategoryItems,
}) => {
  const handleChange = (event) => {
    const categoryIndex = event.target.value;
    setSelectedCategory(categoryIndex);
    showCategoryInfo(categoryIndex);
  };

  return (
    <FormControl variant='outlined' fullWidth margin='normal'>
      <InputLabel id='category-select-label'>Category</InputLabel>
      <Select
        labelId='category-select-label'
        id='category-select'
        value={selectedCategory || ""}
        onChange={handleChange}
        label='Category'
      >
        <MenuItem value='all'>All Categories</MenuItem>
        {menuCategoryItems &&
          menuCategoryItems.map((item, index) => (
            <MenuItem key={index} value={index}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default MealCategory;
