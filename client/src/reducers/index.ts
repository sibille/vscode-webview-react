import { combineReducers } from "redux";
import wizardRoutes from "./wizardRoutes";
import vscodeApi from "./vscodeApiReducer";
import selection from "./wizardSelectionReducers";
import versions from "./versionsReducer";
import RootAction from "../actions/ActionType";
import { WIZARD_INFO_TYPEKEYS } from "../actions/wizardInfoActions/typeKeys";

const appReducer = combineReducers({
  vscode: vscodeApi,
  selection,
  wizardRoutes,
  versions
});

export type AppState = ReturnType<typeof appReducer>;

const rootReducer = (state: AppState | undefined, action: RootAction) => {
  let passedState: any;

  if (action.type === WIZARD_INFO_TYPEKEYS.RESET_WIZARD) {

    /* Elements that are undefined tell the reducer to replace the element
     * with the initial state that is specified in the element's reducer.
     * See: https://redux.js.org/recipes/structuring-reducers/initializing-state
     */
    passedState = {
      dependencyInfo: undefined,
      generationStatus: undefined,
      modals: undefined,
      selection: {
        validations:state!.selection.validations,
        projectNameObject:{
          projectName:"",
          validation:{
            isValid:true,
            error:"",
            isDirty:false
          }
        }
      },
      versions: state!.versions,
      vscode: state!.vscode,
      wizardRoutes: undefined,
    };


  } else {
    passedState = state;
  }
  return appReducer(passedState, action);
};

export default rootReducer;
