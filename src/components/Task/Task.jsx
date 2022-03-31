import React from "react";


const Task = ({item, deleted}) => {
  return (
    <div className="group text-gray-500 bg-white w-full cursor-pointer hover:shadow-lg transition delay-100 duration-200 ease-in-out hover:scale-[1.02] transform mb-1">
      <div className="hover:bg-blue-100 flex flex-row px-3 py-2 justify-between items-center rounded">
      <div className="flex">
        <svg class="w-2 group-hover:text-teal-500 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
          <circle cx="4" cy="4" r="3" />
        </svg>
        <span className="ml-1 text-gray-900 capitalize">
          {`${item}`}
        </span>
      </div>
      <div>
      <button onClick={deleted} class="text-gray-500 font-thin group-hover:text-red-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
      </button>
      </div>

      </div>
    </div>
  );
}

export default Task;
