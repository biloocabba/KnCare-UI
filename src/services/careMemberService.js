import http from './http-common'


const getAllCareMembers = () => {
  return http.get("/care-members");
};

const searchCareMembers = (queryParams) => {
  return http.get(`/care-members?${queryParams}`);
};

const create = (data) => {
  return http.post('/care-members/', data)
}

const careMemberService = {
  create,
  getAllCareMembers,
  searchCareMembers
}

export default careMemberService
