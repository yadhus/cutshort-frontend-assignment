import { useState } from 'react';

import { Welcome } from './Welcome';

import { ONBOARDING_STAGE } from './types';

import styles from './OnBoarding.module.css';

export const OnBoarding = () => {
  const [currentOnBoardingStage, setCurrentOnBoardingStage] =
    useState<ONBOARDING_STAGE>(ONBOARDING_STAGE.WELCOME);

  const handleNextStage = () => {
    //
  };

  return (
    <div className={styles.onBoardingContainer}>
      {currentOnBoardingStage === ONBOARDING_STAGE.WELCOME && (
        <Welcome onNext={handleNextStage} />
      )}
    </div>
  );
};
