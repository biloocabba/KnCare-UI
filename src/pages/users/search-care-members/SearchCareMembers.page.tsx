import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Container, Row } from "reactstrap";

import { useAppSelector } from "redux/app";
import { selectCareMembersByFilters, selectLoggedUserDefaultCountry } from "redux/features";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { CARE_MEMBER_EDIT } from "pages/users";

import { CareMember, CareMemberQueryFilters } from "types";

import { careMemberTableColumns, SearchCareMemberFilterPanel } from ".";

export const SearchCareMembersPage = () => {
  const navigate = useNavigate();

  const userCountry = useAppSelector(selectLoggedUserDefaultCountry);
  const [filters, setFilters] = useState<CareMemberQueryFilters>({
    countryIso3: userCountry,
  });

  const careMemberResultSet: CareMember[] = useAppSelector(selectCareMembersByFilters(filters));

  const onViewCareMemberDetails = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${CARE_MEMBER_EDIT}/${id}`);
  };

  const onDeleteCareMember = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <SearchCareMemberFilterPanel filters={filters} setFilters={setFilters} />
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Results</h3>
                <p className="text-sm mb-0">
                  Care Members visible according to current user&#39;s role
                </p>
              </CardHeader>

              <ReactTable
                data={careMemberResultSet}
                columns={careMemberTableColumns({
                  onDetailsButtonClick: onViewCareMemberDetails,
                  onRemoveButtonClick: onDeleteCareMember,
                })}
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
