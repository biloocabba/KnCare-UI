// import http from "./http-common";
// import {countryListAllIsoData} from "mock-data/categories";

// const getAll = () => {
//   return http.get("/mapkpis")
// }




// const randomMembersFromBase = (base, deltaGen) =>{
//   let delta = Math.round(deltaGen*Math.random());
//   return base+delta;
// }

// const getRandomMapData = (base, deltaGen) =>{

//   let generatedData ={}
  
//   countryListAllIsoData.map( (record) => {   
//     generatedData[record.code] = randomMembersFromBase(base, deltaGen);    
//   })
//   return {
//     "data":generatedData
//   }
// }


// const getNewMembersMapData = () =>{
//   return getRandomMapData(20,10);
// }


// const getActiveMembersMapData = () =>{
//   return getRandomMapData(50,20);  
// }


// const getSelfResignedMembersMapData = () =>{
//   return getRandomMapData(0,5);  
// }


// const getAutoOffboardedMembersMapData = () =>{
//   return getRandomMapData(10,10);  
// }

// const mapKpiService = {
//   getAll,
//   getNewMembersMapData,
//   getActiveMembersMapData,
//   getSelfResignedMembersMapData,
//   getAutoOffboardedMembersMapData
// }

// export default mapKpiService;