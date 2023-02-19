import { useState, useMemo } from "react";

const useForm = () => {
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [confirmPassword, updateConfirmPassword] = useState("");
  const [errors, updateErrors] = useState({});

  const handleInputs =  ({ target: { value, id } }) => {
    switch (id) {
      case "firstName":
        updateFirstName(value.trim());
        break;
      case "lastName":
        updateLastName(value.trim());
        break;
      case "email":
        updateEmail(value.trim());
        break;
      case "password":
        updatePassword(value.trim());
        break;
      case "confirmPassword":
        updateConfirmPassword(value.trim());
        break;
      default:
        return;
    }
  };

  const validateInputs = ({ target: { value, id } }) => {
    switch (id) {
      case "firstName":
      case "lastName": {
        updateErrors((prev) => ({
          ...prev,
          [id]: !/^[a-zA-Z ]{2,30}$/.test(value),
        }));
        return;
      }
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
      case "confirmPassword": {
        updateErrors((prev) => ({
          ...prev,
          [id]: !confirmPassword || password !== confirmPassword,
        }));
        return;
      }

      default:
        return;
    }
  };

  const validateForm = () => {
    validateInputs({ target: { value: firstName, id: "firstName"}})
    validateInputs({ target: { value: lastName, id: "lastName"}})
    validateInputs({ target: { value: email, id: "email"}})
    validateInputs({ target: { value: password, id: "password"}})
    validateInputs({ target: { value: confirmPassword, id: "confirmPassword"}})
  }

  const formIsValid = useMemo(() => {

    const error = Object.keys(errors).find(key => errors[key]);
    return !error;
    
  }, [errors]);



  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    errors,
    formIsValid,
    handleInputs,
    validateInputs,
    validateForm,
  };
};

export default useForm;
