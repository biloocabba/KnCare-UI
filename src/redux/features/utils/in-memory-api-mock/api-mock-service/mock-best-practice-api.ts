import { AxiosResponse } from "axios";

import { BestPractice } from "types";

import { bestPractices } from "../api-mock-data";
import { bestPracticeMockResponse } from "../api-mock-data/mock-data";

import {
  wrapIntoResponse,
  entitySearch,
  matchAuthor,
  matchRating,
  matchTag,
  matchTitle,
  matchPublishDate,
} from ".";

export const saveBestPractice = async (body: FormData): Promise<AxiosResponse<BestPractice>> => {
  const bestPractice = toBestPractice(body) as BestPractice;
  bestPracticeMockResponse.data.push(bestPractice);
  return wrapIntoResponse(bestPractice);
};

export const toBestPractice = (formData: FormData): any => {
  const object: any = {};
  for (const [key, value] of formData.entries()) {
    object[key] = value;
    if (key === "tags") {
      (object[key] = (value as string).split(",")), [];
    }
  }
  object["contentUrl"] =
    "https://cors-anywhere.herokuapp.com/https://github.com/KNITS-OS/SkillQuest/raw/master/Resources/corporatebrochurekuehnenagel2021en.pdf";
  object["id"] = bestPractices[bestPractices.length - 1].id + 1;

  return object;
};

export const searchBestPractices = (url: string): AxiosResponse<BestPractice[]> => {
  return entitySearch<BestPractice>(url, bestPracticeMockResponse, filter);
};

const filter = (
  queryParams: URLSearchParams,
  bestPracticesData: BestPractice[]
): BestPractice[] => {
  const result: BestPractice[] = bestPracticesData.filter(bestPractice => {
    return (
      matchAuthor(queryParams, bestPractice) &&
      matchTitle(queryParams, bestPractice) &&
      matchTag(queryParams, bestPractice) &&
      matchRating(queryParams, bestPractice) &&
      matchPublishDate(queryParams, bestPractice)
    );
  });

  return result;
};
