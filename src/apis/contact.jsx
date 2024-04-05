import { useState } from "react";
import useAxios from ".";
import toast from "react-hot-toast";

const useContact = () => {
  const axiosInstance = useAxios();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const contactReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/forms/contact", payload);
      setData(res?.data);
      toast.success(res?.data?.message || "Successfully sent");
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error?.response?.data?.message || "failed to submit form");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, contactReq };
};

export default useContact;
