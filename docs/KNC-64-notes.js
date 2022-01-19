const email = {
  id: "",
  subject: "",
  content: "",
  attachments: null, //lihtsuse mõttes praegu ei arvesta
  createdBy: { id: 123 }, // backendist frontendi info saatmise korral Member, member omakorda sisaldab Employee objekti
  //frontendist backendi saatmise ajal createdBy on lihtsalt objekt, kus sees on "id" property
  recipients: "", //list memberitest (sest neid võib olla mitu) Member, member omakorda sisaldab Employee objekti
  //recipients on pigem mõeldud individuaalsetele inimestele, mitte gruppidele
  recipientGroups: "", //list gruppidest
};

//jätame lihtsuse mõttes koopiad ja pimekoopiad välja

const member = {
  id: "",
  name: "", //võibolla pole vaja
  email: "",
};

/*
Java klass Care programi liikme kohta:

private Long id;            //TODO: add index

private LocalDateTime onBoardDate; //kuna võeti Care programmi

private LocalDateTime offBoardDate; //kuna eemaldati Care programmist

private Employee employee; //konkreetne tööline, kes osaleb Care programmis

private Role role; //töölise roll

api/email?subject=abc
*/

/*
class Employee //klassi Member nested klass

    private Long id;

    private Long pdmId;

    private String firstName;

    private String lastName;

    private String internationalName;

    private String title;

    private String email;

    private Timestamp createdAt;

    private Timestamp updatedAt;

    private Date birthDate;

    private String companyPhone;

    private String companyMobilePhone;

    private Gender gender;

    private Date startDate;

    private Date endDate;

    private Date dateOfLeave;
 */

/*
Grupp

    private Long id;

    private String name;

    private String description;
 */

/*
Meilide otsimise päringu koostamine:
requestBodysse panna isiku ID, kelle meile tahame näha
*/

/*
Vajalikud API endpointid:
sendMail -- saatmist praegu pole

GET: api/v1/emails/{id}
getMail (üksik)

GET: api/v1/emails //Search
getMail

POST: api/v1/emails
saveMail

//hetkel disain on veel lahtine, praegu veel ei hakka implementeerima
POST:
sendMail

PUT: api/v1/emails/{id}
updateMail

DELETE: api/v1/emails/{id}
discardMail
*/

