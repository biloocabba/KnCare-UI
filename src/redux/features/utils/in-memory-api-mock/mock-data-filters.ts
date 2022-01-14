
import { CareMember, Employee } from 'types/types'
import {businessUnitsMockResponse, countriesMockResponse} from './mock-data';


export interface QueryFilterFunction <T>{
    (queryParams: URLSearchParams, data: T[]): T[];
  }

export const filterEmployees = (queryParams: URLSearchParams, employeesData: Employee[]): Employee[] => {

    let result: Employee[] = employeesData.filter((employee) => {
  
      if (queryParams && queryParams.get('lastName') &&
        employee.lastName !== queryParams.get('lastName')) {
        return false;
      }
  
      if (queryParams && queryParams.get('countryId')) {
        const countryCode = queryParams.get('countryId')
        const countryObj = countriesMockResponse.data.find(country => country.code === countryCode);
        if (countryObj && employee.country !== countryObj.name) {
          return false;
        }
      }
  
      if (queryParams && queryParams.get('businessUnitId')) {
        const bunitIdAsString =queryParams.get('businessUnitId');
        const bunitId:number = bunitIdAsString? parseInt(bunitIdAsString) : -1; //-1 is illegal id
        const businessUnitObj = businessUnitsMockResponse.data.find(bunit => bunit.id === bunitId);
  
        if (businessUnitObj && employee.businessUnit !== businessUnitObj.name) {
          return false;
        }
      }
      return true
    });
  
    return result;
  };


  export const filterCareMembers = (queryParams: URLSearchParams, careMembersData: CareMember[]): CareMember[] => {

    let result: CareMember[] = careMembersData.filter((careMember) => {
  
        if (queryParams && queryParams.get('lastName') &&
          careMember.lastName !== queryParams.get('lastName')) {
          return false;
        }
    
        if (queryParams && queryParams.get('countryId')) {
          const countryCode = queryParams.get('countryId')
          const countryObj = countriesMockResponse.data.find(country => country.code === countryCode);
          if (countryObj && careMember.country !== countryObj.name) {
            return false;
          }
        }
    
        if (queryParams && queryParams.get('businessUnitId')) {
          const bunitIdAsString =queryParams.get('businessUnitId');
          const bunitId:number = bunitIdAsString? parseInt(bunitIdAsString) : -1; //-1 is illegal id
          const businessUnitObj = businessUnitsMockResponse.data.find(bunit => bunit.id === bunitId);
    
          if (businessUnitObj && careMember.businessUnit !== businessUnitObj.name) {
            return false;
          }
        }
        return true
      });
    
      return result;
};