import { ONBOARDING_MOVE_STAGE, ONBOARDING_STAGE } from '../types';

/**
 * @param {ONBOARDING_MOVE_STAGE} moveStage - Move to next or previous stage
 * @param {ONBOARDING_STAGE} state - Current stage of the onBoarding
 * @returns {ONBOARDING_STAGE} - The next stage of the onBoarding
 */
export const getOnBoardingStage = (
  moveStage: ONBOARDING_MOVE_STAGE,
  state: ONBOARDING_STAGE
): ONBOARDING_STAGE => {
  if (moveStage === ONBOARDING_MOVE_STAGE.NEXT) {
    switch (state) {
      case ONBOARDING_STAGE.WELCOME:
        return ONBOARDING_STAGE.WORKSPACE;
      case ONBOARDING_STAGE.WORKSPACE:
        return ONBOARDING_STAGE.PLANNING;
      case ONBOARDING_STAGE.PLANNING:
        return ONBOARDING_STAGE.COMPLETED;
      case ONBOARDING_STAGE.COMPLETED:
        break;
    }
  }
  switch (state) {
    case ONBOARDING_STAGE.WELCOME:
      return state;
    case ONBOARDING_STAGE.WORKSPACE:
      return ONBOARDING_STAGE.WELCOME;
    case ONBOARDING_STAGE.PLANNING:
      return ONBOARDING_STAGE.WORKSPACE;
    case ONBOARDING_STAGE.COMPLETED:
      return ONBOARDING_STAGE.PLANNING;
  }
};