//tegemist on struktuurinäidistega, sisu mitte arvestada
const sample1 = {
  content: [
    {
      id: 1,
      onBoardDate: "2021-08-03T14:38:33",
      offBoardDate: "2021-08-03T14:38:33",
    },
    {
      id: 2,
      onBoardDate: "2021-08-04T14:38:33",
      offBoardDate: "2021-09-03T14:38:33",
    },
    {
      id: 3,
      onBoardDate: "2021-08-05T14:38:33",
      offBoardDate: "2021-10-03T14:38:33",
    },
    {
      id: 4,
      onBoardDate: "2021-08-06T14:38:33",
      offBoardDate: "2021-11-03T14:38:33",
    },
    {
      id: 5,
      onBoardDate: "2021-08-07T14:38:33",
      offBoardDate: "2021-12-03T14:38:33",
    },
    {
      id: 6,
      onBoardDate: "2021-08-08T14:38:33",
      offBoardDate: "2021-03-03T14:38:33",
    },
    {
      id: 7,
      onBoardDate: "2021-08-09T14:38:33",
      offBoardDate: "2021-04-03T14:38:33",
    },
    {
      id: 8,
      onBoardDate: "2021-08-10T14:38:33",
      offBoardDate: "2021-05-03T14:38:33",
    },
    {
      id: 9,
      onBoardDate: "2021-08-11T14:38:33",
      offBoardDate: "2021-06-03T14:38:33",
    },
    {
      id: 10,
      onBoardDate: "2021-08-12T14:38:33",
      offBoardDate: "2021-07-03T14:38:33",
    },
  ],
  pageable: {
    sort: {
      sorted: false,
      unsorted: true,
      empty: true,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 10,
    unpaged: false,
    paged: true,
  },
  last: true,
  totalElements: 10,
  totalPages: 1,
  size: 10,
  number: 0,
  sort: {
    sorted: false,
    unsorted: true,
    empty: true,
  },
  first: true,
  numberOfElements: 10,
  empty: false,
};

const sample2 = {
  content: [
    {
      id: 1,
      onBoardDate: "2021-08-03T14:38:33",
      offBoardDate: "2021-08-03T14:38:33",
      employee: {
        id: 1,
        pdmId: null,
        firstName: null,
        lastName: null,
        internationalName: "Member 1",
        title: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        birthDate: null,
        companyPhone: null,
        companyMobilePhone: null,
        gender: null,
        startDate: null,
        endDate: null,
        dateOfLeave: null,
        hrReference: null,
        dottedLineManager: null,
        solidLineManager: null,
        nationality: null,
        businessUnit: null,
        costCenter: null,
        managementGroup: null,
        workingPosition: null,
        office: null,
        businessUnitHistoryRecords: [],
        costCenterHistoryRecordRecords: [],
        employeeHistoryRecords: [],
        groupManagementHistoryRecords: [],
        workingPositionHistoryRecords: [],
      },
    },
    {
      id: 2,
      onBoardDate: "2021-08-04T14:38:33",
      offBoardDate: "2021-09-03T14:38:33",
      employee: {
        id: 2,
        pdmId: null,
        firstName: null,
        lastName: null,
        internationalName: "Member 2",
        title: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        birthDate: null,
        companyPhone: null,
        companyMobilePhone: null,
        gender: null,
        startDate: null,
        endDate: null,
        dateOfLeave: null,
        hrReference: null,
        dottedLineManager: null,
        solidLineManager: null,
        nationality: null,
        businessUnit: null,
        costCenter: null,
        managementGroup: null,
        workingPosition: null,
        office: null,
        businessUnitHistoryRecords: [],
        costCenterHistoryRecordRecords: [],
        employeeHistoryRecords: [],
        groupManagementHistoryRecords: [],
        workingPositionHistoryRecords: [],
      },
    },
    {
      id: 3,
      onBoardDate: "2021-08-05T14:38:33",
      offBoardDate: "2021-10-03T14:38:33",
      employee: {
        id: 3,
        pdmId: null,
        firstName: null,
        lastName: null,
        internationalName: "Member 3",
        title: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        birthDate: null,
        companyPhone: null,
        companyMobilePhone: null,
        gender: null,
        startDate: null,
        endDate: null,
        dateOfLeave: null,
        hrReference: null,
        dottedLineManager: null,
        solidLineManager: null,
        nationality: null,
        businessUnit: null,
        costCenter: null,
        managementGroup: null,
        workingPosition: null,
        office: null,
        businessUnitHistoryRecords: [],
        costCenterHistoryRecordRecords: [],
        employeeHistoryRecords: [],
        groupManagementHistoryRecords: [],
        workingPositionHistoryRecords: [],
      },
    },
    {
      id: 4,
      onBoardDate: "2021-08-06T14:38:33",
      offBoardDate: "2021-11-03T14:38:33",
      employee: {
        id: 4,
        pdmId: null,
        firstName: null,
        lastName: null,
        internationalName: "Member 4",
        title: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        birthDate: null,
        companyPhone: null,
        companyMobilePhone: null,
        gender: null,
        startDate: null,
        endDate: null,
        dateOfLeave: null,
        hrReference: null,
        dottedLineManager: null,
        solidLineManager: null,
        nationality: null,
        businessUnit: null,
        costCenter: null,
        managementGroup: null,
        workingPosition: null,
        office: null,
        businessUnitHistoryRecords: [],
        costCenterHistoryRecordRecords: [],
        employeeHistoryRecords: [],
        groupManagementHistoryRecords: [],
        workingPositionHistoryRecords: [],
      },
    },
    {
      id: 5,
      onBoardDate: "2021-08-07T14:38:33",
      offBoardDate: "2021-12-03T14:38:33",
      employee: {
        id: 5,
        pdmId: null,
        firstName: null,
        lastName: null,
        internationalName: "Member 5",
        title: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        birthDate: null,
        companyPhone: null,
        companyMobilePhone: null,
        gender: null,
        startDate: null,
        endDate: null,
        dateOfLeave: null,
        hrReference: null,
        dottedLineManager: null,
        solidLineManager: null,
        nationality: null,
        businessUnit: null,
        costCenter: null,
        managementGroup: null,
        workingPosition: null,
        office: null,
        businessUnitHistoryRecords: [],
        costCenterHistoryRecordRecords: [],
        employeeHistoryRecords: [],
        groupManagementHistoryRecords: [],
        workingPositionHistoryRecords: [],
      },
    },
    {
      id: 6,
      onBoardDate: "2021-08-08T14:38:33",
      offBoardDate: "2021-03-03T14:38:33",
      employee: {
        id: 6,
        pdmId: null,
        firstName: null,
        lastName: null,
        internationalName: "Member 6",
        title: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        birthDate: null,
        companyPhone: null,
        companyMobilePhone: null,
        gender: null,
        startDate: null,
        endDate: null,
        dateOfLeave: null,
        hrReference: null,
        dottedLineManager: null,
        solidLineManager: null,
        nationality: null,
        businessUnit: null,
        costCenter: null,
        managementGroup: null,
        workingPosition: null,
        office: null,
        businessUnitHistoryRecords: [],
        costCenterHistoryRecordRecords: [],
        employeeHistoryRecords: [],
        groupManagementHistoryRecords: [],
        workingPositionHistoryRecords: [],
      },
    },
    {
      id: 7,
      onBoardDate: "2021-08-09T14:38:33",
      offBoardDate: "2021-04-03T14:38:33",
      employee: {
        id: 7,
        pdmId: null,
        firstName: null,
        lastName: null,
        internationalName: "Member 7",
        title: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        birthDate: null,
        companyPhone: null,
        companyMobilePhone: null,
        gender: null,
        startDate: null,
        endDate: null,
        dateOfLeave: null,
        hrReference: null,
        dottedLineManager: null,
        solidLineManager: null,
        nationality: null,
        businessUnit: null,
        costCenter: null,
        managementGroup: null,
        workingPosition: null,
        office: null,
        businessUnitHistoryRecords: [],
        costCenterHistoryRecordRecords: [],
        employeeHistoryRecords: [],
        groupManagementHistoryRecords: [],
        workingPositionHistoryRecords: [],
      },
    },
    {
      id: 8,
      onBoardDate: "2021-08-10T14:38:33",
      offBoardDate: "2021-05-03T14:38:33",
      employee: {
        id: 8,
        pdmId: null,
        firstName: null,
        lastName: null,
        internationalName: "Member 8",
        title: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        birthDate: null,
        companyPhone: null,
        companyMobilePhone: null,
        gender: null,
        startDate: null,
        endDate: null,
        dateOfLeave: null,
        hrReference: null,
        dottedLineManager: null,
        solidLineManager: null,
        nationality: null,
        businessUnit: null,
        costCenter: null,
        managementGroup: null,
        workingPosition: null,
        office: null,
        businessUnitHistoryRecords: [],
        costCenterHistoryRecordRecords: [],
        employeeHistoryRecords: [],
        groupManagementHistoryRecords: [],
        workingPositionHistoryRecords: [],
      },
    },
    {
      id: 9,
      onBoardDate: "2021-08-11T14:38:33",
      offBoardDate: "2021-06-03T14:38:33",
      employee: {
        id: 9,
        pdmId: null,
        firstName: null,
        lastName: null,
        internationalName: "Member 9",
        title: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        birthDate: null,
        companyPhone: null,
        companyMobilePhone: null,
        gender: null,
        startDate: null,
        endDate: null,
        dateOfLeave: null,
        hrReference: null,
        dottedLineManager: null,
        solidLineManager: null,
        nationality: null,
        businessUnit: null,
        costCenter: null,
        managementGroup: null,
        workingPosition: null,
        office: null,
        businessUnitHistoryRecords: [],
        costCenterHistoryRecordRecords: [],
        employeeHistoryRecords: [],
        groupManagementHistoryRecords: [],
        workingPositionHistoryRecords: [],
      },
    },
    {
      id: 10,
      onBoardDate: "2021-08-12T14:38:33",
      offBoardDate: "2021-07-03T14:38:33",
      employee: {
        id: 10,
        pdmId: null,
        firstName: null,
        lastName: null,
        internationalName: "Member 10",
        title: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        birthDate: null,
        companyPhone: null,
        companyMobilePhone: null,
        gender: null,
        startDate: null,
        endDate: null,
        dateOfLeave: null,
        hrReference: null,
        dottedLineManager: null,
        solidLineManager: null,
        nationality: null,
        businessUnit: null,
        costCenter: null,
        managementGroup: null,
        workingPosition: null,
        office: null,
        businessUnitHistoryRecords: [],
        costCenterHistoryRecordRecords: [],
        employeeHistoryRecords: [],
        groupManagementHistoryRecords: [],
        workingPositionHistoryRecords: [],
      },
    },
  ],
  pageable: {
    sort: {
      sorted: false,
      unsorted: true,
      empty: true,
    },
    offset: 0,
    pageSize: 10,
    pageNumber: 0,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalPages: 1,
  totalElements: 10,
  size: 10,
  number: 0,
  sort: {
    sorted: false,
    unsorted: true,
    empty: true,
  },
  first: true,
  numberOfElements: 10,
  empty: false,
};
