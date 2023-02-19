import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions";

const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = useCallback(
    (data) => {
      const successCallback = () => navigate("/", { replace: true });
      dispatch(login(data, successCallback));
    },
    [dispatch, navigate]
  );

  return {
    loginUser,
  };
};

export default useUser;
