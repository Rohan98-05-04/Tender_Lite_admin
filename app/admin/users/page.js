"use client";

import Link from "next/link";
// import Switch from "react-switch";
//import Spinner from "@/components/common/loading";
//import Pagination from "@/components/common/pagination";
//import Popup from "@/components/common/popup";
import { useEffect, useRef, useState } from "react";
import { GetAllUserApi } from "@/apiFunction/users/userApi";
// import { deleteUser } from "@/apiFunction/userApi/userApi";
import { ToastContainer, toast } from "react-toastify";
// import DeleteModal from "@/components/common/deleteModal";
// import ListPagination from "@/components/common/pagination";
// import { UserDetailModal } from "@/components/common/userDetailModal";
import Cookies from "js-cookie";
import SearchInput from "@/components/common/debounceSearchInput/debounceSearchInput";
import FilterDropdown from "@/components/common/filterDropdown/filterDropdown";
import Spinner from "@/components/common/spinner/spinner";
import Pagination from "@/components/common/pagination/pagination";
import { list } from "postcss";
import BigNoDataFound from "@/components/common/noDataFound/noDataFound";
export default function User() {
  //   const roleData = Cookies.get("roles") ?? "";
  //   const name = Cookies.get("name");
  //   const roles = roleData && JSON.parse(roleData);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [listData, setListData] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [isRefresh, setIsRefresh] = useState(0);
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState("");
  const [openUserModal, setOpenUserModal] = useState(false);
  const [modalUserId, setModalUserId] = useState("");
  const [filterType, setFilterType] = useState("Player");
  const [isLoading, setIsLoading] = useState(false);

  const userType = ["Player", "Coach"];
  console.log("listData", listData);

  useEffect(() => {
    getAllUsers();
  }, [page, searchData, isRefresh, filterType]);
  const getAllUsers = async () => {
    setIsLoading(true);
    let users = await GetAllUserApi(page, searchData, filterType);
    if (!users?.resData?.message) {
      setListData(users?.resData);
      setIsLoading(false);
      return false;
    } else {
      toast.error(users?.message);
      setIsLoading(false);
      return false;
    }
  };

  const searchInputChange = (e) => {
    setSearchData(e);
  };
  const handlePageChange = (newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleDelete = async () => {
    try {
      const res = await deleteUser(deleteId);
      console.log("delete response", res);
      if (res.resData.message == "User deleted successfully") {
        toast.success("User deleted successfully");
        setIsPopupOpen(false); // Close the modal
        getAllUsers();
      } else {
        toast.error(res?.message || "Error deleting user");
      }
    } catch (error) {
      toast.error("Failed to delete category");
    }
  };

  const toggleChange = async (id, isActive) => {
    console.log("toggle change id", id);
    const payload = {
      IsActive: !isActive,
    };
    let users = await updateUser(payload, id);
    console.log("toggle Users", users);
    if (!users?.resData?.message) {
      setIsRefresh((prev) => prev + 1);
      return false;
    } else {
      toast.error(users?.message);
      return false;
    }
  };

  const OpenUserModal = (id) => {
    setOpenUserModal(true);
    setModalUserId(id);
  };

  const handleCancel = () => {
    setDeleteId("");
    setIsPopupOpen(false);
  };
  const deleteUserModal = async (id) => {
    setDeleteId(id);
    setIsPopupOpen(true);
  };

  console.log("filter type", filterType);
  return (
    <section>
      {isLoading && <Spinner />}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className="text-2xl text-black-600 underline mb-3 font-bold">
          Users
        </h1>
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-end pb-4">
          {/* <div>
            <Link href={"/admin/users/addUser"}>
              {" "}
              <button
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                + Add Users
              </button>
            </Link>
          </div> */}
          <FilterDropdown
            arrayitem={userType}
            setFilterType={setFilterType}
            filterTypeData={filterType}
          />
          <div>
            <SearchInput setSearchData={searchInputChange} />
          </div>
        </div>
        {listData ? (
          <div>
            {" "}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="tableFirstRow">
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mobile
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {listData?.data?.length > 0
                  ? listData?.data?.map((item, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td
                          className="px-6 py-4 cursor-pointer"
                          onClick={() =>
                            item?.Role?.Name === "Retailer" &&
                            OpenUserModal(item.UserId)
                          }
                          style={{
                            color:
                              item?.Role?.Name === "Retailer"
                                ? "blue"
                                : "inherit",
                          }}
                        >
                          {item?.FirstName}
                        </td>
                        <td className="px-6 py-4">{item?.Role?.Name}</td>
                        <td className="px-6 py-4">{item?.Phone}</td>
                        <td className="px-6 py-4">{item?.Email}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            {item?.IsActive ? (
                              <Link
                                href={`/admin/users/updateUser/${item.UserId}`}
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                <i
                                  className="bi bi-pencil-square"
                                  style={{ fontSize: "1.5em" }}
                                ></i>
                              </Link>
                            ) : (
                              <button
                                disabled
                                className="font-medium text-gray-400 dark:text-gray-500 cursor-not-allowed"
                              >
                                <i
                                  className="bi bi-pencil-square"
                                  style={{ fontSize: "1.5em" }}
                                ></i>
                              </button>
                            )}

                            {/* <Switch
                    onChange={() => toggleChange(item?.UserId, item?.IsActive)}
                    checked={item?.IsActive}
                  /> */}

                            <Link
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              <i
                                onClick={() => deleteUserModal(item.UserId)}
                                className="bi bi-trash-fill"
                                style={{ color: "red", fontSize: "1.5em" }}
                              ></i>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
            {listData?.data?.length === 0 && (
              <div className="mt-4 mb-4 ">
                <BigNoDataFound />
              </div>
            )}
          </div>
        ) : null}
      </div>
      <div className="mt-4">
        <Pagination data={listData} pageNo={handlePageChange} pageVal={page} />
      </div>
      {/* <DeleteModal
        isOpen={isPopupOpen}
        title="Are you sure you want to delete this User ?"
        confirmLabel="Yes, I'm sure"
        cancelLabel="No, cancel"
        onConfirm={handleDelete}
        onCancel={handleCancel}
      /> */}
      {/* <UserDetailModal
      modalValue = {openUserModal}
      setOpenUserModal = {setOpenUserModal}
      userIdValue = {modalUserId}
      /> */}
    </section>
  );
}
