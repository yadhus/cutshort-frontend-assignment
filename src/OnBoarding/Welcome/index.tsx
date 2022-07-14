import { useImperativeHandle, useState, forwardRef, ForwardedRef } from 'react';

import { Input } from '../../common/components/Input';

import { UserInfo } from '../types';

import styles from './Welcome.module.css';

interface WelcomeProps {
  onUpdate: (userInfo: UserInfo) => void;
}

export const Welcome = forwardRef(
  (props: WelcomeProps, ref: ForwardedRef<{ onDone: () => boolean }>) => {
    const { onUpdate } = props;

    const [userInfo, setUserInfo] = useState<UserInfo>({
      fullName: '',
      displayName: '',
    });

    const [errors, setErrors] = useState<Partial<UserInfo>>();

    useImperativeHandle(ref, () => ({
      onDone: () => {
        if (userInfo.displayName.length && userInfo.fullName.length) {
          onUpdate(userInfo);
          return true;
        } else {
          if (!userInfo.displayName) {
            setErrors((prevState) =>
              prevState
                ? {
                    ...prevState,
                    displayName: 'Please enter the display name',
                  }
                : { displayName: 'Please enter the display name' }
            );
          }
          if (!userInfo.fullName) {
            setErrors((prevState) =>
              prevState
                ? {
                    ...prevState,
                    fullName: 'Please enter the full name',
                  }
                : { fullName: 'Please enter the full name' }
            );
          }
          return false;
        }
      },
    }));

    const onUpdateUserInfo = (key: keyof typeof userInfo, val: string) => {
      setUserInfo((prevState) => ({ ...prevState, [key]: val }));
    };

    const onFocusUserInfo = (key: keyof typeof userInfo) => {
      setErrors((prevState) => ({ ...prevState, [key]: null }));
    };

    return (
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeInfo}>
          <div className="heading-1">Welcome! First things first...</div>
          <div className="subtitle-2-secondary">
            You can always change them later.
          </div>
        </div>
        <div className={styles.nameInputsContainer}>
          <Input
            label="Full Name"
            placeholder="Steve Jobs"
            value={userInfo.fullName}
            onBlur={(val) => onUpdateUserInfo('fullName', val)}
            onFocus={() => onFocusUserInfo('fullName')}
            error={errors?.fullName}
            fullWidth={true}
          />
          <Input
            label="Display Name"
            placeholder="Steve"
            value={userInfo.displayName}
            onBlur={(val) => onUpdateUserInfo('displayName', val)}
            onFocus={() => onFocusUserInfo('displayName')}
            error={errors?.displayName}
            fullWidth={true}
          />
        </div>
      </div>
    );
  }
);
