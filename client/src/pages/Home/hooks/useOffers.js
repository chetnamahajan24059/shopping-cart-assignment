import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffers } from "../redux/actions";

const useOffers = () => {
  const {
    offers: { list },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchOffers = useCallback(() => {
    dispatch(getOffers());
  }, [dispatch]);

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  return {
    offers: list,
  };
};

export default useOffers;
