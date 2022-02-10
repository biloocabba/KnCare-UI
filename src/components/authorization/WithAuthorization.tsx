import { Permission } from "types/security";
import { checkAuthorized } from "types/utils";

import { useAppSelector } from "redux/app";
import { selectLoggedUserRole } from "redux/features/authorization/authorization.selectors";

interface AuthorizedProps {
  children: React.ReactChild | React.ReactChild[];
  requires: Permission;
}
export const WithAuthorization = (props: AuthorizedProps) => {
  const currentUserRole = useAppSelector(selectLoggedUserRole);
  const hasPermission = checkAuthorized(currentUserRole, props.requires);
  return <>{hasPermission && props.children}</>;
};
