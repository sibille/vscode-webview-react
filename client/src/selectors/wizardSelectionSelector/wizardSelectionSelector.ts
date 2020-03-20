import _ from "lodash";
import { createSelector } from "reselect";
import { ISelected } from "../../types/selected";
import { IValidation } from "../../utils/validations/validations";
import { IValidations } from "../../reducers/wizardSelectionReducers/setValidations";
import { AppState } from "../../reducers";
import { ROUTES } from "../../utils/constants";


const getProjectName = (state: AppState): string =>
  state.selection.projectNameObject.projectName;
const getProjectNameValidation = (state: AppState): IValidation =>
  state.selection.projectNameObject.validation;
const getValidations = (state: AppState): IValidations =>
  state.selection.validations;

const getOutputPath = (state: AppState): string =>
  state.selection.outputPathObject.outputPath;
const isEnableNextPage = (state: AppState): boolean =>{
  let valid = false;
  if (state.wizardRoutes.selected === ROUTES.NEW_PROJECT){
    valid = state.selection.projectNameObject.validation.isValid === true && 
      state.selection.outputPathObject.outputPath !== "";
  }



 

  return valid;
}

export interface ISelectedPages {
  selectedPages: Array<ISelected>;
}


const getOutputPathValidation = (state: AppState): IValidation =>
  state.selection.outputPathObject.validation;

const isValidNameAndProjectPath = (
  projectNameValidationObject: IValidation,
  outputPathValidationObject: IValidation,
  outputPath: string,
  projectName: string
): boolean => {
  if (!projectNameValidationObject || !outputPathValidationObject) {
    return false;
  }
  if (outputPath === "" || projectName === "") {
    return false;
  }
  if (
    !projectNameValidationObject.isValid ||
    !outputPathValidationObject.isValid
  ) {
    return false;
  }
  return true;
};

const isValidNameAndProjectPathSelector = createSelector(
  getProjectNameValidation,
  getOutputPathValidation,
  getOutputPath,
  getProjectName,
  isValidNameAndProjectPath
);




/**
 * Iterates through every service, and for every services, identifies each
 * resource that was created and adds it to a list that will be displayed on the
 * summary page. Currently supports Azure App Service and CosmosDB only. Information
 * provided is in line with props required by SummaryTile component.
 *
 * @param selection selection object created by the developer
 */





export {  
  getOutputPath,
  getOutputPathValidation,
  getProjectName,
  getValidations,
  getProjectNameValidation,
  isValidNameAndProjectPathSelector,
  isEnableNextPage
};
