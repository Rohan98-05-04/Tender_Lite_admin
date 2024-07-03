"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Styles from "../common/sidebar.module.css";
import { usePathname } from "next/navigation";
import { initFlowbite } from "flowbite";
import Cookies from "js-cookie";
export default function SidebarComp({ children }) {
  const pathname = usePathname();

  const firstName = Cookies.get("firstName");
  const lastName = Cookies.get("lastName");
  const email = Cookies.get("email");

  const [activeTab, setActiveTab] = useState();
  useEffect(() => {
    setActiveTab(pathname.split("/"));
  }, [pathname]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    initFlowbite(); // Call initCarousels() when component mounts
  }, []);
  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          className={` ${Styles.sidebarMain} h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800`}
        >
          <div className="mb-4 text-center">
            <span className={`ms-3 ${Styles.admintext}`}>Admin</span>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="dashboard"
                to="dashboard"
                onClick={() => handleTabClick("dashboard")}
                className={` ${
                  activeTab?.includes("dashboard")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`${
                    activeTab?.includes("dashboard") ? "" : Styles.inactiveTab
                  }  ${
                    Styles.tabSvg
                  }  flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                href="/admin/users"
                onClick={() => handleTabClick("/admin/users")}
                className={` ${
                  activeTab?.includes("users")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`${
                    activeTab?.includes("users") ? "" : Styles.inactiveTab
                  }  ${
                    Styles.tabSvg
                  }  flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className={` flex-1 ms-3 whitespace-nowrap`}>Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/games"
                onClick={() => handleTabClick("/admin/games")}
                className={` ${
                  activeTab?.includes("games")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`${
                    activeTab?.includes("games") ? "" : Styles.inactiveTab
                  } ${
                    Styles.tabSvg
                  } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 13H6M7 12V14M7 12V10M7 12H9M15.5 11.25V11.26M18.5 11.25V11.26M17 9.75V9.76M17 12.75V12.76M5.96 4C3.96 4 2 5.56 2 7.93V7.93C2 9.07 2.36 10.18 3.02 11.06L4.1 12.55C4.42 13 4.83 13.36 5.3 13.61L6.13 14.04C7.28 14.62 8.67 14.29 9.39 13.23L10.22 12C10.5 11.6 10.98 11.36 11.5 11.36H12.5C13.02 11.36 13.5 11.6 13.78 12L14.61 13.23C15.33 14.29 16.72 14.62 17.87 14.04L18.7 13.61C19.17 13.36 19.58 13 19.9 12.55L20.98 11.06C21.64 10.18 22 9.07 22 7.93V7.93C22 5.56 20.04 4 18.04 4H5.96Z"
                   stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className={` flex-1 ms-3 whitespace-nowrap`}>Games</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/coachProfile"
                onClick={() => handleTabClick("/admin/coachProfile")}
                className={` ${
                  activeTab?.includes("coachProfile")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`${
                    activeTab?.includes("coachProfile") ? "" : Styles.inactiveTab
                  } ${
                    Styles.tabSvg
                  } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 22c0-2.652 1.053-5.195 2.928-7.071C8.804 13.053 11.348 12 14 12s5.196 1.053 7.071 2.928C21.947 16.804 23 19.348 23 22H4z"
                  />
                </svg>

                
                <span className={` flex-1 ms-3 whitespace-nowrap`}>
                  Coach Profile
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/profile"
                onClick={() => handleTabClick("/admin/profile")}
                className={` ${
                  activeTab?.includes("profile")
                    ? Styles.activeTab
                    : Styles.inactiveTab
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`${
                    activeTab?.includes("profile") ? "" : Styles.inactiveTab
                  } ${
                    Styles.tabSvg
                  } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 22c0-2.652 1.053-5.195 2.928-7.071C8.804 13.053 11.348 12 14 12s5.196 1.053 7.071 2.928C21.947 16.804 23 19.348 23 22H4z"
                  />
                </svg>

                <span className={` flex-1 ms-3 whitespace-nowrap`}>
                  Profile
                </span>
              </Link>
            </li>
            {/* 

            <li>
              <a
                href="/admin/products"
                className={` ${
                  activeTab === "/admin/products"
                    ? Styles.activeTab
                    : Styles.inactiveTab
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`${
                    activeTab === "/admin/products" ? "" : Styles.inactiveTab
                  } ${
                    Styles.tabSvg
                  } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 9l6-6 6 6v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 22h6"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Product</span>
              </a>
            </li>

            <li>
              <Link
                href="/admin/coupon"
                onClick={() => handleTabClick("/admin/coupon")}
                className={` ${
                  activeTab === "/admin/coupon" ? Styles.activeTab : Styles.inactiveTab
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`${
                    activeTab === "/admin/coupon" ? "" : Styles.inactiveTab
                  } ${
                    Styles.tabSvg
                  } flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 7a2 2 0 0 1-2 2h-.28a2 2 0 0 0-1.77 1.06l-.62 1.08a2 2 0 0 0 0 1.72l.62 1.08A2 2 0 0 0 18.72 15H19a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h.28a2 2 0 0 0 1.77-1.06l.62-1.08a2 2 0 0 0 0-1.72l-.62-1.08A2 2 0 0 0 5.28 9H5A2 2 0 0 1 3 7V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 15h10M7 9h10"
                  />
                </svg>

                <span className={` flex-1 ms-3 whitespace-nowrap`}>Coupon</span>
              </Link>
            </li>

            <li>
              <Link
                href="/admin/ledger"
                onClick={() => handleTabClick("/admin/ledger")}
                className={` ${
                  activeTab === "/admin/ledger" ? Styles.activeTab : Styles.inactiveTab
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`${
                    activeTab === "/admin/ledger" ? "" : Styles.inactiveTab
                  }  ${
                    Styles.tabSvg
                  }  flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className={` flex-1 ms-3 whitespace-nowrap`}>Ledger</span>
              </Link>
            </li> */}

            {/* <li>
              <Link
                href="login"
                to="/login"
                onClick={() => handleTabClick("login")}
                className={` ${
                  activeTab === "signIn" ? Styles.activeTab : Styles.inactiveTab
                } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className={`${
                    activeTab === "signIn" ? "" : Styles.inactiveTab
                  }  ${
                    Styles.tabSvg
                  }  flex-shrink-0 w-5 h-5 text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-black`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <nav className="border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a
                href=""
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Tinder Lite
                </span>
              </a>
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://tse1.mm.bing.net/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&pid=Api&P=0&h=180"
                    alt="user photo"
                    style={{ backgroundColor: "white" }}
                  />
                </button>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {firstName} {lastName}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      {email}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Change Password
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div> */}
            </div>
          </nav>
        </div>
        <div className="mt-3 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {children}
          {/* Content for Dashboard tab */}
          {/* {activeTab === 'dashboard' && <Dashboard activeTab={activeTab}/>}
   {activeTab === 'users' && <Login />}
   {activeTab === 'login' && <Login />} */}
        </div>
      </div>
    </>
  );
}
