import React from "react";
import { Button } from "@mui/material";
import MealInfo from "./MealInfo";

function Meal({
  showMealInfo,
  selectedMeal,
  setSelectedMeal,
  menuCategoryItems,
  searchQuery,
  mealCounts,
  incrementCount,
  decrementCount,
}) {
  return (
    <>
      {menuCategoryItems &&
        menuCategoryItems.map((categoryItem, categoryIndex) => {
          return (
            <div
              key={categoryIndex}
              className='w-[90%] mx-auto flex overflow-x-scroll gap-10 mt-6'
            >
              {categoryItem &&
                categoryItem.menus
                  .filter((mealItem) =>
                    mealItem.product.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((mealItem, mealIndex) => {
                    return (
                      <div
                        key={mealIndex}
                        className='rounded-[15px] overflow-hidden shadow-xl flex-shrink-0 mb-8'
                      >
                        <img
                          onClick={() => showMealInfo(mealItem)}
                          className='h-[5rem] w-[10rem]'
                          src={mealItem.product.image}
                          alt=''
                        />
                        <p className='text-[1.5rem] font-[700] ml-4 mt-2 mb-2'>
                          {mealItem.product.name}
                        </p>
                        <p className='ml-3'>{mealItem.star} </p>
                        <div className='py-6 text-center'>
                          <Button
                            variant='contained'
                            onClick={() => showMealInfo(mealItem)}
                          >
                            {mealItem.product.price},000 UZS
                          </Button>
                        </div>
                      </div>
                    );
                  })}
            </div>
          );
        })}
      <div
        className={`fixed overflow-y-scroll bottom-0 right-0 rounded-[20px] w-full h-[50%] bg-gray-500 text-white transform duration-200 transition-transform  ${
          selectedMeal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {selectedMeal && (
          <MealInfo
            mealCounts={mealCounts}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            selectedMeal={selectedMeal}
            setSelectedMeal={setSelectedMeal}
          />
        )}
      </div>
    </>
  );
}

export default Meal;
