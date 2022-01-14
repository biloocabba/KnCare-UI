import { employeesData } from 'mock-data/employees.js'
import { careMembersData } from 'mock-data/careMembers.js'
import { countryListAllIsoData, } from 'mock-data/countries.js'
import { businessUnits } from 'mock-data/businessUnits'
import { groups } from 'mock-data/groups.js'
import { careRoles } from 'mock-data/careRoles'
import { AxiosResponse } from 'axios'
import { CareRole, Employee, Group, CareMember, Country, BusinessUnit } from 'types/types'

const mockAxiosReponse = {
    status: 200,
    statusText: '',
    headers: undefined,
    config: {}
  }
  
  export const deleteMockResponse: AxiosResponse<any> = {
    data: 'delete success',
    ...mockAxiosReponse
  }
  
  
  export const employeeMockResponse: AxiosResponse<Employee[]> = {
    data: employeesData,
    ...mockAxiosReponse
  }
  
  export const groupMockResponse: AxiosResponse<Group[]> = {
    data: groups,
    ...mockAxiosReponse
  }
  
  export const careMembersMockResponse: AxiosResponse<CareMember[]> = {
    data: careMembersData,
    ...mockAxiosReponse
  }
  
  export const countriesMockResponse: AxiosResponse<Country[]> = {
    data: countryListAllIsoData,
    ...mockAxiosReponse
  }
  
  export const businessUnitsMockResponse: AxiosResponse<BusinessUnit[]> = {
    data: businessUnits,
    ...mockAxiosReponse
  }
  
  export const careRolesMockResponse: AxiosResponse<CareRole[]> = {
    data: careRoles,
    ...mockAxiosReponse
  }