import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AsyncPaginate } from "react-select-async-paginate";
import getByRegion from "../../../services/careMemberService"

const SelectMemberPaginate = (props) => {
  const [regionName, setRegionName] = useState(null);

  useEffect(() => {
    setRegionName(props.regionName);
  }, [props.regionName]);

  const loadOptions = async (searchQuery, loadedOptions, { page }) => {

    const response = await getByRegion(regionName)
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

  const onChange = (option) => {
    if (typeof props.onChange === "function") {
      props.onChange(option);
    }
  };

  return (
    <AsyncPaginate
      key={JSON.stringify(regionName)}
      value={props.value || ""}
      loadOptions={loadOptions}
      getOptionValue={(option) => option.id}
      getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
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

SelectMemberPaginate.propTypes = {
  regionName: PropTypes.string.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func,
};

export default SelectMemberPaginate;

