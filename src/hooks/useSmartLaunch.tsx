import { useEffect, useState } from 'react';
import { oauth2 as SMART } from "fhirclient";

const useSmartLaunch = () => {
    const [fhirClient, setFhirClient] = useState();

    useEffect(() => {
        // The ISS, a launcher, and other config can be found at https://launch.smarthealthit.org
        // For more detailed fhir-client info, visit http://docs.smarthealthit.org/client-js/
        SMART.init({
          iss:
            "https://launch.smarthealthit.org/v/r4/sim/eyJoIjoiMSIsImIiOiJzbWFydC0xNjQyMDY4IiwiZSI6InNtYXJ0LVByYWN0aXRpb25lci03MTYxNDUwMiJ9/fhir",
          clientId: "somethingoranother",
          redirectUri: "/pathway-fhir",
          scope: "offline_access launch openid fhirUser patient/*.read",
          completeInTarget: true,
        }).then((client: any) => setFhirClient(client));
      }, []);

      return fhirClient;
}

export default useSmartLaunch;