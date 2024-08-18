import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RequestList } from "./request/RequestList";
import { RequestCreate } from "./request/RequestCreate";
import { RequestEdit } from "./request/RequestEdit";
import { RequestShow } from "./request/RequestShow";
import { FlightFareList } from "./flightFare/FlightFareList";
import { FlightFareCreate } from "./flightFare/FlightFareCreate";
import { FlightFareEdit } from "./flightFare/FlightFareEdit";
import { FlightFareShow } from "./flightFare/FlightFareShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Flights"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Request"
          list={RequestList}
          edit={RequestEdit}
          create={RequestCreate}
          show={RequestShow}
        />
        <Resource
          name="FlightFare"
          list={FlightFareList}
          edit={FlightFareEdit}
          create={FlightFareCreate}
          show={FlightFareShow}
        />
      </Admin>
    </div>
  );
};

export default App;
