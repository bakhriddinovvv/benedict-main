import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Phone = (props) => {
  return (
    <div
      className={`fixed overflow-y-scroll bottom-0 right-0 rounded-[20px] w-full h-[28%] bg-gray-200 text-white transform transition-transform `}
    >
      <form id='myForm' className='flex flex-col w-[90%] mx-auto mt-4 gap-4'>
        <TextField label='Your family, name' variant='outlined' required />
        <TextField label='Phone number' variant='outlined' required />
        <Button type='submit' variant='contained' color='success'>
          Success
        </Button>
      </form>
    </div>
  );
};

export default Phone;
z;
