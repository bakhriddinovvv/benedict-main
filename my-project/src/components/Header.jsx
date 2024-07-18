import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <div>
      <div className='w-[95%] mx-auto mt-2'>
        <AppBar className='rounded-[10px]' position='static'>
          <Toolbar className=' mx-auto'>
            <Typography className='' variant='h6'>
              Welcome to the Benedict cafe
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <img
        className='w-[95%] mx-auto rounded-[15px] mt-4'
        src='https://robosell.ams3.digitaloceanspaces.com/robosell/banner/mobile/benedict.png'
        alt=''
      />
    </div>
  );
};

export default Header;
