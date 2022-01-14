import { store } from "redux/app";

describe("Empolyee redux state tests", () => {
  describe("initial state values", () => {
    test("Should initially set employee to null", () => {
      const { entity } = store.getState().employee;
      expect(entity).toEqual(null);
    });

    test("Should initially set employees to an empty array", () => {
      const { entities } = store.getState().employee;
      expect(entities).toEqual([]);
    });

    test("Should initially set error to empty object", () => {
      const { error } = store.getState().employee;
      expect(error).toEqual({});
    });

    test("Should initially set isLoading to false", () => {
      const { isLoading } = store.getState().employee;
      expect(isLoading).toBe(false);
    });

    test("Should initially set isSuccess to false", () => {
      const { isSuccess } = store.getState().employee;
      expect(isSuccess).toBe(false);
    });
  });
  describe("mock axios requests", () => {
    // beforeEach(() => {
    //   jest.mock("../../../../__mocks__/axios");
    // });
    // test("should get employees data", async () => {
    //   let filters = {
    //     lastName: "Larvent",
    //     businessUnit: "",
    //     country: "",
    //     onboardingDate: null,
    //   };
    //   const cleanedFilters = removeEmptyAttributesFromObject(filters);
    //   store.dispatch(searchEmployees(cleanedFilters));
    //   const { employees } = store.getState().employee;
    //   expect(employees).toHaveLength(1);
    // });
    // test("should get employee data", async () => {
    //   store.dispatch(fetchEmployee(1));
    //   const { employee } = store.getState().employee;
    //   const data = await employeeService.getEmployeeById(1);
    //   expect(data).toBe("Hamli");
    //   expect(employee?.firstName).toBe("Hamli");
    // });
  });
});
