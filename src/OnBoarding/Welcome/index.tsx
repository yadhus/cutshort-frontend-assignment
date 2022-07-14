import { Button, BUTTON_SIZES } from '../../common/components/Button';
import { Input } from '../../common/components/Input';

import styles from './Welcome.module.css';

interface WelcomeProps {
  onNext: () => void;
}

export const Welcome = (props: WelcomeProps) => {
  const { onNext } = props;

  const onCreateWorkspace = () => {
    onNext();
  };

  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeInfo}>
        <div className="heading-2">Welcome! First things first...</div>
        <div className="subtitle-2-secondary">
          You can always change them later.
        </div>
      </div>
      <div className={styles.nameInputsContainer}>
        <Input label="Full Name" placeholder="Steve Jobs" />
        <Input label="Display Name" placeholder="Steve" />
      </div>
      <Button
        size={BUTTON_SIZES.LARGE}
        width="320px"
        onClick={onCreateWorkspace}
      >
        Create Workspace
      </Button>
    </div>
  );
};
