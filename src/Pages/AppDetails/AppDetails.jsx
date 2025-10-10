import { useLoaderData, useParams } from "react-router";
import NoAppFound from "../NoAppFound/NoAppFound";

const AppDetails = () => {
  const allApps = useLoaderData();

  const { id } = useParams();
  const targetedApp = allApps.find((app) => app.id === Number(id));
  console.log(targetedApp);

  return (
    <>
      {targetedApp ? (
        <div>
          <p>From AppDetails</p>
        </div>
      ) : (
        <NoAppFound></NoAppFound>
      )}
    </>
  );
};

export default AppDetails;
