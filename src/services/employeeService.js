// import http from './http-common'
// import { employeesData } from '../mock-data/employees.js'
// import { categoriesData } from '../mock-data/categories.js'

// const getAllEmployees = () => {
//   return employeesData;
// }

// const searchEmployees =  (queryParams) => {

//     let result= employeesData.filter((employee) => {

//       if (queryParams && queryParams.get('lastName') &&
//         employee.lastName!==queryParams.get('lastName')){
//         return false;
//       }

//       if (queryParams && queryParams.get('countryId')){
//         const countryCode = queryParams.get('countryId')
//         const countryObj =categoriesData.countryListAllIsoData.find(country => country.code3===countryCode)

//         if(employee.country!==countryObj.name){
//           return false;
//         }
//       }

//       if (queryParams && queryParams.get('businessUnitId')) {
//         const bunitId =parseInt(queryParams.get('businessUnitId'));
//         const businessUnitObj =categoriesData.businessUnits.find(bunit => bunit.id===bunitId);

//         if(employee.businessUnit!==businessUnitObj.name){
//           return false;
//         }
//       }

//       return true

//     })

//     return {data: result}
// };

// const employeeService = {
//   getAllEmployees,
//   searchEmployees
// };

// export default employeeService

// /** real implementation */
// /*
// const getAllEmployees = () => {
//   return http.get('/employees')
// }

// const searchEmployees = (queryParams) => {
//   return http.get(`/employees?${queryParams}`);
// };
// */
