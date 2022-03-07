import { Input } from "reactstrap";

interface Props {
  filter: string;
  setFilter: (filterValue: string) => void;
}

export const GlobalFilter = ({ filter, setFilter }: Props) => {
  return (
    <Input
      className="mt-3 mb-2 w-25 form-control-md"
      placeholder="Search"
      value={filter || ""}
      onChange={e => setFilter(e.target.value)}
    />
  );
};
