import { combineReducers } from "redux";

import projectNameObject from "./updateProjectName";
import validations from "./setValidations";
import outputPathObject from "./updateOutputPath";

import isValidatingName from "./validatingNameReducer";

const selectionStateReducer = combineReducers({
  outputPathObject,
  isValidatingName,
  projectNameObject,
  validations
});

export default selectionStateReducer;
export type SelectionState = ReturnType<typeof selectionStateReducer>;
