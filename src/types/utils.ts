import moment from "moment";

export const formatDateAsDD_MM_YYYY = (date: Date): string => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() - 1}`;
};

export const addDays = (date: Date, days: number): Date => {
  return moment(date).add(days, "days").toDate();
};

export const toFileArray = (filelist: FileList): File[] => {
  if (!filelist || filelist.length === 0) {
    return [];
  }
  const files: File[] = [];
  for (let i = 0; i < filelist.length; i++) {
    const fileOrNull = filelist.item(i);
    if (fileOrNull) {
      files.push(fileOrNull);
    }
  }
  return files;
};

export const toFormData = (object: any): FormData => {
  const formData = new FormData();

  for (const key in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (!object.hasOwnProperty(key) || typeof object[key] == "function") continue;
    formData.append(key, object[key]);
  }
  return formData;
};
