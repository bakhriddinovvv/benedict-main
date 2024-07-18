import { useState, useEffect } from "react";
import Header from "./components/Header";
import Meal from "./components/Meal";
import MealCategory from "./components/MealCategory";
import SearchMeal from "./components/SearchMeal";
import { Container, Box } from "@mui/material";

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const showMealInfo = (meal) => {
    setSelectedMeal(meal);
  };

  const [selectedCategory, setSelectedCategory] = useState("all");
  const showCategoryInfo = (categoryIndex) => {
    setSelectedCategory(categoryIndex);
  };

  const [menuCategoryItems, setMenuCategoryItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          "https://order.smartmobile.uz/mostbyte/api/v1/menu/public"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenuCategoryItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [mealCounts, setMealCounts] = useState({});

  const incrementCount = (mealId) => {
    setMealCounts((prevCounts) => ({
      ...prevCounts,
      [mealId]: (prevCounts[mealId] || 0) + 1,
    }));
  };

  const decrementCount = (mealId) => {
    setMealCounts((prevCounts) => ({
      ...prevCounts,
      [mealId]: prevCounts[mealId] > 0 ? prevCounts[mealId] - 1 : 0,
    }));
  };

  return (
    <div className='sm:w-[70%] mx-auto'>
      <Header />
      <Container>
        <Box mt={4}>
          <MealCategory
            menuCategoryItems={menuCategoryItems.data}
            showCategoryInfo={showCategoryInfo}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>
        <Box mt={4}>
          <SearchMeal
            searchTerm={searchQuery}
            handleSearchChange={handleSearchChange}
          />
        </Box>

        <Box mt={4}>
          <Meal
            mealCounts={mealCounts}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            menuCategoryItems={menuCategoryItems.data}
            showMealInfo={showMealInfo}
            setSelectedMeal={setSelectedMeal}
            selectedMeal={selectedMeal}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
        </Box>
      </Container>
    </div>
  );
}

export default App;
