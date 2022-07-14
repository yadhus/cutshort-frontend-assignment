import { useEffect, useState } from 'react';

import { classNames } from '../../common/utils/common';

import { PLANS } from '../constants';
import { PLAN } from '../types';

import styles from './Planning.module.css';

interface PlanningProps {
  onUpdate: (plan: PLAN) => void;
}

export const Planning = (props: PlanningProps) => {
  const { onUpdate } = props;

  const [selectedPlan, setSelectedPlan] = useState<PLAN>(PLAN.USER);

  useEffect(() => {
    onUpdate(selectedPlan);
  }, [onUpdate, selectedPlan]);

  const onSelectPlan = (plan: typeof PLANS[0]) => {
    setSelectedPlan(plan.id);
  };

  return (
    <div className={styles.planningContainer}>
      <div className={styles.planningInfo}>
        <div className="heading-1">How are you planning to use Eden?</div>
        <div className="content-2-secondary">
          We'll streamline your setup experience accordingly
        </div>
      </div>
      <div className={styles.planCards}>
        {PLANS.map((PLAN) => {
          const PlanIcon = PLAN.icon;
          return (
            <div
              key={PLAN.id}
              className={classNames({
                [styles.planCard]: true,
                [styles.planCardActive]: selectedPlan === PLAN.id,
              })}
              onClick={() => onSelectPlan(PLAN)}
            >
              <div className={styles.planIcon}>
                <PlanIcon />
              </div>
              <div className="subtitle-2-600">{PLAN.name}</div>
              <div className="content-2-secondary">{PLAN.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
