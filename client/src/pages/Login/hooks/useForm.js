import { useState, useMemo } from "react";

const useForm = () => {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [errors, updateErrors] = useState({});

  const handleInputs = ({ target: { value, id } }) => {
    switch (id) {
      case "email":
        updateEmail(value.trim());
        break;
      case "password":
        updatePassword(value.trim());
        break;
      default:
        return;
    }
  };

  const validateInputs = ({ target: { value, id } }) => {
    switch (id) {
      case "email": {
        updateErrors((prev) => ({
          ...prev,
          [id]: !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
        }));
        return;
      }

      case "password": {
        updateErrors((prev) => ({
          ...prev,
          [id]: !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            value
          ),
        }));
        return;
      }

      default:
        return;
    }
  };

  const validateForm = () => {
    validateInputs({ target: { value: email, id: "email" } });
    validateInputs({ target: { value: password, id: "password" } });
  };

  const formIsValid = useMemo(() => {
    const error = Object.keys(errors).find((key) => errors[key]);
    return !error;
  }, [errors]);

  return {
    email,
    password,
    errors,
    formIsValid,
    handleInputs,
    validateInputs,
    validateForm,
  };
};

export default useForm;
