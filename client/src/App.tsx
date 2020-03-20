import classnames from "classnames";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {  RouteComponentProps } from "react-router-dom";
import { ReactComponent as HomeSplashSVG } from "./assets/homeSplash.svg";

import {
  ROUTES,
} from "./utils/constants";

import { getVSCodeApi } from "./actions/vscodeApiActions/getVSCodeApi";


import appStyles from "./appStyles.module.css";
import { getVSCodeApiSelector } from "./selectors/vscodeApiSelector";
import { IVSCodeObject } from "./reducers/vscodeApiReducer";

import { AppState } from "./reducers";

import { ThunkDispatch } from "redux-thunk";
import RootAction from "./actions/ActionType";



import Loadable from "react-loadable";

import TopNavBar from "./components/TopNavBar";




interface IDispatchProps {
  getVSCodeApi: () => void;
}

interface IStateProps {
  vscode: IVSCodeObject;
}

type Props = IDispatchProps & IStateProps & RouteComponentProps;

const App = (props: Props) => {
  const { vscode } = props;
  const [isLoaded, setIsLoaded] = React.useState(false);
  const promisesLoading: Array<any> = new Array<any>();

  const addToPromisesList = (promise: Promise<any>)=>{
    promisesLoading.push(promise);
    return promise;
  }
  const Header = Loadable({
    loader: () => addToPromisesList(import(/* webpackChunkName: "Header" */  "./containers/Header")),
    loading:() => <div/>
  });
  const PageNewProject = Loadable({
    loader: () => addToPromisesList(import(/* webpackChunkName: "PageNewProject" */ "./containers/PageNewProject")),
    loading:() => <div/>
  });


  Promise.all(promisesLoading).then(()=>{
    setIsLoaded(true);
  })

  React.useEffect(()=>{
    props.getVSCodeApi();
  },[]);



  const { pathname } = props.location;
  return (
    <React.Fragment>
      <Header />
      <TopNavBar />

    <div>
        <main
          className={classnames(appStyles.centerView, {
            [appStyles.centerViewNewProjectPage]:
              pathname === ROUTES.NEW_PROJECT
          })}
        >
          {pathname === ROUTES.NEW_PROJECT ? (
            <HomeSplashSVG
             className={classnames(appStyles.splash, appStyles.homeSplash)}
            />
          ) : null}

        </main>
      </div>)}

    </React.Fragment>
  );
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, RootAction>
): IDispatchProps => ({
  getVSCodeApi: () => {
    dispatch(getVSCodeApi());
  },
});

const mapStateToProps = (state: AppState): IStateProps => ({
  vscode: getVSCodeApiSelector(state),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
