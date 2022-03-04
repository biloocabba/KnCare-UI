import { AxiosResponse } from "axios";

import { JobTitle } from "types";

import { httpCommon } from "..";

const findAll = (): Promise<AxiosResponse<JobTitle[]>> => {
  return httpCommon.get(`/job-title`);
};

export const jobTitleService = {
  findAll,
};
