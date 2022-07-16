import { useCallback, useRef, useState } from 'react';

import { Button, BUTTON_SIZES } from '../common/components/Button';
import { Step, Steps } from '../common/components/Steps';

import { Welcome } from './Welcome';
import { Workspace } from './Workspace';
import { Planning } from './Planning';
import { Completed } from './Completed';

import { getOnBoardingStage } from './bloc';

import {
  ONBOARDING_MOVE_STAGE,
  ONBOARDING_STAGE,
  ONBOARDING_STATE,
  PLAN,
  UserInfo,
  WorkspaceInfo,
} from './types';

import { ReactComponent as IconEdenLogo } from '../assets/icons/EdenLogo.svg';

import styles from './OnBoarding.module.css';

export const OnBoarding = () => {
  const welcomeStageRef = useRef<{ onDone: () => boolean }>(null);
  const workspaceStageRef = useRef<{ onDone: () => boolean }>(null);

  const [currentOnBoardingState, setCurrentOnBoardingState] =
    useState<ONBOARDING_STATE>({ step: 1, stage: ONBOARDING_STAGE.WELCOME });

  const [userInfo, setUserInfo] = useState<UserInfo>();

  const [workspaceInfo, setWorkspaceInfo] = useState<{
    workspaceName?: string;
    workspaceURL?: string;
  }>();

  const [plan, setPlan] = useState<PLAN>();

  const handleNextStage = () => {
    switch (currentOnBoardingState.stage) {
      case ONBOARDING_STAGE.WELCOME:
        if (welcomeStageRef.current?.onDone()) {
          setCurrentOnBoardingState(
            getOnBoardingStage(
              ONBOARDING_MOVE_STAGE.NEXT,
              currentOnBoardingState
            )
          );
        }
        break;
      case ONBOARDING_STAGE.WORKSPACE:
        if (workspaceStageRef.current?.onDone()) {
          setCurrentOnBoardingState(
            getOnBoardingStage(
              ONBOARDING_MOVE_STAGE.NEXT,
              currentOnBoardingState
            )
          );
        }
        break;
      case ONBOARDING_STAGE.PLANNING:
        // No check added because one plan will always be selected at any case
        setCurrentOnBoardingState(
          getOnBoardingStage(ONBOARDING_MOVE_STAGE.NEXT, currentOnBoardingState)
        );
        break;
    }
  };

  const onUpdateUserInfo = (userInfo: UserInfo) => {
    setUserInfo(userInfo);
  };

  const onUpdateWorkspaceInfo = (workspaceInfo: WorkspaceInfo) => {
    setWorkspaceInfo(workspaceInfo);
  };

  const onUpdatePlan = useCallback((plan: PLAN) => {
    setPlan(plan);
  }, []);

  console.log('OnBoarding Info === ', userInfo, workspaceInfo, plan);

  return (
    <div className={styles.onBoardingContainer}>
      <div className={styles.logoContainer}>
        <IconEdenLogo />
        <div>Eden</div>
      </div>
      <div className={styles.stepsContainer}>
        <Steps current={currentOnBoardingState.step}>
          <Step></Step>
          <Step></Step>
          <Step></Step>
          <Step></Step>
        </Steps>
      </div>
      <div className={styles.onBoardingStages}>
        {currentOnBoardingState.stage === ONBOARDING_STAGE.WELCOME && (
          <Welcome ref={welcomeStageRef} onUpdate={onUpdateUserInfo} />
        )}
        {currentOnBoardingState.stage === ONBOARDING_STAGE.WORKSPACE && (
          <Workspace ref={workspaceStageRef} onUpdate={onUpdateWorkspaceInfo} />
        )}
        {currentOnBoardingState.stage === ONBOARDING_STAGE.PLANNING && (
          <Planning onUpdate={onUpdatePlan} />
        )}
        {currentOnBoardingState.stage === ONBOARDING_STAGE.COMPLETED &&
          userInfo && <Completed userInfo={userInfo} />}
        <Button
          size={BUTTON_SIZES.LARGE}
          width="360px"
          onClick={handleNextStage}
        >
          {currentOnBoardingState.stage !== ONBOARDING_STAGE.COMPLETED
            ? 'Create Workspace'
            : 'Launch Eden'}
        </Button>
      </div>
    </div>
  );
};
