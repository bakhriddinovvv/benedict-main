import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CategoryInfo = ({
  selectedCategory,
  setSelectedCategory,
  menuCategoryItems,
}) => {
  const item = menuCategoryItems[selectedCategory];
  const initialCounts = item.menus.reduce((acc, _, index) => {
    acc[index] = 0;
    return acc;
  }, {});

  const [counts, setCounts] = useState(initialCounts);

  const increment = (index) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [index]: prevCounts[index] + 1,
    }));
  };

  const decrement = (index) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [index]: prevCounts[index] > 0 ? prevCounts[index] - 1 : 0,
    }));
  };

  return (
    <div>
      <button
        onClick={() => {
          setSelectedCategory(null);
        }}
        className='absolute bg-gray-200 rounded-full text-black text-[1.5rem] top-4 left-4'
      >
        <MdOutlineClose />
      </button>
      <div className='pt-14 pl-4'>
        <h1 className='text-[1.5rem] pl-[7%] text-gray-100 font-bold'>
          {menuCategoryItems && item.name}
        </h1>
        <div className='w-[90%] mx-auto flex overflow-x-scroll gap-10 mt-6'>
          {item.menus.map((item, index) => (
            <div
              key={index}
              className='rounded-[15px] w-[80%] h-[80%] bg-gray-500 overflow-hidden shadow-xl flex-shrink-0 mb-8'
            >
              <img
                className='h-[10rem]  w-full'
                src={item.product.image}
                alt={item.name}
              />
              <p className='text-[1.5rem] font-[700] ml-4'>
                {item.product.name}
              </p>
              <p className='ml-4 font-bold text-[1.1rem] mb-1'>
                {item.product.price},000UZS
              </p>

              <div className='flex items-center gap-6 mb-2'>
                <div className='flex items-center h-full w-[9rem] border border-white bg-gray-500 p-1 gap-4 ml-4'>
                  <Button
                    onClick={() => decrement(index)}
                    style={{
                      backgroundColor: "red",

                      minWidth: "2.5rem",
                    }}
                    variant='contained'
                  >
                    -
                  </Button>
                  <p className='text-white text-[1.2rem]'>{counts[index]}</p>
                  <Button
                    onClick={() => increment(index)}
                    style={{
                      minWidth: "2.5rem",
                      backgroundColor: "green",
                    }}
                    variant='contained'
                  >
                    +
                  </Button>
                </div>
                <IconButton
                  style={{
                    padding: "0.8rem",
                    backgroundColor: "yellow",
                  }}
                  color='primary'
                  aria-label='add to shopping cart'
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryInfo;
