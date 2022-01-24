import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { RouteParams } from "types";

import { EditEmail } from "../email-panels";

export const EmailDetailsPage = () => {
  const { id } = useParams<RouteParams>();

  const initialEmailState = {};
  // const [initialEmailState, setInitialEmailState] = useState();
  // const [error, setError] = useState({
  //   isActive: false,
  //   error: {},
  // });

  useEffect(() => {}, [id]);
  // useEffect(() => {
  //   emailService
  //     .getOne(id)
  //     .then(response => setInitialEmailState(response.data))
  //     .catch(error => setError({ isActive: true, error: error }));
  // }, [id]);

  /*React wants to render something right away, but we cannot render the
    EmailEditor right away, because we need to fetch the required data from
    the API. We will let React render a placeholder loading component in the meantime.
    Right now this solution is ugly in my opinion but there are'nt any better 
    solutions currently out there (as far as I know). React 18 seeks to add
    a new improved Suspense component but React 18 won't be released for
    at least several months as of now */
  // const renderPage = () => {
  //   if (initialEmailState != null) {
  //     return <EmailEditor initialEmailState={initialEmailState} />;
  //   } else if (error.isActive) {
  //     return <p>Error {error.error.status}!</p>;
  //     //could do with a special error page (Maybe an idea for a future Jira issue)
  //   } else {
  //     return <p>Loading...</p>;
  //     //could do with a special loading component (Maybe an idea for a future Jira issue)
  //   }
  // };

  // return renderPage();

  return <EditEmail initialEmailState={initialEmailState} />;
};
