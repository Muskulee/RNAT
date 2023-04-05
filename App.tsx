import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

import NoInternet from "./app/components/NoInternet";
import { useNetInfo } from "@react-native-community/netinfo";
import Entry from "./entry";
import { store } from "./app/redux/store";

const App = () => {
  const [noInternet, setNoInternet] = useState(true);
  const netInfo = useNetInfo();

  const fetchNetInfo = () => {
    const { isConnected, isInternetReachable } = netInfo;
    if (isConnected === false && isInternetReachable === false) {
      setNoInternet(true);
    } else {
      setNoInternet(false);
    }
  };

  useEffect(() => {
    return fetchNetInfo();
  }, [netInfo]);

  if (noInternet) return <NoInternet onRefreshPress={fetchNetInfo} />;
  else {
    return (
      <Provider store={store}>
        <Entry />
      </Provider>
    );
  }
};

export default App;
