import { IVersionData } from "./getVersionData";
import { ISetDetails } from "./setDetailsPage";
import { ISetVisitedPage, IResetVisitedPage } from "./setVisitedWizardPage";
import { ISetPage } from "./setPageWizardPage";
import { IUpdateCreateProjectButton } from "./updateCreateProjectButton";

import { IResetWizard } from "./resetWizardAction";
import { IUpdateDependencyInfo } from "./updateDependencyInfo";
import { IEnableQuickStart } from "./enableQuickStartAction";

type WizardInfoType =
  | IVersionData
  | ISetDetails
  | ISetVisitedPage
  | IResetVisitedPage
  | ISetPage
  | IResetWizard
  | IUpdateDependencyInfo
  | IUpdateCreateProjectButton
  | IEnableQuickStart;

export default WizardInfoType;
