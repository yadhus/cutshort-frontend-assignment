import { useRef, useState } from 'react';

import { Button, BUTTON_SIZES } from '../common/components/Button';

import { Welcome } from './Welcome';
import { Workspace } from './Workspace';

import { getOnBoardingStage } from './bloc';

import {
  ONBOARDING_MOVE_STAGE,
  ONBOARDING_STAGE,
  UserInfo,
  WorkspaceInfo,
} from './types';

import { ReactComponent as IconEdenLogo } from '../assets/icons/EdenLogo.svg';

import styles from './OnBoarding.module.css';

export const OnBoarding = () => {
  const welcomeStageRef = useRef<{ onDone: () => boolean }>(null);
  const workspaceStageRef = useRef<{ onDone: () => boolean }>(null);

  const [currentOnBoardingStage, setCurrentOnBoardingStage] =
    useState<ONBOARDING_STAGE>(ONBOARDING_STAGE.WELCOME);

  const [userInfo, setUserInfo] = useState<{
    fullName?: string;
    displayName?: string;
  }>();

  const [workspaceInfo, setWorkspaceInfo] = useState<{
    workspaceName?: string;
    workspaceURL?: string;
  }>();

  const handleNextStage = () => {
    switch (currentOnBoardingStage) {
      case ONBOARDING_STAGE.WELCOME:
        if (welcomeStageRef.current?.onDone()) {
          setCurrentOnBoardingStage(
            getOnBoardingStage(
              ONBOARDING_MOVE_STAGE.NEXT,
              currentOnBoardingStage
            )
          );
        }
        break;
      case ONBOARDING_STAGE.WORKSPACE:
        if (workspaceStageRef.current?.onDone()) {
          setCurrentOnBoardingStage(
            getOnBoardingStage(
              ONBOARDING_MOVE_STAGE.NEXT,
              currentOnBoardingStage
            )
          );
        }
        break;
    }
  };

  const onUpdateUserInfo = (userInfo: UserInfo) => {
    setUserInfo(userInfo);
  };

  const onUpdateWorkspaceInfo = (workspaceInfo: WorkspaceInfo) => {
    setWorkspaceInfo(workspaceInfo);
  };

  console.log('OnBoarding Info === ', userInfo, workspaceInfo);

  return (
    <div className={styles.onBoardingContainer}>
      <div className={styles.logoContainer}>
        <IconEdenLogo />
        <div>Eden</div>
      </div>
      {/* <div>Stepper</div> */}
      {currentOnBoardingStage === ONBOARDING_STAGE.WELCOME && (
        <Welcome ref={welcomeStageRef} onUpdate={onUpdateUserInfo} />
      )}
      {currentOnBoardingStage === ONBOARDING_STAGE.WORKSPACE && (
        <Workspace ref={workspaceStageRef} onUpdate={onUpdateWorkspaceInfo} />
      )}
      <Button size={BUTTON_SIZES.LARGE} width="320px" onClick={handleNextStage}>
        Create Workspace
      </Button>
    </div>
  );
};
