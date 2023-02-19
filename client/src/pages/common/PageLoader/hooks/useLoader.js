import { useSelector } from "react-redux";

const useLoader = () => {
  const { loader: { loading } } = useSelector((state) => state);

  return {
    loading,
  };
};

export default useLoader;