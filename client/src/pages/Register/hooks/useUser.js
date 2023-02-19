import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, clear } from "../redux/actions";

const useUser = () => {
  const {
    user: { data },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpUser = useCallback(
    (data) => {
      const successCallback = () => navigate("/", { replace: true });
      dispatch(register(data, successCallback));
    },
    [dispatch, navigate]
  );

  const logoutUser = useCallback(
    () => {
      dispatch(clear());
    },
    [dispatch]
  );

  return {
    user: data,
    signUpUser,
    logoutUser,
  };
};

export default useUser;
