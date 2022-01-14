import { AxiosResponse } from 'axios'
import { Employee, CareMember } from 'types/types'
import {businessUnitsMockResponse, careMembersMockResponse, careRolesMockResponse, countriesMockResponse, deleteMockResponse, employeeMockResponse, groupMockResponse} from './mock-data';
import { filterCareMembers, filterEmployees, QueryFilterFunction } from './mock-data-filters';



export async function get(
  url: string
  // ): Promise<AxiosResponse<Employee[] | CareMember[] | Group[] | CareRole[] | BusinessUnit[] | Country[]> >{
): Promise<AxiosResponse<any>> {

  if (url.includes("/employees")) {
    return Promise.resolve(mockSearch<Employee>(url,employeeMockResponse,filterEmployees));
  }
  if (url.includes("/groups")) {
    return Promise.resolve(groupMockResponse);
  }
  if (url.includes("/care-roles")) {
    return Promise.resolve(careRolesMockResponse);
  }
  if (url.includes("/business-units")) {
    return Promise.resolve(businessUnitsMockResponse);
  }

  if (url.includes("/countries")) {
    return Promise.resolve(countriesMockResponse);
  }

  if (url.includes("/care-members")) {
    return Promise.resolve(mockSearch<CareMember>(url,careMembersMockResponse,filterCareMembers));
  }
  return Promise.reject();
};

export async function post<T>(
  path: string,
  body: any
): Promise<AxiosResponse<T>> {
  return Promise.resolve(body);
};

export async function put<T>(
  path: string,
  body: any
): Promise<AxiosResponse<T>> {
  return Promise.resolve(body);
};

export async function patch<T>(
  path: string,
  body: any
): Promise<AxiosResponse<T>> {
  return Promise.resolve(body);
};

export async function httpDelete(
  path: string,
): Promise<AxiosResponse<any>> {
  return Promise.resolve(deleteMockResponse);
};

export const httpCommonMock = {
  get,
  post,
  patch,
  put,
  delete: httpDelete
}


const mockSearch =<T> (url: string, mockResponse: AxiosResponse<T[]>, filter: QueryFilterFunction<T>): AxiosResponse<any> => {
   let resultset = { ...mockResponse };

  if (!url.includes("?")) {
    return resultset;
  }

  let pathAndqueryParams = url.split("?");
  if (pathAndqueryParams.length === 0) {
    throw Error('Parameters ' + pathAndqueryParams + ' contain illegal querystring')
  }
  let searchParams = new URLSearchParams(pathAndqueryParams[1]);

  let filteredEntities =filter(searchParams,mockResponse.data);
  resultset = { ...mockResponse };
  resultset.data = filteredEntities;
  return resultset;


}


// async function get<ResultType>(path: string): Promise<ResultType> {
//   const response = await fetch(`https://example.com/api${path}`);
//   return response.json();
// }

// async function http<T>(
//   request: RequestInfo
// ): Promise<HttpResponse<T>> {
//   const response: HttpResponse<T> = await fetch(
//     request
//   );
//   response.parsedBody = await response.json();
//   return response;
// }



/*
const mockEmployeeData = (url: string, filter: QueryFilterFunction<Employee>): AxiosResponse<any> => {

  let resultset = { ...employeeMockResponse };

  if (!url.includes("?")) {
    return resultset;
  }

  let pathAndqueryParams = url.split("?");
  if (pathAndqueryParams.length === 0) {
    throw Error('Parameters ' + pathAndqueryParams + ' contain illegal querystring')
  }
  let searchParams = new URLSearchParams(pathAndqueryParams[1]);

  let employeeFiltered: Employee[] = filterEmployees(searchParams, employeeMockResponse.data);
  resultset = { ...employeeMockResponse };
  resultset.data = employeeFiltered;
  return resultset;
}
*/




/*
const filter= (data:any, queryParams:string) =>{
    if (!queryParams){
      return data;
    }

    let searchParams = new URLSearchParams(queryParams);
 
    let resultSet= data.filter((record:any) => {
        
      for(let pair of searchParams.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
     }
       
    });
    return resultSet;
}
*/




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

/*
export async function get(
  url: string 
): Promise<HttpResponse< Employee[] | CareMember[] | Group[] | CareRole[] | BusinessUnit[] | Country[]>> {

  if (url.includes("/employees")) {
    return Promise.resolve(employeeMockResponse);
  }
  if (url.includes("/groups")) {
    return Promise.resolve(groupMockResponse);
  }
  if (url.includes("/care-roles")) {
    return Promise.resolve(careRolesMockResponse);
  }
  if (url.includes("/business-units")) {
    return Promise.resolve(businessUnitsMockResponse);
  }

  if (url.includes("/countries")) {
    return Promise.resolve(countriesMockResponse);
  }

  if (url.includes("/care-members")) {
    return Promise.resolve(careMembersMockResponse);
  }
  return Promise.reject();

};*/


// export async function get<T extends Domain>(
//   url: string 
// ): Promise<HttpResponse<Employee[]>> {

//   if (url.includes("/employees")) {
//     return Promise.resolve(employeeMockResponse);
//   }
//   if (url.includes("/groups")) {
//     return Promise.resolve(groupMockResponse);
//   }

//   return Promise.reject();

// };

