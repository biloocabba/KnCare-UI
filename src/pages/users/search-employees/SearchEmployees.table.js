export const employeesTableColumns = [
  {
    dataField: "id",
    text: "id", 
    hidden: true,   
  },
  {
    dataField: "firstName",
    text: "First Name",    
  },
  {
    dataField: "lastName",
    text: "Last Name",  
  },
  {
    dataField: "internationalName",
    text: "Int Name",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    style: { width: "50px" },
  },
  {
    dataField: "businessUnit",
    text: "bUnit",
    sort: true,
    style: { width: "50px" },
  },
  {
    dataField: "companyCode",
    text: "companyCode",
    sort: true,
    style: { width: "50px" },
  },
  {
    dataField: "country",
    text: "country",
    sort: true,
  },
  {
    dataField: "hiringDate",
    text: "hiringDate",
    sort: true,
  },
  {
    dataField: "action",
    text: "",
    formatter: ()=> {},
  },
]