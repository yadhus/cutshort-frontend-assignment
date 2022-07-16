import {
  ONBOARDING_MOVE_STAGE,
  ONBOARDING_STAGE,
  ONBOARDING_STATE,
} from '../types';

/**
 * @param {ONBOARDING_MOVE_STAGE} moveStage - Move to next or previous stage
 * @param {ONBOARDING_STATE} state - Current stage of the onBoarding
 * @returns {ONBOARDING_STATE} - The next stage of the onBoarding
 */
export const getOnBoardingStage = (
  moveStage: ONBOARDING_MOVE_STAGE,
  state: ONBOARDING_STATE
): ONBOARDING_STATE => {
  if (moveStage === ONBOARDING_MOVE_STAGE.NEXT) {
    switch (state.stage) {
      case ONBOARDING_STAGE.WELCOME:
        return { step: 2, stage: ONBOARDING_STAGE.WORKSPACE };
      case ONBOARDING_STAGE.WORKSPACE:
        return { step: 3, stage: ONBOARDING_STAGE.PLANNING };
      case ONBOARDING_STAGE.PLANNING:
        return { step: 4, stage: ONBOARDING_STAGE.COMPLETED };
      case ONBOARDING_STAGE.COMPLETED:
        break;
    }
  }
  switch (state.stage) {
    case ONBOARDING_STAGE.WELCOME:
      return state;
    case ONBOARDING_STAGE.WORKSPACE:
      return { step: 1, stage: ONBOARDING_STAGE.WELCOME };
    case ONBOARDING_STAGE.PLANNING:
      return { step: 2, stage: ONBOARDING_STAGE.WORKSPACE };
    case ONBOARDING_STAGE.COMPLETED:
      return { step: 3, stage: ONBOARDING_STAGE.PLANNING };
  }
};
