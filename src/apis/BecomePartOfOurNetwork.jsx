import { useState } from "react";
import useAxios from ".";
import toast from "react-hot-toast";

const useBecomePartOfOurNetwork = () => {
  const axiosInstance = useAxios();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const becomePartOfOurNetworkReq = async (payload) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(
        "/forms/become-part-of-our-network",
        payload
      );
      setData(res?.data);
      toast.success(res?.data?.message || "Successfully sent");
    } catch (error) {
      setError(error?.response?.data);
      toast.error(error?.response?.data?.message || "failed to submit form");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, becomePartOfOurNetworkReq };
};

export default useBecomePartOfOurNetwork;
