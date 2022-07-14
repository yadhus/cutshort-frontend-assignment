import { BiCheck } from 'react-icons/bi';

import { UserInfo } from '../types';

import styles from './Completed.module.css';

interface CompletedProps {
  userInfo: UserInfo;
}

export const Completed = (props: CompletedProps) => {
  const { userInfo } = props;

  return (
    <div>
      <div className={styles.completedInfo}>
        <div className={styles.completedStatus}>
          <BiCheck size="24" color="#ffffff" />
        </div>
        <div className="heading-2">
          Congratulations, {userInfo.displayName}!
        </div>
        <div className="subtitle-2-secondary">
          You have completed onboarding, you can start using the Eden!
        </div>
      </div>
    </div>
  );
};
