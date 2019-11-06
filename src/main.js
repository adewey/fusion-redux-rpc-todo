// @flow
import App from "fusion-react";
import Router from "fusion-plugin-react-router";
import Styletron from "fusion-plugin-styletron-react";
import Redux, {
  EnhancerToken,
  ReduxToken,
  ReducerToken
} from "fusion-plugin-react-redux";
import RPC, { RPCToken, RPCHandlersToken } from "fusion-plugin-rpc-redux-react";
import UniversalEvents, {
  UniversalEventsToken
} from "fusion-plugin-universal-events";
import { FetchToken, LoggerToken } from "fusion-tokens";
import { reactorEnhancer } from "redux-reactors";
import reducer from "./redux/index.js";
import handlers from "./rpc/index.js";
import api from "./api";
import fetch from "isomorphic-fetch";
import MuiThemeProvider, {
  MuiThemeProviderToken
} from "fusion-plugin-material-ui";

import root from "./root.js";

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(RPCToken, RPC);
  app.register(UniversalEventsToken, UniversalEvents);
  if (__NODE__) {
    app.register(RPCHandlersToken, handlers);
    app.register(api);
    app.register(LoggerToken, console);
  } else {
    app.register(FetchToken, fetch);
  }
  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);
  app.register(EnhancerToken, reactorEnhancer);
  app.register(MuiThemeProviderToken, MuiThemeProvider);
  app.register(Router);
  return app;
};
