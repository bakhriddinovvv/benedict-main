import React, { useState } from "react";

import CategoryInfo from "./CategoryInfo";

const MealCategory = ({
  showCategoryInfo,
  selectedCategory,
  setSelectedCategory,
  menuCategoryItems,
}) => {
  return (
    <>
      <div className='flex overflow-x-scroll mt-6 w-[90%] mx-auto mb-4'>
        {menuCategoryItems &&
          menuCategoryItems.map((item, index) => {
            return (
              <div
                onClick={() => showCategoryInfo(index)} // Pass the index here
                key={index}
                className='w-32 h-32 p-2 flex-shrink-0 mb-4'
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-[75%] mx-auto h-[75%] p-3 rounded-full object-cover bg-gray-300'
                />
                <p className='mt-2 text-center'>{item.name}</p>
              </div>
            );
          })}
      </div>
      <div
        className={`fixed z-10 overflow-y-scroll bottom-0 right-0 rounded-[20px] w-full h-[50%] bg-gray-700 text-white transform duration-200 transition-transform ${
          selectedCategory !== null ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {selectedCategory !== null && (
          <CategoryInfo
            menuCategoryItems={menuCategoryItems}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      </div>
    </>
  );
};

export default MealCategory;
