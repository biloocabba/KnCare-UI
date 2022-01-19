import http from "../http-common";

const login = (email, password) => {
  return http
    .post("/auth", {
      email,
      password,
    })
    .then(response => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};
