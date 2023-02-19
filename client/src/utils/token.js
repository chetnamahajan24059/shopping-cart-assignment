export const setToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  }
};

export const getToken = () => {
  try {
    const token = localStorage.getItem("token");
    if (token) return token;
    return null;
  } catch (err) {
    console.log(err);
  }
};

export const removeToken = () => {
  try {
    localStorage.removeItem("token");
  } catch (err) {
    console.log(err);
  }
};
