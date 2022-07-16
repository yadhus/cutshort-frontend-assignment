import React, { cloneElement } from 'react';

import { classNames } from '../../utils/common';

import './Steps.css';

interface StepsProps {
  current: number;
  children: React.ReactElement<StepProps> | React.ReactElement<StepProps>[];
}

export const Steps = (props: StepsProps) => {
  const { children, current } = props;

  return (
    <div className="ed-steps">
      {React.Children.map(children, (child, index) => {
        const childProps = {
          stepNumber: index + 1,
          finished: index + 1 < current,
          active: index + 1 === current,
        };
        return cloneElement(child, childProps);
      })}
    </div>
  );
};

interface StepProps {
  title?: string;
  stepNumber?: number;
  active?: boolean;
  finished?: boolean;
}

export const Step = (props: StepProps) => {
  const { stepNumber, active = false, finished = false } = props;

  return (
    <div className="ed-step-container">
      <div
        className={classNames({
          'ed-step': true,
          'ed-step-finish': finished,
          'ed-step-active': active,
          'subtitle-2': true,
        })}
      >
        {stepNumber}
      </div>
    </div>
  );
};
