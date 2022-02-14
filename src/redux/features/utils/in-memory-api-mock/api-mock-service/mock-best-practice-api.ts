import { AxiosResponse } from "axios";

import { bestPractices } from "../api-mock-data";

import { wrapIntoResponse } from ".";

export const saveBestPractice = async (body: FormData): Promise<AxiosResponse<FormData>> => {
  return wrapIntoResponse(toObject(body));
};

export const toObject = (formData: FormData): any => {
  const object: any = {};

  for (const [key, value] of formData.entries()) {
    // console.log(key, ":", value);
    object[key] = value;
  }
  object["contentUrl"] =
    "https://cors-anywhere.herokuapp.com/https://github.com/KNITS-OS/SkillQuest/raw/master/Resources/corporatebrochurekuehnenagel2021en.pdf";
  object["id"] = bestPractices[bestPractices.length - 1].id + 1;
  return object;
};
