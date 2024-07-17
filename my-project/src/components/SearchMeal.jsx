import { CiLocationOn } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const SearchMeal = ({ location, searchQuery, setSearchQuery }) => {
  return (
    <div className='mt-6 flex w-[90%] mx-auto border border-gray-500 py-4 rounded-full'>
      <div className='relative w-[85%] flex justify-evenly'>
        <div className='w-[100%]'>
          <input
            className='absolute w-[30%] text-[1.1rem] focus:outline-none top-0 left-16'
            placeholder='Restaurants'
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='absolute text-[1.6rem] text-gray-600 left-6'>
            <FiSearch />
          </button>
        </div>

        <div className='flex items-center justify-center'>
          <p className='pr-2 text-[1.1rem] text-gray-400'>|</p>
          <button className='text-gray-900 text-[1.2rem]'>
            <CiLocationOn />
          </button>
          <p className='text-gray-500 font-[500] pl-1 text-[1.2rem] cursor-pointer'>
            {location.length > 8 ? location.substring(0, 8) + ".." : location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchMeal;
