import { Employee, Group } from "types/domain";

const employeeMockResponse = [
  {
    id: 1,
    pdmId: 1,
    firstName: "Hamli",
    lastName: "Larvent",
    internationalName: "Hamlin Larvent",
    title: "Senior Developer",
    email: "hlarvent0@nba.com",
    businessUnit: "Legal",
    managementGroup: "Sales",
    companyCode: "SIG YZ-FG",
    costCenter: "TWA02GI",
    country: "Philippines",
    birthDate: "12/18/1984",
    companyPhone: "966-693-7291",
    companyMobilePhone: "814-734-9400",
    gender: "Non-binary",
    startDate: "11/5/2008",
    endDate: "",
    dateOfLeave: "",
    nationality: "",
    officeAddressCountry: "",
    officeAddressCity: "Calaya",
    officeAddressStreet: "1 Bultman Trail"
  },
  {
    id: 2,
    pdmId: 2,
    firstName: "Rosetta",
    lastName: "Sandcroft",
    internationalName: "Rosetta Sandcroft",
    title: "Budget/Accounting Analyst II",
    email: "rsandcroft1@elpais.com",
    businessUnit: "Road Logistics",
    managementGroup: "Legal",
    companyCode: "BPS LJ-JU",
    costCenter: "YVL62KS",
    country: "Czech Republic",
    birthDate: "9/22/1979",
    companyPhone: "102-294-4529",
    companyMobilePhone: "959-551-6325",
    gender: "Non-binary",
    startDate: "1/25/1992",
    endDate: "",
    dateOfLeave: "",
    nationality: "",
    officeAddressCountry: "",
    officeAddressCity: "Rychnov nad Kněžnou",
    officeAddressStreet: "65 Cascade Road"
  },
  {
    id: 3,
    pdmId: 3,
    firstName: "Gayle",
    lastName: "Haithwaite",
    internationalName: "Gayle Haithwaite",
    title: "VP Accounting",
    email: "ghaithwaite2@fc2.com",
    businessUnit: "IT",
    managementGroup: "Sales",
    companyCode: "NMS GF-XT",
    costCenter: "DBU32UE",
    country: "Indonesia",
    birthDate: "6/27/1993",
    companyPhone: "826-504-5163",
    companyMobilePhone: "488-645-3398",
    gender: "Genderqueer",
    startDate: "8/30/2000",
    endDate: "",
    dateOfLeave: "",
    nationality: "",
    officeAddressCountry: "",
    officeAddressCity: "Kenarilang",
    officeAddressStreet: "11403 Ludington Place"
  },
  {
    id: 4,
    pdmId: 4,
    firstName: "Coletta",
    lastName: "Kimbury",
    internationalName: "Coletta Kimbury",
    title: "Registered Nurse",
    email: "ckimbury3@uol.com.br",
    businessUnit: "Legal",
    managementGroup: "Sales",
    companyCode: "WES UA-AQ",
    costCenter: "XMK32KT",
    country: "Moldova",
    birthDate: "4/24/1971",
    companyPhone: "223-290-1201",
    companyMobilePhone: "975-668-6082",
    gender: "Agender",
    startDate: "7/14/1996",
    endDate: "",
    dateOfLeave: "",
    nationality: "",
    officeAddressCountry: "",
    officeAddressCity: "Floreşti",
    officeAddressStreet: "09 Lindbergh Terrace"
  },
  {
    id: 5,
    pdmId: 5,
    firstName: "Lebbie",
    lastName: "Yesenev",
    internationalName: "Lebbie Yesenev",
    title: "Junior Executive",
    email: "lyesenev4@discovery.com",
    businessUnit: "Road Logistics",
    managementGroup: "Sales",
    companyCode: "GMD WZ-ZU",
    costCenter: "UGV02JG",
    country: "Malta",
    birthDate: "10/15/1989",
    companyPhone: "489-371-7170",
    companyMobilePhone: "402-302-7355",
    gender: "Genderqueer",
    startDate: "4/23/1992",
    endDate: "",
    dateOfLeave: "",
    nationality: "",
    officeAddressCountry: "",
    officeAddressCity: "Kirkop",
    officeAddressStreet: "1 Gulseth Lane" 
  },
] as Employee[];

const groupMockResponse = {
  data: [
    {
      id: 1,
      name: "Brainy Buddies",
      description: "Nothing can be achieved without having fun.",
      active: true,
      members: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      id: 2,
      name: "Dynamite Dealers",
      description: "Can't beat them at negotiation or Monopoly..",
      active: true,
      members: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    },
    {
      id: 3,
      name: "Unfrozen Caveman",
      description:
        "If you need extreme solution they are there for you. Might be rude from time to time",
      active: true,
      members: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    },
    {
      id: 4,
      name: "Mind Serenade",
      description: "They always comes with new ideas, out from the box",
      active: true,
      members: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    },
    {
      id: 5,
      name: "Clan Optimism",
      description: "Watch the bright side of everything",
      active: true,
      members: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    },
  ] as Group[],
};

const mockData = {
  get: jest.fn(url => {
    if (url.includes("/employees")) {
      return Promise.resolve(employeeMockResponse);
    }
    if (url.includes("/groups")) {
      return Promise.resolve(groupMockResponse);
    }
    return null;
  }),
  create: () => mockData,
  defaults: {
    adapter: {},
  },
};

export default mockData;
