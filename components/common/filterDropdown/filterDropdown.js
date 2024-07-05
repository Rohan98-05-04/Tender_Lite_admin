import Link from "next/link";
import { useRef, useState } from "react";

export default  function FilterDropdown({arrayitem ,setFilterType,filterTypeData}){
    const [typeOnButton, setTypeOnButton] = useState(filterTypeData);
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const filterType = (Type) => {
        setTypeOnButton(Type);
        setFilterType(Type)
    
        setIsDropdownOpen(false);
      };
      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
    return(<>
    <li className="me-2 list-none relative">
            {" "}
            {/* Ensure relative positioning */}
            <button
              id="dropdownPossessionButton"
              onClick={toggleDropdown}
              className="z-10 text-black bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-100 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
              type="button"
            >
              {typeOnButton ? typeOnButton : "All"}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              ref={dropdownRef}
              id="dropdownPossession"
              className={`z-1000 ${
                isDropdownOpen ? "block" : "hidden"
              }  absolute top-full mt-2 bg-white divide-y divide-white rounded-lg shadow w-44 dark:bg-white`}
            >
              <ul
                className="p-2 text-sm text-gray-700 dark:text-gray-200 list-none"
                aria-labelledby="dropdownPossessionButton"
              >
                {arrayitem.map((item, index) => (
                  <li key={index} onClick={() => filterType(item)}>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-600 dark:hover:text-gray-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
    </>)
}