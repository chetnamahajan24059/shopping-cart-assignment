import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/actions";

const useCategory = () => {
  const {
    category: { list },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchCategory = useCallback(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  return {
    category: list,
  };
};

export default useCategory;
