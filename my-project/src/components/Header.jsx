import React from "react";

function Header() {
  return (
    <div>
      <div className='flex mt-4 w-[90%] items-center  mx-auto gap-8 text-[1.2rem] shadow-lg pb-4'>
        <p className='text-green-500 flex items-center justify-center text-[1.7rem] ml-6  font-bold'>
          Benedict
        </p>
      </div>

      <img
        src='https://robosell.ams3.digitaloceanspaces.com/robosell/banner/mobile/benedict.png '
        className='w-[90%] mx-auto mt-4 rounded-[10px]'
        alt=''
      />
    </div>
  );
}
export default Header;
