import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import { API_BASE_URL } from "@/utils/constants";


export const LoginUser = async (payload,setLoading=()=>{}) => {
    setLoading(true);
    console.log("payload",payload)
    try {
      const res = await fetch(`${API_BASE_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const resData = await res.json();
       
  
      if (resData?.success) {
        //toast.success("SuccessFully Login");
        Cookies.set("token", resData?.message);
        // Cookies.set("userId", resData?.userId);
        // Cookies.set("name", resData?.firstName);
        // Cookies.set("profilePhoto", resData?.profilePhoto);
        // Cookies.set("roles", JSON.stringify(resData?.role));
  
        setLoading(false);
        return {token:resData?.message};
      } else {
        //toast.error(resData.message);
        setLoading(false);
        return {errMessage:resData.error};
      }
    } catch (error) {
      setLoading(false);
      toast.error("someting went wrong");
       
    }
  };