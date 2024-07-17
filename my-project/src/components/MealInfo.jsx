import React from "react";
import { MdOutlineClose } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";

function MealInfo({
  selectedMeal,
  setSelectedMeal,
  mealCounts,
  incrementCount,
  decrementCount,
}) {
  const mealId = selectedMeal.product.id;
  const count = mealCounts[mealId] || 0;

  return (
    <div>
      <button className='absolute bg-gray-200 rounded-full text-black text-[1.5rem] top-4 left-4'>
        <MdOutlineClose
          onClick={() => {
            setSelectedMeal(false);
          }}
        />
      </button>
      <img
        className='w-full h-[28vh]'
        src={selectedMeal.product.image}
        alt=''
      />
      <p className='pl-4 text-[1.5rem] text-white font-[500] pt-4'>
        {selectedMeal.product.name}
      </p>
      <p className='text-[1.2rem] pl-4 pt-2 text-gray-300 font-[500]'>
        {selectedMeal.product.price}, 000 UZS
      </p>
      <div className='flex items-center gap-8'>
        <div className='flex items-center h-full w-[14rem] border border-white bg-gray-500 p-1 gap-8 mt-4 ml-4'>
          <Button
            style={{
              backgroundColor: "red",
            }}
            variant='contained'
            onClick={() => decrementCount(mealId)}
          >
            -
          </Button>
          <p className='text-white text-[1.2rem]'>{count}</p>
          <Button
            style={{
              backgroundColor: "green",
            }}
            variant='contained'
            onClick={() => incrementCount(mealId)}
          >
            +
          </Button>
        </div>
        <IconButton
          style={{
            padding: "0.8rem",
            marginTop: "1rem",
            backgroundColor: "yellow",
          }}
          color='primary'
          aria-label='add to shopping cart'
        >
          <AddShoppingCartIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default MealInfo;
