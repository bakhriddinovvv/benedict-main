import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Fab from "@mui/material/Fab";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";

function Meal({
  mealCounts,
  incrementCount,
  decrementCount,
  menuCategoryItems,
  searchQuery,
  selectedCategory,
}) {
  const [showCounters, setShowCounters] = useState({});

  const handleAddClick = (mealId) => {
    setShowCounters((prev) => ({ ...prev, [mealId]: true }));
    incrementCount(mealId);
  };

  const handleIncrement = (mealId) => {
    incrementCount(mealId);
    const selectedMeal = findMealById(mealId);
    if (selectedMeal) {
      console.log(
        `Incremented price for meal ${selectedMeal.product.name}: ${selectedMeal.product.price}`
      );
    }
  };

  const handleDecrement = (mealId) => {
    decrementCount(mealId);
    if (mealCounts[mealId] === 1) {
      setShowCounters((prev) => ({ ...prev, [mealId]: false }));
    }
  };

  const findMealById = (mealId) => {
    for (let categoryItem of menuCategoryItems) {
      const meal = categoryItem.menus.find(
        (item) => item.product.id === mealId
      );
      if (meal) {
        return meal;
      }
    }
    return null;
  };
  const filteredMeals =
    selectedCategory === "all"
      ? menuCategoryItems?.flatMap((categoryItem) =>
          categoryItem.menus.filter((mealItem) =>
            mealItem.product.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
        )
      : menuCategoryItems &&
        selectedCategory !== null &&
        menuCategoryItems[selectedCategory]?.menus.filter((mealItem) =>
          mealItem.product.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );

  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center' mt={4}>
      {filteredMeals &&
        filteredMeals.map((mealItem, mealIndex) => {
          const mealId = mealItem.product.id;
          const count = mealCounts[mealId] || 0;

          return (
            <Card
              key={mealIndex}
              sx={{
                width: 300,
                m: 2,
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component='img'
                image={mealItem.product.image}
                alt={mealItem.product.name}
                style={{ width: "100%", height: "12rem" }}
              />
              <CardContent>
                <Typography variant='h6' component='div' color='textPrimary'>
                  {mealItem.product.name}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {mealItem.product.price} 000 sum
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "flex-end",
                  pr: 2,
                  pb: 2,
                }}
              >
                {showCounters[mealId] ? (
                  <>
                    <Fab
                      size='small'
                      color='primary'
                      aria-label='remove'
                      onClick={() => handleDecrement(mealId)}
                      sx={{
                        backgroundColor: "#ff6a25",
                        "&:hover": {
                          backgroundColor: "#ff8a50",
                        },
                      }}
                    >
                      <RemoveIcon />
                    </Fab>
                    <Typography
                      variant='h6'
                      component='span'
                      sx={{ mx: 2, display: "flex", alignItems: "center" }}
                    >
                      {count}
                    </Typography>
                    <Fab
                      size='small'
                      color='primary'
                      aria-label='add'
                      onClick={() => handleIncrement(mealId)}
                      sx={{
                        backgroundColor: "#ff6a25",
                        "&:hover": {
                          backgroundColor: "#ff8a50",
                        },
                      }}
                    >
                      <AddIcon />
                    </Fab>
                  </>
                ) : (
                  <Fab
                    size='small'
                    color='primary'
                    aria-label='add'
                    onClick={() => {
                      handleAddClick(mealId);
                    }}
                    sx={{
                      backgroundColor: "#ff6a25",
                      "&:hover": {
                        backgroundColor: "#ff8a50",
                      },
                    }}
                  >
                    <AddIcon />
                  </Fab>
                )}
              </CardActions>
            </Card>
          );
        })}
    </Box>
  );
}

export default Meal;
