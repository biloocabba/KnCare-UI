import { FilterPanel } from "components/panels";

import { GroupQueryFilters } from "types";

interface onSearchGroupsFunction {
  (filters: GroupQueryFilters): void;
}

interface Props {
  onSearch: onSearchGroupsFunction;
}

export const SearchGroupsFilter = ({ onSearch }: Props) => {
  const resetFilters = () => {};

  const findByAllParameters = () => {
    const filters: GroupQueryFilters = {};
    onSearch(filters);
  };

  return (
    <FilterPanel
      title="Search Groups"
      findByAllParameters={findByAllParameters}
      resetFilters={resetFilters}
    >
      {/* @todo add active filter, etc */}
    </FilterPanel>
  );
};
