import http from "./http-common";

const getAll = () => {
  return http.get("/practices");
};

const get = id => {
  return http.get(`/practices/${id}`);
};

// const create = data => {
//   return http.post("/practices", data);
// };

const create = (formData) => {
  return http.post("/practices", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
}

const search = (queryParams) => {
  return http.get(`/best-practices?${queryParams}`);
}

const update = (id, data) => {
  return http.put(`/practices/${id}`, data);
};

const remove = id => {
  return http.delete("/practices/" + id);
};

const removeAll = () => {
  return http.delete("/practices");
};


const bestPracticeService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  search
};

export default bestPracticeService;
