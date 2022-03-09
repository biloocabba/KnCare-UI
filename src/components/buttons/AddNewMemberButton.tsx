import { Button, FormGroup } from "reactstrap";

import { CareMember, Group } from "types";

interface Props {
  selectedFlatRows?: CareMember[];
  toggleAllRowsSelected?: (value?: boolean | undefined) => void;
  setGroup: (group: Group) => void;
  setCurrentGroupMembers: React.Dispatch<React.SetStateAction<CareMember[]>>;
  setSaveSent: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  group: Group;
}

export const AddNewMemberButton = ({
  selectedFlatRows = [],
  toggleAllRowsSelected,
  setCurrentGroupMembers,
  setGroup,
  setSaveSent,
  setSuccessMessage,
  setIsSuccess,
  group,
}: Props) => {
  const onCareMemberAdd = () => {
    const careMemberIds = selectedFlatRows.map(careMember => careMember.id);

    setGroup({ ...group, members: [...group.members, ...careMemberIds] });
    setCurrentGroupMembers(previousCareMembers => [...previousCareMembers, ...selectedFlatRows]);

    setSuccessMessage("Member(s) added successfully");
    setIsSuccess(true);
    setSaveSent(true);

    if (toggleAllRowsSelected) {
      toggleAllRowsSelected();
    }
  };

  return (
    <FormGroup>
      <Button color="success" onClick={onCareMemberAdd}>
        Add Members To Group
      </Button>
    </FormGroup>
  );
};
