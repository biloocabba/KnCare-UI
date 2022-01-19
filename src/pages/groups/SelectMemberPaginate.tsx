import { useEffect, useState } from "react";

import { AsyncPaginate } from "react-select-async-paginate";
// import getByRegion from "../../../services/careMemberService"

interface Props {
  regionNameProp: string;
  valueProp: string;
  onChangeProp: (option: any) => void;
}

export const SelectMemberPaginate = ({ regionNameProp, valueProp, onChangeProp }: Props) => {
  const [regionName, setRegionName] = useState("");

  useEffect(() => {
    setRegionName(regionNameProp);
  }, [regionNameProp]);

  const loadOptions = async (searchQuery: string, _: any, { page }: { page: number }) => {
    // @ts-ignore
    const response = await getByRegion(regionName);
    // `https://www.anapioficeandfire.com/api/houses?region=${regionName}&page=${page}&pageSize=10`

    const responseJSON = await response.json();

    return {
      options: responseJSON,
      hasMore: responseJSON.length >= 1,
      additional: {
        page: searchQuery ? 2 : page + 1,
      },
    };
  };

  const onChange = (option: any) => {
    if (typeof onChangeProp === "function") {
      onChangeProp(option);
    }
  };

  return (
    <AsyncPaginate
      key={JSON.stringify(regionName)}
      value={valueProp || ""}
      loadOptions={loadOptions}
      getOptionValue={(option: any) => option.id}
      getOptionLabel={(option: any) => `${option.firstName} ${option.lastName}`}
      onChange={onChange}
      isSearchable={true}
      isMulti
      placeholder="Select Members"
      additional={{
        page: 1,
      }}
    />
  );
};
