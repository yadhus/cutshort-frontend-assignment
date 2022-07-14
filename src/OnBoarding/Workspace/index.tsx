import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';

import { Input } from '../../common/components/Input';

import { WorkspaceInfo } from '../types';

import styles from './Workspace.module.css';

interface WorkspaceProps {
  onUpdate: (workspaceInfo: WorkspaceInfo) => void;
}

export const Workspace = forwardRef(
  (props: WorkspaceProps, ref: ForwardedRef<{ onDone: () => boolean }>) => {
    const { onUpdate } = props;

    const [workspaceInfo, setWorkspaceInfo] = useState<WorkspaceInfo>({
      workspaceName: '',
      workspaceURL: '',
    });

    const [errors, setErrors] = useState<Partial<WorkspaceInfo>>();

    useImperativeHandle(ref, () => ({
      onDone: () => {
        if (workspaceInfo.workspaceName.length) {
          onUpdate(workspaceInfo);
          return true;
        } else {
          if (!workspaceInfo.workspaceName) {
            setErrors((prevState) =>
              prevState
                ? {
                    ...prevState,
                    workspaceName: 'Please enter the display name',
                  }
                : { workspaceName: 'Please enter the display name' }
            );
          }
          return false;
        }
      },
    }));

    const onUpdateWorkspaceInfo = (key: keyof WorkspaceInfo, val: string) => {
      setWorkspaceInfo((prevState) => ({ ...prevState, [key]: val }));
    };

    const onFocusWorkspaceInfo = (key: keyof WorkspaceInfo) => {
      setErrors((prevState) => ({ ...prevState, [key]: null }));
    };

    return (
      <div className={styles.workspaceContainer}>
        <div className={styles.workspaceInfo}>
          <div className="heading-1">Let's set up a home for all your work</div>
          <div className="subtitle-2-secondary">
            You can always create another workspace later.
          </div>
        </div>
        <div className={styles.workspaceInputsContainer}>
          <Input
            label="Workspace Name"
            placeholder="Eden"
            onBlur={(val) => onUpdateWorkspaceInfo('workspaceName', val)}
            onFocus={(val) => onFocusWorkspaceInfo('workspaceName')}
            error={errors?.workspaceName}
            fullWidth={true}
          />
          <Input
            label="Workspace URL"
            placeholder="Example"
            onBlur={(val) => onUpdateWorkspaceInfo('workspaceURL', val)}
            fullWidth={true}
          />
        </div>
      </div>
    );
  }
);
