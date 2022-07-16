export enum ONBOARDING_STAGE {
  WELCOME = 'welcome',
  WORKSPACE = 'workspace',
  PLANNING = 'planning',
  COMPLETED = 'completed',
}

export interface ONBOARDING_STATE {
  step: number;
  stage: ONBOARDING_STAGE;
}

export enum ONBOARDING_MOVE_STAGE {
  NEXT = 'next',
  PREVIOUS = 'previous',
}

export interface UserInfo {
  fullName: string;
  displayName: string;
}

export interface WorkspaceInfo {
  workspaceName: string;
  workspaceURL?: string;
}

export enum PLAN {
  USER = 'user',
  TEAM = 'team',
}
