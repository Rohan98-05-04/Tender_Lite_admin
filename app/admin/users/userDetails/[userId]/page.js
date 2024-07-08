"use client";
import Link from "next/link";
import styles from "../userDetails.module.css";
import { useEffect, useState } from "react";
import { GetUserById } from "@/apiFunction/users/userApi";
import { ToastContainer, toast } from "react-toastify";
import BigNoDataFound from "@/components/common/noDataFound/noDataFound";
import Spinner from "@/components/common/spinner/spinner";

export default function UserDetails(params) {
  const [specificUserData, setSpecificUserData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log("params", params.params);
  useEffect(() => {
    setIsLoading(true);
    const getUserDetailsById = async () => {
      let res = await GetUserById(params?.params?.userId);
      if (res?.resData?.success == true) {
        console.log("specific user data", res?.resData?.data);
        setSpecificUserData(res?.resData?.data);
        setIsLoading(false);
      } else {
        toast.error(res?.errMessage);
        setIsLoading(false);
        return false;
      }
    };
    getUserDetailsById();
  }, [params]);
  const demoarray = [
    "item",
    "item item",
    "item",
    "item item item",
    "item",
    "item item",
    "item",
    "item item item",
    "item",
    "item item",
    "item",
    "item item item",
    "item",
    "item item",
    "item",
    "item item item",
    "item",
    "item item",
    "item",
    "item item item",
    "item",
    "item item",
    "item",
    "item item item",
  ];
  const demodata =
    "Dr. Emily Harper is a distinguished neuroscientist renowned for her groundbreaking research in neuroplasticity and brain-machine interfaces. Born in Boston, Massachusetts, she demonstrated an early aptitude for science, earning her Ph.D. in Neuroscience from MIT. Throughout her career, Dr. Harper has published over 50 peer-reviewed papers and holds several patents related to neural prosthetics. Her innovative work has garnered numerous accolades, including the prestigious MacArthur Fellowship. Beyond her research, she is a dedicated educator and mentor, shaping the next generation of scientists as a professor at Stanford University. Dr. Harper's contributions continue to revolutionize our understanding of the brain's adaptability and its potential for interfacing with technology.";
  return (
    <>
      {isLoading && <Spinner />}
      <Link href="/admin/users">
        <div className="mb-5 mt-5">
          <button
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button"
          >
            Back
          </button>
        </div>
      </Link>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 underline">
        <span className="capitalize  text-blue-500">
          {" "}
          {specificUserData ? specificUserData?.user_name : null}
        </span>{" "}
        User Details{" "}
      </h1>
      {specificUserData ? (
        <section>
          <div className={`${styles.firstDetailsBox}`}>
            <div className={`${styles.firstDetailsDiv}`}>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-20 h-20 rounded-full mr-2"
                    src={
                      specificUserData?.profile_image
                        ? specificUserData?.profile_image
                        : "https://tse2.mm.bing.net/th?id=OIP.LTTKrxNWDr_k74wz6jKqBgHaHa&pid=Api&P=0&h=180"
                    }
                    alt="user photo"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                <div className="flex-grow">
                  <h1 className="text-lg font-bold text-blue-600 capitalize">
                    {specificUserData?.user_name}
                  </h1>
                  <p className="text-sm font-bold text-gray-600 capitalize">
                    {specificUserData?.userType}
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.heroSectionVL}`}></div>
            <div className={`${styles.secondDetailsDiv}`}>
              <div className={`grid gap-2 grid-cols-2 items-center ${styles.secondDetailsGridDiv} `}>
                <div className="grid gap-2 grid-cols-2 items-center">
                  <h1 className="text-sm  font-bold text-gray-400">
                    Total Followers :
                  </h1>
                  <p className="text-xs  font-bold text-gray-700">
                    {specificUserData?.followers?.length}
                  </p>
                </div>

                <div className="grid gap-1 grid-cols-2 items-center">
                  <h1 className="text-sm font-bold text-gray-400">
                    Total Follows :
                  </h1>
                  <p className="text-xs font-bold text-gray-700">
                    {specificUserData?.follows?.length}
                  </p>
                </div>
                <div className="grid gap-1 grid-cols-2 items-center">
                  <h1 className="text-sm font-bold text-gray-400">
                    Scoreboard :
                  </h1>
                  <p className="text-xs font-bold text-gray-700">
                    {specificUserData?.scoreboard}
                  </p>
                </div>
                <div className="grid gap-1 grid-cols-2 items-center">
                  <h1 className="text-sm font-bold text-gray-400">
                    Joined Date :
                  </h1>
                  <p className="text-xs font-bold text-gray-700">
                    {specificUserData?.created_at?.slice(0, 10)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd section  */}
          <div className={`h-full ${styles.secondSection}`}>
            {/* secondSectionLeft */}
            <div className={`${styles.secondSectionLeft}`}>
              <div>
                <h1 className="text-lg font-bold text-gray-400">
                  {" "}
                  Personal Information
                </h1>
              </div>
              <div className={`${styles.horizontalLine}`}></div>
              <div className="grid gap-2 md:grid-cols-2 grid-cols-1 items-center ">
                <div className="mb-4">
                  <h1 className="text-md font-bold text-gray-400">
                    Full Name{" "}
                  </h1>
                  <p className="text-sm font-bold text-gray-700">
                    {specificUserData?.full_name}
                  </p>
                </div>
                <div className="mb-4">
                  <h1 className="text-md font-bold text-gray-400">Email </h1>
                  <p className="text-sm font-bold text-gray-700">
                    {specificUserData?.email}
                  </p>
                </div>
                <div className="mb-4">
                  <h1 className="text-md font-bold text-gray-400">Gender </h1>
                  <p className="text-sm font-bold text-gray-700">
                    {specificUserData?.gender}
                  </p>
                </div>

                <div className="mb-4">
                  <h1 className="text-md font-bold text-gray-400">
                    Phone No.{" "}
                  </h1>
                  <p className="text-sm font-bold text-gray-700">
                    {specificUserData?.phone}
                  </p>
                </div>
                <div className="mb-4">
                  <h1 className="text-md font-bold text-gray-400">
                    Date Of Birth
                  </h1>
                  <p className="text-sm font-bold text-gray-700">
                    {specificUserData?.dob
                      ? specificUserData?.dob.slice(0, 10)
                      : "-"}
                  </p>
                </div>
                <div className="mb-4">
                  <h1 className="text-md font-bold text-gray-400">
                    Occupation{" "}
                  </h1>
                  <p className="text-sm font-bold text-gray-700 capitalize">
                    {specificUserData?.occupation
                      ? specificUserData?.occupation
                      : "-"}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h1 className="text-md font-bold text-gray-400">
                  Social Media{" "}
                </h1>
                {specificUserData?.instaUrl || specificUserData?.twitterUrl ? (
                  <div
                    className="font-medium  hover:underline mt-1"
                    style={{ fontSize: "1.5em" }}
                  >
                    {specificUserData?.instaUrl && (
                      <Link
                        href={
                          specificUserData?.instaUrl
                            ? specificUserData?.instaUrl
                            : ""
                        }
                      >
                        <span className="text-red-600 dark:text-red-500 mr-2">
                          <i class="bi bi-instagram"></i>
                        </span>
                      </Link>
                    )}

                    {specificUserData?.twitterUrl && (
                      <Link
                        href={
                          specificUserData?.twitterUrl
                            ? specificUserData?.twitterUrl
                            : ""
                        }
                      >
                        <span className="text-blue-600 dark:text-blue-500">
                          <i class="bi bi-twitter"></i>
                        </span>
                      </Link>
                    )}
                  </div>
                ) : (
                  <h3 className="text-sm font-bold text-gray-300">
                    No Links Uploaded
                  </h3>
                )}
              </div>
            </div>
            {/* secondSectionRight */}
            <div className={`${styles.secondSectionRight}`}>
              <div className={`${styles.secondSectionRightTop}`}>
                <div>
                  <h1 className="text-lg font-bold text-gray-400">
                    Interests Information
                  </h1>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className="mb-4">
                  <h1 className="text-md font-bold text-gray-400">
                    Interested Gender{" "}
                  </h1>
                  {specificUserData?.interest_in_gender ? (
                    <p className="text-sm font-bold text-gray-700">
                      {specificUserData?.interest_in_gender}
                    </p>
                  ) : (
                    <h3 className="text-sm font-bold text-gray-300">
                      Not mentioned
                    </h3>
                  )}
                </div>
                <div className="mb-4">
                  <h1 className="text-md font-bold text-gray-400">
                    Categories{" "}
                  </h1>

                  {specificUserData?.interests?.categories?.length > 0 ? (
                    <div
                      className={`flex flex-wrap justify-between overflow-y-auto h-28`}
                    >
                      {specificUserData?.interests?.categories?.map(
                        (item, index) => (
                          <span
                            key={index}
                            className="capitalize text-sm w-auto rounded-lg mt-2 mr-2 text-gray-700 font-medium px-2 py-2 bg-[#ffffff] border border-black"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  ) : (
                    <h3 className="text-sm font-bold text-gray-300">
                      No Categories
                    </h3>
                  )}
                  {/* <div className={`flex flex-wrap justify-between overflow-y-auto h-28`}>
                    {demoarray.map((item, index) => (
                      <span
                        key={index}
                        className="capitalize text-sm w-auto rounded-lg mt-2 mr-2 text-gray-700 font-medium px-2 py-2 bg-[#ffffff] border border-black"
                      >
                        {item}
                      </span>
                    ))}
                  </div> */}
                </div>
                <div className="mb-4">
                  <h1 className="text-md font-bold text-gray-400">
                    SubCategories
                  </h1>
                  {specificUserData?.interests?.subcategories?.length > 0 ? (
                    <div
                      className={`flex flex-wrap justify-between overflow-y-auto h-28`}
                    >
                      {specificUserData?.interests?.subcategories?.map(
                        (item, index) => (
                          <span
                            key={index}
                            className="capitalize text-sm w-auto rounded-lg mt-2 mr-2 text-gray-700 font-medium px-2 py-2 bg-[#ffffff] border border-black"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  ) : (
                    <h3 className="text-sm font-bold text-gray-300">
                      No SubCategories
                    </h3>
                  )}
                    {/* <div className={`flex flex-wrap justify-between overflow-y-auto h-28`}>
                    {demoarray.map((item, index) => (
                      <span
                        key={index}
                        className="capitalize text-sm w-auto rounded-lg mt-2 mr-2 text-gray-700 font-medium px-2 py-2 bg-[#ffffff] border border-black"
                      >
                        {item}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
              <div className={`${styles.secondSectionRightBottom}`}>
                <div>
                  <h1 className="text-lg font-bold text-gray-400">
                    Bio Information
                  </h1>
                </div>
                <div className={`${styles.horizontalLine}`}></div>
                <div className="grid gap-2 md:grid-cols-1 grid-cols-1  mb-2 ">
                  {specificUserData?.bio ? (
                    <p className="text-sm font-bold text-gray-700 capitalize">
                      {specificUserData?.bio}
                    </p>
                  ) : (
                    <h3 className="text-sm font-bold text-gray-300">
                      Not mentioned
                    </h3>
                  )}
                  {/* <p className="text-sm font-bold text-gray-700">
              
                      {demodata}
                    </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="mt-4 mb-4 ">
          <BigNoDataFound />
        </div>
      )}
    </>
  );
}
