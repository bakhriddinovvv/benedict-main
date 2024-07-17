import { useState, useEffect } from "react";
import Header from "./components/Header";
import Meal from "./components/Meal";
import MealCategory from "./components/MealCategory";
import SearchMeal from "./components/SearchMeal";

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const showMealInfo = (meal) => {
    setSelectedMeal(meal);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const showCategoryInfo = (meal) => {
    setSelectedCategory(meal);
  };

  const [location, setLocation] = useState("Tashkent");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b3967e8af00a5057cd5900564fe3ee12&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          const pos = `${data.name} ${data.coord.lat.toFixed(
            1
          )}, ${data.coord.lon.toFixed(2)}`;

          setLocation(pos);
        })
        .catch((error) => console.error("Error fetching weather data:", error));
    },
    (error) => console.error("Error getting location:", error)
  );

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
  console.log(menuCategoryItems);
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className=''>
      <Header />
      <SearchMeal
        location={location}
        setLocation={setLocation}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <MealCategory
        menuCategoryItems={menuCategoryItems.data}
        showCategoryInfo={showCategoryInfo}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Meal
        mealCounts={mealCounts}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        menuCategoryItems={menuCategoryItems.data}
        showMealInfo={showMealInfo}
        setSelectedMeal={setSelectedMeal}
        selectedMeal={selectedMeal}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
