
import VSCodeActionTypes from "./vscodeApiActions/VSCodeActionType";

import WizardSelectionActionType from "./wizardSelectionActions/wizardSelectionActionType";
import WizardInfoActionType from "./wizardInfoActions/wizardInfoActionType";

type RootAction =

  | VSCodeActionTypes

  | WizardSelectionActionType
  | WizardInfoActionType;

export default RootAction;
